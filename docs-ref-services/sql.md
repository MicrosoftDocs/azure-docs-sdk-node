---
title: Azure SQL Database modules for Node.js
description: Connect and manage Azure SQL from your Node.js apps.
keywords: Azure, Node, SDK, API, nodejs, javascript, sql
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/19/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: sql-database
---

# Azure SQL Database modules for Node.js

## Overview

Work with data stored in [Azure SQL Database](https://docs.microsoft.com/azure/sql-database/sql-database-technical-overview) from Node.js.
The management library provides an interface to make it easy to manage Microsoft Azure SQL databases.

## Install modules with npm

Use npm to install the Azure storage client module.

```
npm install azure-arm-storage
```   

## Example

Authenticate, create a client, and list all servers.

```javascript
const msRestAzure = require('ms-rest-azure');
const SQLManagement = require("azure-arm-sql");
 
msRestAzure.interactiveLogin().then((credentials) => {
  let client = new SQLManagement(credentials, 'your-subscription-id');
  return client.servers.list();
}).then((servers) => {
 console.log('List of servers:');
 console.dir(servers, {depth: null, colors: true});
}).catch((err) => {
  console.log('An error ocurred');
  console.dir(err, {depth: null, colors: true});
});
```

## Samples

[!INCLUDE [node-sql-samples](../docs-ref-conceptual/includes/sql-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.