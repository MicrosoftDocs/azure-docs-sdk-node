---
title: Azure Service Bus Modules for JavaScript
description: Reference for Azure Service Bus Modules for JavaScript
author: spelluru
ms.author: spelluru
manager: timlt
ms.date: 03/04/2020
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Service Bus
---

# Azure Service Bus Modules for JavaScript

[Azure Service Bus](https://azure.microsoft.com/services/service-bus/) is a highly-reliable cloud messaging service from Microsoft and a fully managed enterprise integration message broker.

## Libraries for resource management

To manage your Azure Service Bus resources like namespaces, queues, topics, subscriptions and rules via the Azure Resource Manager, you would use the below package.

| NPM Package                                                              | Reference                                                                                                  |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [@azure/arm-servicebus](https://npmjs.com/package/@azure/arm-servicebus) | [API Reference for @azure/arm-servicebus](https://docs.microsoft.com/javascript/api/@azure/arm-servicebus) |

## Libraries for data access

To send and receive messages from an Azure Service Bus queue, topic or subscription, you would use the below package.
This also allows to manage your Azure Service Bus resources like queues, topics, subscriptions and rules, but not the namespace itself.

| NPM Package                                                        | Reference                                                                                            | Samples                                                                                                                              |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [@azure/service-bus](https://npmjs.com/package/@azure/service-bus) | [API Reference for @azure/service-bus](https://docs.microsoft.com/javascript/api/@azure/service-bus) | [Samples for sending & receiving messages](https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/servicebus/service-bus/samples) |


Examples for using this module in Node.js as well as browser applications can be found in the [README for the module](https://www.npmjs.com/package/@azure/arm-servicebus)
