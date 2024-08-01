---
title: Azure SQL SDK for JavaScript
description: Reference for Azure SQL SDK for JavaScript
ms.date: 08/01/2024
ms.topic: reference
ms.devlang: javascript
ms.service: sql
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

## Samples

- Examples for using this module in Node.js as well as browser applications can be found in the [README for the module](https://www.npmjs.com/package/@azure/arm-sql)

- [Azure SQL Database: Use JavaScript to connect and query data](https://docs.microsoft.com/azure/sql-database/sql-database-connect-query-nodejs)

For more code samples that use various Azure packages, explore the [JavaScript samples](https://docs.microsoft.com/samples/browse/?languages=javascript).