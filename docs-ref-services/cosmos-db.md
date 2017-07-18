---
title: Azure Cosmos DB Modules for Node.js
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

# Azure Cosmos DB Modules for Node.js

## Overview

Azure Cosmos DB is Microsoft's globally distributed, multi-model database. Azure Cosmos DB enables you to elastically and independently scale throughput and storage across any number of Azure's geographic regions. It offers throughput, latency, availability, and consistency guarantees with comprehensive service level agreements (SLAs), something no other database service can offer.

Azure Cosmos DB contains a write optimized, resource governed, schema-agnostic database engine that natively supports multiple data models: key-value, documents, graphs, and columnar. It also supports many APIs for accessing data including MongoDB, DocumentDB SQL, Gremlin (preview), and Azure Tables (preview), in an extensible manner.

## Management Package

### Install the npm module 

Install the Azure Cosmos DB npm module

```bash
npm install azure-arm-documentdb
```

### Example

This example lists all Cosmos DB accounts.

```javascript
const msRestAzure = require('ms-rest-azure');
const documentDBManagementClient = require('azure-arm-documentdb');

const subscriptionId = 'your-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
  const documentDbClient = new documentDBManagementClient(credentials, subscriptionId);
  documentDbClient.databaseAccounts
    .list()
    .then(databaseAccounts => console.log('Retrieved database accounts: ', databaseAccounts));
});
```

## Samples

* [Developing a Node.js app using Azure Cosmos DB - DocumentDB](https://azure.microsoft.com/en-us/resources/samples/azure-cosmos-db-documentdb-nodejs-getting-started/)
* [Developing a Node.js app using Azure Cosmos DB - Gremlin](https://azure.microsoft.com/en-us/resources/samples/azure-cosmos-db-graph-nodejs-getting-started/)

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
