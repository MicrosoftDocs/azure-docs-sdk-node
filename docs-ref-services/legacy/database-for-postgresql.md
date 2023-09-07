---
title: Azure PostgreSQL modules for JavaScript
description: Reference for Azure PostgreSQL modules for JavaScript
author: rachel-msft
ms.author: raagyema
manager: sukamat
ms.date: 07/18/2017
ms.topic: reference
ms.devlang: nodejs
ms.service: postgresql
---

# Azure PostgreSQL modules for JavaScript

The recommended client library for accessing Azure Database for PostgreSQL is the open-source [JavaScript connection library for Azure Database for PostgreSQL](https://www.npmjs.com/package/pg). 
This library is a non-blocking PostgreSQL client for JavaScript, supporting pure JavaScript and optional native libpq bindings.

Learn more about [Azure Database for PostgreSQL](https://docs.microsoft.com/azure/postgresql/)

## Client package

### Install the npm module

Use npm to install the PostgreSQL client module.

```bash
npm install pg
```   

### Example

This example opens a client connection and executes a simple query.

```JavaScript
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

| **PostgreSQL** | **Description** |
|--|--|
| [JavaScript code snippets using PostgreSQL](https://www.npmjs.com/package/pg) | Learn how to create a pool, execute a query, obtain an exclusive client, and more.

For more code samples that use various Azure packages, explore the [JavaScript samples](https://docs.microsoft.com/samples/browse/?languages=javascript).
