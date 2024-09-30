import esMain from "es-main";
import { getAllTgzPath } from "./get-all-tgz-path";
import { exec } from "child_process";
import { exit } from "process";

let attwFailedPackages: string[] = [];

export async function runAttwOnTgz(): Promise<void> {
  const TAG = "[tools/custom-checks/run-attw-on-tgz.ts]";
  console.log(`${TAG} Fetching .tgz file paths.`);

  {
    const { relativePaths: tgzFilesRelative } = await getAllTgzPath();
    console.log(`${TAG} Found ${tgzFilesRelative.length} .tgz files.`);
    for (const filePath of tgzFilesRelative) {
      await execCommand("attw", filePath);
    }
  }

  function execCommand(binaryName: string, filePath: string): Promise<void> {
    return new Promise((resolve) => {
      const command = binaryName + " ./" + filePath;
      exec(command, (error, stdout) => {
        if (error) {
          console.log(stdout);
          attwFailedPackages.push(filePath);
          resolve();
        } else {
          resolve();
        }
      });
    });
  }
}

if (esMain(import.meta)) {
  await runAttwOnTgz();
  if (attwFailedPackages.length > 0) {
    console.log("Types are wrong for these packages:");
    console.log(attwFailedPackages);
    exit(1);
  }
  exit(0);
}
