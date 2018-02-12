---
title: Azure PostgreSQL modules for Node.js
description: Reference for Azure PostgreSQL modules for Node.js
author: craigshoemaker
ms.author: cshoe
manager: routlaw
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: postgresql
---

# Azure PostgreSQL modules for Node.js

The recommended client library for accessing Azure Database for PostgreSQL is the open-source [Node.js connection library for Azure Database for PostgreSQL](https://www.npmjs.com/package/pg). 
This library is a non-blocking PostgreSQL client for Node.js, supporting pure JavaScript and optional native libpq bindings.

Learn more about [Azure Database for PostgreSQL](https://docs.microsoft.com/azure/postgresql/)

## Client package

### Install the npm module

Use npm to install the PostgreSQL client module.

```bash
npm install pg
```   

### Example

This example opens a client connection and executes a simple query.

```javascript
const pg = require('pg');

const connectionString =
  'postgres://{username}@{server-name}:{password}@{server-name}.postgres.database.azure.com:5432/{database-name}?ssl=true';

const client = new pg.Client(connectionString);
client.connect();

const query = 'SELECT * FROM {table-name}';
client.query(query, (err, res) => {
  console.log(res);
});
```

## Samples

[!INCLUDE [node-postgresql-samples](../docs-ref-conceptual/includes/postgresql-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
