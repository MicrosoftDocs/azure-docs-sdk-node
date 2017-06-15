---
title: Azure management libraries for Node.js release notes
description: See what's new and watch for breaking changes in the Azure management libraries for Node.js
keywords: Azure, Node, API, reference,  notes,  updates, deprecate
author: tomarcher
manager: douge
ms.author: tarcher
ms.date: 06/15/2017
ms.assetid: 
ms.service: Azure
ms.devlang: node
ms.topic: reference
ms.technology: Azure
---

# Release Notes 

## 2.0.0-preview

* Updated type definition (.d.ts) files for all the packages and improved typescript support.
* Added Promise support for all the APIs. For each callback based API, we now have an overloaded method that returns a Promise.
* Moved Javascript code to ES6 syntax.
* **Minimum required node.js version is 6.x.x**
* Added a new vscode extension named [Azure Node Essentials](https://marketplace.visualstudio.com/items?itemName=azuresdkteam.azurenodeessentials) to help you easily interact with Azure.
* Improved the loading time of rollup azure package
* Added **new** client libraries for following ARM services
  * Advisor Management ([azure-arm-advisor](https://www.npmjs.com/search?q=azure-arm-advisor))
  * Automation Management ([azure-arm-automation](https://www.npmjs.com/search?q=azure-arm-automation))
  * Billing Management ([azure-arm-billing](https://www.npmjs.com/search?q=azure-arm-billing))
  * Cognitive Services Management ([azure-arm-cognitiveservices](https://www.npmjs.com/search?q=azure-arm-cognitiveservices))
  * Container Registry Management ([azure-arm-containerregistry](https://www.npmjs.com/search?q=azure-arm-containerregistry))
  * Customer Insights Management ([azure-arm-customerinsights](https://www.npmjs.com/search?q=azure-arm-customerinsights))
  * DocumentDB Management ([azure-arm-documentdb](https://www.npmjs.com/search?q=azure-arm-documentdb))
  * Logic Management ([azure-arm-logic](https://www.npmjs.com/search?q=azure-arm-logic))
  * Machine Learning Management ([azure-arm-machinelearning](https://www.npmjs.com/search?q=azure-arm-machinelearning))
  * Media Services Management ([azure-arm-mediaservices](https://www.npmjs.com/search?q=azure-arm-mediaservices))
  * Operational Insights Management ([azure-arm-operationalinsights](https://www.npmjs.com/search?q=azure-arm-operationalinsights))
  * Recovery Services Backup Management ([azure-arm-recoveryservicesbackup](https://www.npmjs.com/search?q=azure-arm-recoveryservicesbackup))
  * Recovery Services Management ([azure-arm-recoveryservices](https://www.npmjs.com/search?q=azure-arm-recoveryservices))
  * Relay Management ([azure-arm-relay](https://www.npmjs.com/search?q=azure-arm-relay))
  * Scheduler Management ([azure-arm-scheduler](https://www.npmjs.com/search?q=azure-arm-scheduler))
  * Search Management ([azure-arm-search](https://www.npmjs.com/search?q=azure-arm-search))
  * ServiceFabric Management ([azure-arm-servicefabric](https://www.npmjs.com/search?q=azure-arm-servicefabric))
  * ServiceMap Management ([azure-arm-servicemap](https://www.npmjs.com/search?q=azure-arm-servicemap))
  * SQL Management ([azure-arm-sql](https://www.npmjs.com/search?q=azure-arm-sql))
  * Storage Import Export Management ([azure-arm-storageimportexport](https://www.npmjs.com/search?q=azure-arm-storageimportexport))

### Runtime (ms-rest and ms-rest-azure) updates
  * Updated d.ts files for ms-rest and ms-rest-azure
  * All the login methods (interactiveLogin, loginWithServicePrincipalSecret, loginWithUsernamePassword) now support callback as well as a Promise.
  * Added support to *send* (a **generic request, or a generic long running request (that polls)**) using the authenticated base client [AzureServiceClient](https://github.com/Azure/azure-sdk-for-node/blob/master/runtime/ms-rest-azure/lib/azureServiceClient.js) in the runtime.