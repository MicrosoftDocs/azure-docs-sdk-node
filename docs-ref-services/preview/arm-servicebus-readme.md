---
title: Azure ServiceBusManagement client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/arm-servicebus, servicebus
author: ramya-rao-a
ms.author: ramyar
ms.date: 10/15/2021
ms.topic: reference
ms.prod: azure
ms.technology: azure
ms.devlang: javascript
ms.service: servicebus
---

# Azure ServiceBusManagement client library for JavaScript - Version 5.0.0-beta.1 


This package contains an isomorphic SDK (runs both in Node.js and in browsers) for Azure ServiceBusManagement client.

Azure Service Bus client for managing Namespace, IPFilter Rules, VirtualNetworkRules and Zone Redundant

[Source code](https://github.com/Azure/azure-sdk-for-js/tree/@azure/arm-servicebus_5.0.0-beta.1/sdk/servicebus/arm-servicebus) |
[Package (NPM)](https://www.npmjs.com/package/@azure/arm-servicebus) |
[API reference documentation](https://docs.microsoft.com/javascript/api/@azure/arm-servicebus) |
[Samples](https://github.com/Azure-Samples/azure-samples-js-management)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://nodejs.org/about/releases/)
- Latest versions of Safari, Chrome, Edge and Firefox.

### Prerequisites

- An [Azure subscription][azure_sub].

### Install the `@azure/arm-servicebus` package

Install the Azure ServiceBusManagement client library for JavaScript with `npm`:

```bash
npm install @azure/arm-servicebus
```

### Create and authenticate a `ServiceBusManagementClient`

To create a client object to access the Azure ServiceBusManagement API, you will need the `endpoint` of your Azure ServiceBusManagement resource and a `credential`. The Azure ServiceBusManagement client can use Azure Active Directory credentials to authenticate.
You can find the endpoint for your Azure ServiceBusManagement resource in the [Azure Portal][azure_portal].

#### Using an Azure Active Directory Credential

You can authenticate with Azure Active Directory using the [Azure Identity library][azure_identity]. To use the [DefaultAzureCredential][defaultazurecredential] provider shown below, or other credential providers provided with the Azure SDK, please install the `@azure/identity` package:

```bash
npm install @azure/identity
```

You will also need to **register a new AAD application and grant access to Azure ServiceBusManagement** by assigning the suitable role to your service principal (note: roles such as `"Owner"` will not grant the necessary permissions).
Set the values of the client ID, tenant ID, and client secret of the AAD application as environment variables: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`.

For more information about how to create an Azure AD Application check out [this guide](https://docs.microsoft.com/azure/active-directory/develop/howto-create-service-principal-portal).
```javascript
const { ServiceBusManagementClient } = require("@azure/arm-servicebus");
const { DefaultAzureCredential } = require("@azure/identity");
const subscriptionId = "00000000-0000-0000-0000-000000000000";
const client = new ServiceBusManagementClient(new DefaultAzureCredential(), subscriptionId);
```

## Key concepts

### ServiceBusManagementClient

`ServiceBusManagementClient` is the primary interface for developers using the Azure ServiceBusManagement client library. Explore the methods on this client object to understand the different features of the Azure ServiceBusManagement service that you can access.

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
const { setLogLevel } = require("@azure/logger");
setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/@azure/arm-servicebus_5.0.0-beta.1/sdk/core/logger).

## Next steps

Please take a look at the [samples](https://github.com/Azure-Samples/azure-samples-js-management) directory for detailed examples on how to use this library.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/arm-servicebus_5.0.0-beta.1/CONTRIBUTING.md) to learn more about how to build and test the code.

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)

![Impressions](https://azure-sdk-impressions.azurewebsites.net/api/impressions/azure-sdk-for-js%2Fsdk%2Fservicebus%2Farm-servicebus%2FREADME.png)

[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[azure_sub]: https://azure.microsoft.com/free/
[azure_portal]: https://portal.azure.com
[azure_identity]: https://github.com/Azure/azure-sdk-for-js/tree/@azure/arm-servicebus_5.0.0-beta.1/sdk/identity/identity
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/@azure/arm-servicebus_5.0.0-beta.1/sdk/identity/identity#defaultazurecredential

