---
title: Azure SQL modules for JavaScript
description: Reference for Azure SQL modules for JavaScript
author: CarlRabeler
ms.author: carlrab
manager: craigg
ms.date: 07/18/2017
ms.topic: article
ms.devlang: nodejs
ms.service: sql-database
ms.subservice: development
---

# Azure SQL modules for JavaScript

Work with data stored in [Azure SQL Database](https://docs.microsoft.com/azure/sql-database/sql-database-technical-overview) from JavaScript.
The management library provides an interface to make it easy to manage Microsoft Azure SQL databases.

## Client package

### Install the npm module

Install the SQL Server client npm module

```bash
npm install tedious
```

### Example

This example connects to a SQL Server database and perform a simple query.

```JavaScript
const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
  userName: 'your-username',
  password: 'your-password',
  server: 'path-to-server',
  options: {
    database: 'database-name',
    encrypt: true
  }
};

const connection = new Connection(config);
connection.on('connect', err => {
  err ? console.log(err) : executeStatement();
});

const query = 'SELECT * from TableName';
const executeStatement = () => {
  const request = new Request(query, (err, rowCount) => {
    err ? console.log(err) : console.log(rowCount);
  });

  request.on('row', columns => {
    columns.forEach(column => console.log(column.value));
  });

  connection.execSql(request);
};
```

## Management package

### Install npm modules

Install the Azure SQL Server management npm module

```
npm install @azure/arm-sql
```   

### Example

Example can be found here: [Example](https://www.npmjs.com/package/@azure/arm-sql)

## Samples

- [Azure SQL Database: Use JavaScript to connect and query data](https://docs.microsoft.com/azure/sql-database/sql-database-connect-query-nodejs)

Explore more [sample JavaScript code](https://docs.microsoft.com/en-us/samples/browse/?languages=javascript) you can use in your apps.
