window.BENCHMARK_DATA = {
  "lastUpdate": 1709789798547,
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
          "id": "0804bab4c9b43f2e22be6d77be127415a9a0532f",
          "message": "perf(cmd-api-server): add demonstration of continuous benchmarking\n\nPrimary change:\n---------------\n\nThis is the ice-breaker for some work that got stuck related to this issue:\nhttps://github.com/hyperledger/cacti/issues/2672\n\nThe used benchamking library (benchmark.js) is old but solid and has\nalmost no dependencies which means that we'll be in the clear longer term\nwhen it comes to CVEs popping up.\n\nThe benchmarks added here are very simple and measure the throughput of\nthe API server's Open API spec providing endpoints.\n\nThe GitHub action that we use is designed to do regression detection and\nreporting but this is hard to verify before actually putting it in place\nas we cannot simulate the CI environment's clone on a local environment.\n\nThe hope is that this change will make it so that if someone tries to\nmake a code change that will lower performance significantly, then we\ncan catch that at the review stage instead of having to find out later.\n\nSecondary change:\n-----------------\n\n1. Started using tsx in favor of ts-node because it appers to be about\n5% faster when looking at the benchmark execution. It also claims to have\nless problems with ESM compared to ts-node so if this initial trial\ngoes well we could later on decide to swap out ts-node with it project-wide.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-02-02T00:09:44-08:00",
          "tree_id": "741d7ddf0400698b2fdfb3d8ac58c18e884a4afe",
          "url": "https://github.com/ruzell22/cactus/commit/0804bab4c9b43f2e22be6d77be127415a9a0532f"
        },
        "date": 1707195018025,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 620,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 381,
            "range": "±1.58%",
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
          "id": "f59f3695366f0e35b5a4feb06ab5837c48e5e662",
          "message": "test(test-tooling): migrate AIO image to Fabric v2.5.6, add constants\n\n1. The Fabric v2 image has been migrated to the current LTS release\nwhich has increased stability and of course adheres to general best\npractices more thoroughly since now we are in sync with the Fabric\nmaintainers in terms of LTS.\n2. The newer versions of the fabric-samples test-net containers have\nsome of the configuration files under different paths and this had to be\nreverse engineered by manually inspecting the containers at runtime and\nsearching for the same files in different directories. To make this\neasier in the future for people who are using the AIO image, we've added\na collection of constants to the test-tooling package that stores the\npaths hardcoded that are exported via verbose variable names that pin these\nto the specific Fabric version they are related to so that in the future\nif these paths change again, we can accommodate the change in a way that\nis not too confusing by exporting more variables with slightly different\nnames and values.\n3. The image built from the updated `Dockerfile_v2` is accessible on GHCR\nas: `ghcr.io/hyperledger/cactus-fabric2-all-in-one:2024-03-03--issue-2945-fabric-v2-5-6`\nwhich has the v2.5.6 versioned container images pre-cached (embedded) so that\nnetwork transfer does not need to occur and rate limiting doesn't produce\nCI flakes (DockerHub has rate limits for image downloading that we regularly\nhit when we don't embed the Fabric container images this way...).\n4. Why can't we just pull the values for these constants directly from the\ncontainer at runtime?\n4.1. The list of constants and their names/values change based on the\nFabric version that's being used by the AIO image.\n4.2. The only ones that could be pulled are the ones that belong to the\nfirst organization because this is the one that the CLI container uses.\n4.3. Configuration files that store the constants' values for the second\norganization are also located in different directories depending on the\nFabric version being used.\n4.4. The fabric-samples repo have been known to make breaking changes\nto older releases which would then make it even harder to debug if we\nhad logic for identifying the constants that suddenly broke (this specific\nincident has happened in the past unfortunately)\n4.5. In short, there is definitely a case for applying the DRY principle\nhere, but in this particular case it appears to be not worth it due to\nthe increased complexity that the convoluted additional logic would bring.\n\nRelated but does not fix https://github.com/hyperledger/cacti/issues/1899\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-03-06T18:19:52-08:00",
          "tree_id": "5ddb7936c3b127725a5827734a38e9561b5f508c",
          "url": "https://github.com/ruzell22/cactus/commit/f59f3695366f0e35b5a4feb06ab5837c48e5e662"
        },
        "date": 1709789796421,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 590,
            "range": "±1.81%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 377,
            "range": "±1.45%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      }
    ]
  }
}