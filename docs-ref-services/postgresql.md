---
title: Azure PostgreSQL modules for Node.js
description: Create and manage PostgreSQL resources from your Node.js apps.
keywords: Azure, Node, SDK, API, nodejs, javascript, database, PostgreSQL
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/19/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: postgresql
---

# Azure PostgreSQL modules for Node.js

## Overview

The recommended client library for accessing Azure Database for PostgreSQL is the open-source [Node.js connection library for Azure Database for PostgreSQL](https://www.npmjs.com/package/pg). 
This library is a non-blocking PostgreSQL client for Node.js, supporting pure JavaScript and optional native libpq bindings.

Learn more about [Azure Database for PostgreSQL](https://docs.microsoft.com/azure/postgresql/)

## Client Module

#### Install modules with npm

Use npm to install the PostgreSQL client module.

```
npm install pg
```   

### Example

Opening a client connection and running a simple query.

```javascript
const pg = require('pg');
const connectionString =
  'postgres://{username}@{database-name}:{password}@{database-name}.postgres.database.azure.com:5432/Items?ssl=true';

const client = new pg.Client(connectionString);
client.connect();

client.query('SELECT * FROM {table-name}', (err, res) => {
  console.log(res);
});
```

### Samples

[!INCLUDE [node-postgresql-samples](../docs-ref-conceptual/includes/postgresql-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
