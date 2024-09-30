import esMain from "es-main";
import { getAllTgzPath } from "./get-all-tgz-path";
import { exec } from "child_process";
import { exit } from "process";
import { promisify } from "node:util";
import { rm } from "fs";

const execPromise = promisify(exec);

async function cleanUpTgzFiles(): Promise<void> {
  const TAG = "[tools/custom-checks/run-attw-on-tgz.ts]";
  console.log(`${TAG} Cleaning up existing .tgz files...`);

  const { relativePaths: tgzFilesRelative } = await getAllTgzPath();

  for (const filePath of tgzFilesRelative) {
    await rm(filePath, { recursive: true, force: true }, () => {});
    console.log(`${TAG} Deleted ${filePath}`);
  }
}

export async function runAttwOnTgz(): Promise<[boolean, string[]]> {
  await cleanUpTgzFiles();

  const TAG = "[tools/custom-checks/run-attw-on-tgz.ts]";
  await exec("yarn lerna exec 'npm pack'");
  console.log(`${TAG} Packaging .tgz files`);

  console.log(`${TAG} Fetching .tgz file paths.`);
  const { relativePaths: tgzFilesRelative } = await getAllTgzPath();

  let attwFailedPackages: string[] = [];

  for (const filePath of tgzFilesRelative) {
    try {
      const output = await execCommand("attw", filePath);
      console.log(output);
    } catch (error: any) {
      attwFailedPackages.push(
        `ERROR ${filePath}: ${error.message} ${error.output}`,
      );
    }
  }

  const success = attwFailedPackages.length === 0;
  return [success, attwFailedPackages];
}

async function execCommand(
  binaryName: string,
  filePath: string,
): Promise<string> {
  const command = `${binaryName} ./${filePath}`;
  try {
    const { stdout, stderr } = await execPromise(command);
    return stdout + (stderr ? `\n${stderr}` : "");
  } catch (error: any) {
    const { stdout, stderr } = error;
    const output =
      (stdout ? `stdout:\n${stdout}` : "") +
      (stderr ? `\nstderr:\n${stderr}` : "");
    error.output = output;
    throw error;
  }
}

if (esMain(import.meta)) {
  const [success, attwFailedPackages] = await runAttwOnTgz();
  if (!success) {
    console.log("Types are wrong for these packages:");
    console.log(attwFailedPackages);
    exit(1);
  }
  exit(0);
}
