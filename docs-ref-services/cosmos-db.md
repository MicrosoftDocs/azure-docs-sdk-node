---
title: Azure Cosmos DB modules for Node.js
description: Reference for Azure Cosmos DB modules for Node.js
keywords: Azure,SDK,API,Cosmos DB, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/06/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Cosmos DB
---

# Azure Cosmos DB modules for Node.js

## Overview
Azure Cosmos DB is Microsoft's globally distributed, multi-model database. Azure Cosmos DB enables you to elastically and independently scale throughput and storage across any number of Azure's geographic regions. It offers throughput, latency, availability, and consistency guarantees with comprehensive service level agreements (SLAs), something no other database service can offer.

Azure Cosmos DB contains a write optimized, resource governed, schema-agnostic database engine that natively supports multiple data models: key-value, documents, graphs, and columnar. It also supports many APIs for accessing data including MongoDB, DocumentDB SQL, Gremlin (preview), and Azure Tables (preview), in an extensible manner.

## Install the modules with npm

Use npm to install the Azure Cosmos DB modules for Node.js

### Management
```bash
npm install azure-arm-documentdb
```

### Example
```javascript
const msRestAzure = require('ms-rest-azure');
const documentDBManagementClient = require('azure-arm-documentdb');
let documentDbClient;

msRestAzure.interactiveLogin().then(credentials => {
  documentDbClient = new documentDBManagementClient(credentials, 'your-subscription-id');
  documentDbClient.databaseAccounts.list()
    .then(databaseAccounts => console.log('Retrieved database accounts: ', databaseAccounts));
});
```

### Samples
| | |
 |---|---|
  | **Web Apps** ||
  | [Developing a Node.js app using Azure Cosmos DB - DocumentDB](https://azure.microsoft.com/en-us/resources/samples/azure-cosmos-db-documentdb-nodejs-getting-started/) | This sample demonstrates how to use the Azure Cosmos DB with the DocumentDB API to store and access data from a Node.js application. |
 | [Developing a Node.js app using Azure Cosmos DB - Gremlin](https://azure.microsoft.com/en-us/resources/samples/azure-cosmos-db-graph-nodejs-getting-started/) | This sample demonstrates how to use the Azure Cosmos DB with the Graph API to store and access data from a Node.js application. |

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
