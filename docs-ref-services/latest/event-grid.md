---
title: Azure Event Grid SDK for JavaScript
description: Reference for Azure Event Grid SDK for JavaScript
ms.date: 08/01/2024
ms.topic: reference
ms.devlang: javascript
ms.service: eventgrid
---
# Azure Event Grid libraries for JavaScript

Build event-driven applications that listen and react to events from Azure services and custom sources using simple HTTP-based event handling with Azure Event Grid.

[Learn more](/azure/event-grid/overview) about Azure Event Grid and get started with the [Azure Blob storage event tutorial](/azure/storage/blobs/storage-blob-event-quickstart). 

## Libraries for resource management

To manage your Azure Event Grid resources like Event Grid instances, topics, and subscriptions via the Azure Resource Manager, you would use the below package.

| NPM Package                                                              | Reference                                                                                                  |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| [@azure/arm-eventgrid](https://npmjs.com/package/@azure/arm-eventgrid) | [API Reference for @azure/arm-eventgrid](https://docs.microsoft.com/javascript/api/@azure/arm-eventgrid) |

## Libraries for data access

Create events, authenticate, and post to topics using the below packages

### Latest Packages

To create events, authenticate, and post to topics, we recommend you use the latest version of the `@azure/eventgrid` package.

| NPM Package                                                        | Samples | Reference                                                                                            |   
| ------------------------------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------- | 
| [@azure/eventgrid](https://www.npmjs.com/package/@azure/eventgrid) | [Samples for @azure/eventgrid](https://docs.microsoft.com/samples/azure/azure-sdk-for-js/eventgrid-javascript/) | [API Reference for @azure/eventgrid](https://docs.microsoft.com/javascript/api/@azure/eventgrid/) |


### Legacy Packages

 Since these version will only receive critical bug fixes and no new features, we recommend using the latest major version of `@azure/eventgrid` instead.

| NPM Package                                                        | Reference                                                                                            |   
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | 
| [@azure/eventgrid@2.0.0](https://www.npmjs.com/package/@azure/eventgrid/v/2.0.0) | [API Reference for @azure/eventgrid@2.0.0](https://docs.microsoft.com/javascript/api/@azure/eventgrid/?view=azure-node-legacy) |
| [azure-event-grid](https://npmjs.com/package/azure-event-grid) | [API Reference for azure-event-grid](https://docs.microsoft.com/javascript/api/azure-eventgrid) | 

## Learn more

- [Receive events using the Event Grid SDK](/azure/event-grid/receive-events)