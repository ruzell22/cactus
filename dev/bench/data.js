window.BENCHMARK_DATA = {
  "lastUpdate": 1720677445345,
  "repoUrl": "https://github.com/ruzell22/cactus",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sandeep.nishad1@ibm.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "6994e5b7a43b4f3e06535babb17edd466c4d4abc",
          "message": "fix(weaver-go-sdk): revert fabric-protos-go-apiv2 dep to fabric-protos-go\n\n    * Added a script to manually change go package names inside fabric-protos\n      to fabric-protos-go-apiv2 (for future migration apiv2).\n    * Added more unit and build tests covering all go modules\n    * Added tools/go-mod-tidy.sh script to fix go.mod by running go mod tidy\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-05-24T12:02:26-07:00",
          "tree_id": "d362d441cc6cadaf31b7851a6c4578c64fe3adcd",
          "url": "https://github.com/ruzell22/cactus/commit/6994e5b7a43b4f3e06535babb17edd466c4d4abc"
        },
        "date": 1716996751527,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 361,
            "range": "±1.42%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "4253d3f75aef3e3e7849c56182ddd67e56f89fb3",
          "message": "fix: the CVEs of braces nth-check vite webpack-dev-middleware - 2024-07\n\n1. We have several high severity CVEs in the project and this intends to\nfix a large batch of them by forcing the resolutions project-wide.\n2. Longer term fix is to upgrade our direct dependencies that will have\nupgraded their own direct and transitive dependencies to non-vulnerable\nversions but while we wait for all the fixes to trickle up through our\ndependency tree we need a solution that avoids having the vulnerable\nversions installed.\n3. This does not fix all the currently vulnerable dependencies of ours\nbecause some of the dependencies have not shipped a fix yet at all and\nin these cases our only other option would be to strip out the library\nand re-implement something from scratch.\n4. The dependencies which did not have a fix available I prefixed with \"x-\"\nin the root package.json's resolutions declaration so that they are there\nat least for reference and as soon as (hopefully soon) the fixes ship\nwe just need to remove the x- prefix to make it available.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-10T21:21:27-07:00",
          "tree_id": "585ffa0df680b7c4a797efe0c5b6b7d837d8e4c3",
          "url": "https://github.com/ruzell22/cactus/commit/4253d3f75aef3e3e7849c56182ddd67e56f89fb3"
        },
        "date": 1720677442597,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 593,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 360,
            "range": "±1.40%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}