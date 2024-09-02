window.BENCHMARK_DATA = {
  "lastUpdate": 1725254300933,
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
          "id": "c8b33c8052c609e449f83a5c85d74cbbeeb1cca1",
          "message": "build: project-wide upgrade of joi to v17.13.3\n\n1. Also sneaking in a fix for the ci.yaml where the coverage path env\nvariables were not declared for the stellar connector's tests and that\nwas causing the test job to fail entirely.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-16T07:18:22-07:00",
          "tree_id": "71ff846f1d5c54947fd3fe85c57666ec9eea08c8",
          "url": "https://github.com/ruzell22/cactus/commit/c8b33c8052c609e449f83a5c85d74cbbeeb1cca1"
        },
        "date": 1721187306229,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 601,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 363,
            "range": "±1.48%",
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
          "id": "497ea3226631fdcad763e6281ee058d91ca01988",
          "message": "test(test-tooling): add container image builder utilities\n\n1. Currently our integration tests depend on pre-published container\nimages to be on the official registry (ghcr.io). This has pros and cons.\nThe pro is that we can pin the tests to a specific ledger version and\nthen have confidence that the test code works with that specific image.\nOn the other hand if the image itself has problems we won't know it until\nafter it was published and then tests were executed with it (unless we\nperform manual testing which is a lot of effrot as it requires the\nmanual modification of the test cases).\n2. In order to gives us the ability to test against the container image\ndefinitions as they are in the current revision of the source code,\nwe are adding here a couple of utility functions to streamline writing\ntest cases that build the container images for themselves as part of the\ntest case.\n\nAn example of how to use it in a test case:\n\n```typescript\nconst imgConnectorJvm = await buildImageConnectorCordaServer({\n    logLevel,\n});\n\n// ...\n\nconnector = new CordaConnectorContainer({\n    logLevel,\n    imageName: imgConnectorJvm.imageName,\n    imageVersion: imgConnectorJvm.imageVersion,\n    envVars: [envVarSpringAppJson],\n});\n\n```\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-17T17:31:23-07:00",
          "tree_id": "59d3d8a612cce5ee7e4b23eb014491baec319e68",
          "url": "https://github.com/ruzell22/cactus/commit/497ea3226631fdcad763e6281ee058d91ca01988"
        },
        "date": 1721264499930,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 587,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 355,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233",
          "message": "feat(persistence-fabric): rewrite the plugin\n\n- Rewrite fabric persistence plugin to match persistence ethereum\n  plugin methods and behavior.\n- Change DB schema for persistence.\n- Add tests and sample data to the new plugin. Add them to project CI.\n\nDepends on #3298\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-18T22:52:54+02:00",
          "tree_id": "0626c0274134b1741d7760598515ec09ec8bf02e",
          "url": "https://github.com/ruzell22/cactus/commit/c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233"
        },
        "date": 1721361110576,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 589,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 361,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233",
          "message": "feat(persistence-fabric): rewrite the plugin\n\n- Rewrite fabric persistence plugin to match persistence ethereum\n  plugin methods and behavior.\n- Change DB schema for persistence.\n- Add tests and sample data to the new plugin. Add them to project CI.\n\nDepends on #3298\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-18T22:52:54+02:00",
          "tree_id": "0626c0274134b1741d7760598515ec09ec8bf02e",
          "url": "https://github.com/ruzell22/cactus/commit/c867a9f5ef084e4e6d7c6f5a641d1dd13f9ce233"
        },
        "date": 1721361950154,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 688,
            "range": "±3.12%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jagpreet.singh.sasan@accenture.com",
            "name": "jagpreetsinghsasan",
            "username": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "9c4d9be8ac7a1608bf15cbaf887ed0836c02f747",
          "message": "build(api-client): generate go client\n\n    Primary Changes\n    ----------------\n    1. Updated package.json file for packages to\n       include the new codegen script\n    2. Added a new dep, replace for string\n       manupulation in package.json\n\nFixes #393\n\nSigned-off-by: jagpreetsinghsasan <jagpreet.singh.sasan@accenture.com>",
          "timestamp": "2024-07-25T14:06:22-07:00",
          "tree_id": "4db60a87b0df4cca6a76f559d461c607d148f604",
          "url": "https://github.com/ruzell22/cactus/commit/9c4d9be8ac7a1608bf15cbaf887ed0836c02f747"
        },
        "date": 1722305553873,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 568,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 338,
            "range": "±1.49%",
            "unit": "ops/sec",
            "extra": "178 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jagpreet.singh.sasan@accenture.com",
            "name": "jagpreetsinghsasan",
            "username": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "9c4d9be8ac7a1608bf15cbaf887ed0836c02f747",
          "message": "build(api-client): generate go client\n\n    Primary Changes\n    ----------------\n    1. Updated package.json file for packages to\n       include the new codegen script\n    2. Added a new dep, replace for string\n       manupulation in package.json\n\nFixes #393\n\nSigned-off-by: jagpreetsinghsasan <jagpreet.singh.sasan@accenture.com>",
          "timestamp": "2024-07-25T14:06:22-07:00",
          "tree_id": "4db60a87b0df4cca6a76f559d461c607d148f604",
          "url": "https://github.com/ruzell22/cactus/commit/9c4d9be8ac7a1608bf15cbaf887ed0836c02f747"
        },
        "date": 1722306406515,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 687,
            "range": "±2.85%",
            "unit": "ops/sec",
            "extra": "178 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aldousss.alvarez@gmail.com",
            "name": "aldousalvarez",
            "username": "aldousalvarez"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "fdce6b3222fbec1c0f05db41dd5b93fbc8a8939d",
          "message": "ci(connector-xdai): fix docker rate limit issues with openethereum image pull\n\nPrimary Changes\n----------------\n1. Migrated all the xdai connector tests to besu ledger\n   images that is being pulled from ghcr\n\nFixes #3413\n\nSigned-off-by: aldousalvarez <aldousss.alvarez@gmail.com>",
          "timestamp": "2024-08-01T10:57:28-07:00",
          "tree_id": "2fecc0a53a69a02fe88066a2239c35ccea8728a9",
          "url": "https://github.com/ruzell22/cactus/commit/fdce6b3222fbec1c0f05db41dd5b93fbc8a8939d"
        },
        "date": 1722913942550,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 602,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 363,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sandeep.nishad1@ibm.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "committer": {
            "email": "sandeepn.official@gmail.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "distinct": true,
          "id": "30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8",
          "message": "chore: updating golang version in docs, and proto-grpc dependencies\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-08-15T01:03:09+05:30",
          "tree_id": "9ddb9aef4da5f33d5a7f1d46c68186b4551febc7",
          "url": "https://github.com/ruzell22/cactus/commit/30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8"
        },
        "date": 1723700010873,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.56%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 335,
            "range": "±2.34%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sandeep.nishad1@ibm.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "committer": {
            "email": "sandeepn.official@gmail.com",
            "name": "Sandeep Nishad",
            "username": "sandeepnRES"
          },
          "distinct": true,
          "id": "30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8",
          "message": "chore: updating golang version in docs, and proto-grpc dependencies\n\nSigned-off-by: Sandeep Nishad <sandeep.nishad1@ibm.com>",
          "timestamp": "2024-08-15T01:03:09+05:30",
          "tree_id": "9ddb9aef4da5f33d5a7f1d46c68186b4551febc7",
          "url": "https://github.com/ruzell22/cactus/commit/30cde8bc3b1b1ca9ba7ebe1eb6e3d181551df0a8"
        },
        "date": 1723700857761,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 716,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "179 samples"
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
          "id": "7e7bb44c01a2d19306ecaaaa2ba2e3c574039c87",
          "message": "fix(security): address CVE-2024-39338 SSRF in axios >= 1.3.2, <= 1.7.3\n\nhttps://github.com/hyperledger/cacti/security/dependabot/1172\n\nCVE ID\nCVE-2024-39338\n\nGHSA ID\nGHSA-8hc4-vh64-cxmj\n\naxios 1.7.2 allows SSRF via unexpected behavior where requests for path\nrelative URLs get processed as protocol relative URLs.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-08-30T09:12:59-07:00",
          "tree_id": "0d531b6cecfdea199fa7b9fd51d490b915f11c3f",
          "url": "https://github.com/ruzell22/cactus/commit/7e7bb44c01a2d19306ecaaaa2ba2e3c574039c87"
        },
        "date": 1725253449503,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 562,
            "range": "±1.69%",
            "unit": "ops/sec",
            "extra": "176 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 329,
            "range": "±2.05%",
            "unit": "ops/sec",
            "extra": "178 samples"
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
          "id": "7e7bb44c01a2d19306ecaaaa2ba2e3c574039c87",
          "message": "fix(security): address CVE-2024-39338 SSRF in axios >= 1.3.2, <= 1.7.3\n\nhttps://github.com/hyperledger/cacti/security/dependabot/1172\n\nCVE ID\nCVE-2024-39338\n\nGHSA ID\nGHSA-8hc4-vh64-cxmj\n\naxios 1.7.2 allows SSRF via unexpected behavior where requests for path\nrelative URLs get processed as protocol relative URLs.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-08-30T09:12:59-07:00",
          "tree_id": "0d531b6cecfdea199fa7b9fd51d490b915f11c3f",
          "url": "https://github.com/ruzell22/cactus/commit/7e7bb44c01a2d19306ecaaaa2ba2e3c574039c87"
        },
        "date": 1725254299670,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 722,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      }
    ]
  }
}