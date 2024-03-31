window.BENCHMARK_DATA = {
  "lastUpdate": 1711893673062,
  "repoUrl": "https://github.com/ruzell22/cactus",
  "entries": {
    "Benchmark": [
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
          "id": "db1aef8d03ac6da84d6ea44fb13c700fd49ceaf2",
          "message": "docs(examples/cbdc): upgrade web3 from v1.5.2 to v1.10.1\n\n1. This had to be done because of security vulnerabilities in the old version.\n2. Originally the robots have attempted to send a pull request with the\nsame change but it somehow went haywire and upgraded dozens of other\nversions in dozens of other packcages not the intended one...\n3. So this was manually created to address that bug in GitHub's\ndependabot.\n4. The original commit message did not mention which vulnerabilities\nare  being fixed by it and I also cannot remember the specific ones but\nthe older versions of web3 were definitely being affected and therefore\nit is known to be a good idea what the bot has proposed even though it\ncouldn't explain itself.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-03-30T09:44:29-07:00",
          "tree_id": "937bf4c285c6e14469bc5ac00c388429c184004c",
          "url": "https://github.com/ruzell22/cactus/commit/db1aef8d03ac6da84d6ea44fb13c700fd49ceaf2"
        },
        "date": 1711893669945,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 589,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 368,
            "range": "±1.47%",
            "unit": "ops/sec",
            "extra": "179 samples"
          }
        ]
      }
    ]
  }
}