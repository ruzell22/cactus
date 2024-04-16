window.BENCHMARK_DATA = {
  "lastUpdate": 1713252625062,
  "repoUrl": "https://github.com/ruzell22/cactus",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "eduardovasques10@tecnico.ulisboa.pt",
            "name": "eduv09",
            "username": "eduv09"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "ecf52ecce310d626ea96a53c2d41dcb797510c4d",
          "message": "feat(bungee-hermes): new plugin bungee-hermes\n\n* refactored plugin bungee, using strategy design pattern\n* current version has strategy both for fabric and besu networks\n* includes a few tests to demonstrate basic functionality\n* added README with package documentation\n* added bungee tests to Cactus CI\n\nCo-authored-by: eduv09 <eduardovasques10@tecnico.ulisboa.pt>\nCo-authored-by: André Augusto <andre.augusto@tecnico.ulisboa.pt>\nCo-authored-by: Rafael Belchior <rafael.belchior@tecnico.ulisboa.pt>\n\nSigned-off-by: eduv09 <eduardovasques10@tecnico.ulisboa.pt>",
          "timestamp": "2024-04-05T11:31:53-07:00",
          "tree_id": "8e24e7b305c40c6af4e6834aece6d9fac6f871a3",
          "url": "https://github.com/ruzell22/cactus/commit/ecf52ecce310d626ea96a53c2d41dcb797510c4d"
        },
        "date": 1712543794335,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 588,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 372,
            "range": "±1.13%",
            "unit": "ops/sec",
            "extra": "182 samples"
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
          "id": "331d6b422b2c03f89d737d2e32c3fc79a563fd69",
          "message": "test(connector-besu): migrate v21-get-transaction-endpoint to Jest\n\nThe full file path of the test case:\n\n```sh\npackages/cactus-test-plugin-ledger-connector-besu/src/test/typescript/\nintegration/plugin-validator-besu/v21-get-transaction-endpoint.test.ts\n```\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-04-15T20:48:36-07:00",
          "tree_id": "d4ed207acf6cc822e5d2213777d6dd72a88ab153",
          "url": "https://github.com/ruzell22/cactus/commit/331d6b422b2c03f89d737d2e32c3fc79a563fd69"
        },
        "date": 1713252623174,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 573,
            "range": "±1.68%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 360,
            "range": "±1.33%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}