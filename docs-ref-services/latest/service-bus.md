---
title: Azure Service Bus SDK for JavaScript
description: Reference for Azure Service Bus SDK for JavaScript
ms.date: 08/01/2024
ms.topic: reference
ms.devlang: javascript
ms.service: service-bus-messaging
---
# Azure Service Bus Modules for JavaScript

[Azure Service Bus](https://azure.microsoft.com/services/service-bus/) is a highly-reliable cloud messaging service from Microsoft and a fully managed enterprise integration message broker.

## Libraries for resource management

To manage your Azure Service Bus resources like namespaces, queues, topics, subscriptions and rules via the Azure Resource Manager, you would use the below package.

| NPM Package                                                              | Reference                                                                                                  |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [@azure/arm-servicebus](https://npmjs.com/package/@azure/arm-servicebus) | [API Reference for @azure/arm-servicebus](https://docs.microsoft.com/javascript/api/@azure/arm-servicebus) |

## Libraries for data access

### v7 of @azure/service-bus

To send and receive messages from an Azure Service Bus queue, topic or subscription, you would use the latest version of the `@azure/service-bus` package.
This also allows to manage your Azure Service Bus resources like queues, topics, subscriptions and rules, but not the namespace itself.

| NPM Package                                                        | Reference                                                                                            | Samples                                                                                                                              |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [@azure/service-bus v7](https://npmjs.com/package/@azure/service-bus) | [API Reference for @azure/service-bus v7](https://docs.microsoft.com/javascript/api/@azure/service-bus) | [Samples for sending & receiving messages v7](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/servicebus/service-bus/samples) |

### v1 of @azure/service-bus

The older version of the `@azure/service-bus` package also allows you to send and receive messages from an Azure Service Bus queue, topic or subscription, but it lacks
a lot of the new features and performance improvements available in the latest version of the same package.

| NPM Package                                                        | Reference                                                                                            | Samples                                                                                                                              |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [@azure/service-bus v1](https://www.npmjs.com/package/@azure/service-bus/v/1.1.10) | [API Reference for @azure/service-bus v1](https://docs.microsoft.com/javascript/api/@azure/service-bus/?view=azure-node-legacy) | [Samples for sending & receiving messages v1](https://github.com/Azure/azure-sdk-for-js/tree/%40azure/service-bus_1.1.10/sdk/servicebus/service-bus/samples) |

### v1 of azure-sb

There is a much older package `azure-sb` that allows you to send and receive messages from an Azure Service Bus queue, topic or subscription. Unlike the newer `@azure/service-bus` package that uses the faster AMQP proptocol, this package uses the slower HTTP protocol. Though it also allows you to manage the Azure Service Bus resources like queues, topics, subscriptions and rules, this package is not in active development

| NPM Package                                                        | Reference                                                                                            | Samples                                                                                                                              |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [azure-sb](https://npmjs.com/package/azure-sb) | [API Reference for azure-sb](https://docs.microsoft.com/javascript/api/azure-sb/?view=azure-node-legacy) | [Samples for sending & receiving messages](https://www.npmjs.com/package/azure-sb#how-to-use) |