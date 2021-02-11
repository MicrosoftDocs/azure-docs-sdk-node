---
title: Azure Event Grid libraries for JavaScript
description: Reference for Azure Event Grid libraries for JavaScript
author: rloutlaw 
ms.author: routlaw    
manager: angerobe
ms.date: 05/03/2018
ms.topic: reference
ms.prod:
ms.technology:
ms.devlang: nodejs
ms.service: event-grid
ms.custom: devcenter
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

### v2 of @azure/eventgrid

To create events, authenticate, and post to topics, you would use the `@azure/eventgrid` package.

| NPM Package                                                        | Reference                                                                                            |   
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | 
| [@azure/eventgrid v2](https://npmjs.com/package/@azure/eventgrid) | [API Reference for @azure/eventgrid v2](https://docs.microsoft.com/javascript/api/@azure/eventgrid) | 

### v3 of @azure/eventgrid (in preview)

To create events, authenticate, and post to topics, you can also try latest version of the `@azure/eventgrid` i.e. v3. Since this version is still in preview, we do not recommend using this in your production environment until we release a stable version.

| NPM Package                                                        | Reference                                                                                            |   
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | 
| [@azure/eventgrid v3](https://www.npmjs.com/package/@azure/eventgrid/v/next) | [API Reference for @azure/eventgrid v3](https://docs.microsoft.com/en-us/javascript/api/@azure/eventgrid/?view=azure-node-preview) | 


### v1 of azure-eventgrid

To create events, authenticate, and post to topics, you can use the older `azure-event-grid` package as well. Since this package will only receive critical bug fixes and no new features, we recommend using the latest `@azure/eventgrid` instead

| NPM Package                                                        | Reference                                                                                            | 
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | 
| [azure-event-grid](https://npmjs.com/package/azure-event-grid) | [API Reference for azure-event-grid](https://docs.microsoft.com/javascript/api/azure-event-grid) | 


## Learn more

- [Receive events using the Event Grid SDK](/azure/event-grid/receive-events)
