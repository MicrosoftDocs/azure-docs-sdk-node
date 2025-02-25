---
title: Azure Synapse Spark client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/synapse-spark, synapseanalytics
ms.date: 10/05/2021
ms.topic: reference
ms.devlang: javascript
ms.service: synapse-analytics
---
## Azure Synapse Spark client library for JavaScript - version 1.0.0-beta.4 


This package contains an isomorphic SDK for Spark.

## Getting started

### Install the package

```bash
npm install @azure/synapse-spark
```

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge, and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/@azure/synapse-spark_1.0.0-beta.4/SUPPORT.md) for more details.

## Key concepts

### How to use

## Examples

```ts
import { SparkClient } from "@azure/synapse-spark";
import { DefaultAzureCredential } from "@azure/identity";

export async function main(): Promise<void> {
  const credential = new DefaultAzureCredential();

  let client = new SparkClient(credential, "https://mysynapse.dev.azuresynapse.net", "mysparkpool");
  let output = await client.sparkBatch.getSparkBatchJobs();
  console.log("output:", output);
}
```

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)



## Troubleshooting

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

## Next steps

In the future, you'll find additional code samples here.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/synapse-spark_1.0.0-beta.4/CONTRIBUTING.md) to learn more about how to build and test the code.



