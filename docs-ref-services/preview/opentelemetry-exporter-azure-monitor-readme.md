---
title: Azure Monitor OpenTelemetry Exporter client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/opentelemetry-exporter-azure-monitor,
ms.date: 01/20/2021
ms.topic: reference
ms.devlang: javascript
ms.service: azure-monitor
---
# Azure Monitor OpenTelemetry Exporter client library for JavaScript - version 1.0.0-beta.2 


[![npm version](https://badge.fury.io/js/%40microsoft%2Fopentelemetry-exporter-azure-monitor.svg)](https://badge.fury.io/js/%40microsoft%2Fopentelemetry-exporter-azure-monitor)

## Getting started

This exporter package assumes your application is [already instrumented](https://github.com/open-telemetry/opentelemetry-js/blob/master/getting-started/README.md) with the OpenTelemetry SDK. Once you are ready to export OpenTelemetry data, you can add this exporter to your application.

### Install the package

`npm install @azure/opentelemetry-exporter-azure-monitor`

### Prerequisites

You must have an [Azure subscription](https://azure.microsoft.com/free/) and a
[Application Insights workspace](https://docs.microsoft.com/azure/azure-monitor/app/app-insights-overview/) to use this package.
If you are using this package in a Node.js application, then use Node.js 8.5.0 or higher.

### Distributed Tracing

Add the exporter to your existing OpenTelemetry tracer provider (`NodeTracerProvider` / `BasicTracerProvider`)

```js
const { AzureMonitorTraceExporter } = require("@azure/opentelemetry-exporter-azure-monitor");
const { NodeTracerProvider } = require("@opentelemetry/node");
const { BatchSpanProcessor } = require("@opentelemetry/tracing");

// Use your existing provider
const provider = new NodeTracerProvider({
  plugins: {
    https: {
      // Ignore Application Insights Ingestion Server
      ignoreOutgoingUrls: [new RegExp(/dc.services.visualstudio.com/i)]
    }
  }
});
provider.register();

// Create an exporter instance
const exporter = new AzureMonitorTraceExporter({
  instrumentationKey: "ikey"
});

// Add the exporter to the provider
provider.addSpanProcessor(
  new BatchSpanProcessor(exporter, {
    bufferTimeout: 15000,
    bufferSize: 1000
  })
);
```

### Metrics

Coming Soon

### Logs

Coming Soon

## Examples

For complete samples of a few champion scenarios, see the [`samples/`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/opentelemetry-exporter-azure-monitor_1.0.0-beta.2/sdk/monitor/opentelemetry-exporter-azure-monitor/samples/) folder.

## Key concepts

For more information on the OpenTelemetry project, please review the [**OpenTelemetry Specifications**](https://github.com/open-telemetry/opentelemetry-specification#opentelemetry-specification).

## Troubleshooting

### Enable debug logging

You can enable debug logging by changing the logging level of your provider.

```js
const provider = new NodeTracerProvider({
  logLevel: LogLevel.DEBUG,
  plugins: {
    https: {
      // Ignore Application Insights Ingestion Server
      ignoreOutgoingUrls: [new RegExp(/dc.services.visualstudio.com/i)]
    }
  }
});
```

## Next steps

This exporter is made to be used with the [OpenTelemetry JS](https://github.com/open-telemetry/opentelemetry-js).

### Plugin Registry

To see if a plugin has already been made for a library you are using, please check out the [OpenTelemetry Registry](https://opentelemetry.io/registry/).

If you cannot your library in the registry, feel free to suggest a new plugin request at [`opentelemetry-js-contrib`](https://github.com/open-telemetry/opentelemetry-js-contrib).

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/opentelemetry-exporter-azure-monitor_1.0.0-beta.2/CONTRIBUTING.md) to learn more about how to build and test the code.



