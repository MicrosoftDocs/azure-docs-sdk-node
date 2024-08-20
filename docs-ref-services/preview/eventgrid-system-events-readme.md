---
title: Azure Event Grid Namespaces client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/eventgrid-system-events, eventgrid
ms.date: 08/20/2024
ms.topic: reference
ms.devlang: javascript
ms.service: eventgrid
---
# Azure Event Grid Namespaces client library for JavaScript - version 1.0.0-beta.3 


Azure Event Grid system events are published by Azure services to system topics. The models in this package map to events sent by various Azure services.

Key links:

- [Source code](https://github.com/Azure/azure-sdk-for-js/blob/@azure/eventgrid-system-events_1.0.0-beta.3/sdk/eventgrid/eventgrid-system-events/)
- [Package (NPM)](https://www.npmjs.com/package/@azure/eventgrid-system-events)
- [API reference documentation](/javascript/api/@azure/eventgrid-namespaces/)
- [Product documentation](/azure/event-grid/)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge, and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/@azure/eventgrid-system-events_1.0.0-beta.3/SUPPORT.md) for more details.

### Prerequisites

- An [Azure subscription][azure_sub].
- An existing [Event Grid][event_grid] Topic or Domain. If you need to create the resource, you can use the [Azure Portal][azure_portal] or [Azure CLI][azure_cli].

If you use the Azure CLI, replace `<your-resource-group-name>` and `<your-resource-name>` with your own unique names:

#### Create an Event Grid Topic

```bash
az eventgrid topic create --location <location> --resource-group <your-resource-group-name> --name <your-resource-name>
```

#### Create an Event Grid Domain

```bash
az eventgrid domain create --location <location> --resource-group <your-resource-group-name> --name <your-resource-name>
```

### Install the `@azure/eventgrid-system-events` package

Install the Azure Event Grid System Events client library for JavaScript with `npm`:

```bash
npm install @azure/eventgrid-system-events
```

## Key concepts

This package provides a list of System Events that could be used to publish events to EventGrid.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
const { setLogLevel } = require("@azure/logger");

setLogLevel("info");
```

For more detailed instructions on how to enable the logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/@azure/eventgrid-system-events_1.0.0-beta.3/sdk/core/logger).

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/eventgrid-system-events_1.0.0-beta.3/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for Javascript](https://github.com/Azure/azure-sdk-for-js)

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Feventgrid%2Feventgrid%2FREADME.png)

[azure_cli]: /cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[event_grid]: /azure/event-grid
[azure_portal]: https://portal.azure.com
[azure-core-tracing-github]: https://github.com/Azure/azure-sdk-for-js/tree/@azure/eventgrid-system-events_1.0.0-beta.3/sdk/core/core-tracing
[cloud-events-distributed-tracing-spec]: https://github.com/cloudevents/spec/blob/v1.0.1/extensions/distributed-tracing.md
[eventgrid-on-kubernetes-using-azure-arc]: /azure/event-grid/kubernetes/

