---
title: Azure MySQL modules for JavaScript
description: Reference for Azure MySQL modules for JavaScript
ms.date: 07/18/2017
ms.topic: reference
ms.devlang: nodejs
ms.service: mysql
---
# Azure MySQL modules for JavaScript

The recommended client library for accessing Azure Database for MySQL is the open-source [JavaScript connection library for Azure Database for MySQL](https://github.com/sidorares/node-mysql2). 

Learn more about [Azure Database for MySQL](https://docs.microsoft.com/azure/MySQL/)

## Client Package

### Install the npm module

Use npm to install the MySQL client module.

```bash
npm install mysql2
```   

### Example

This example connects to a MySQL database and performs a simple query to retrieve all customers.

```JavaScript
const mysql = require('mysql2');
const fs = require('fs');

const connection = mysql.createConnection({
  host: 'mysqldemo.mysql.database.azure.com',
  user: 'myadmin@mysqldemo',
  password: 'your_password',
  database: 'my_db',
  port: 3306,
  ssl: {ca: fs.readFileSync("your_path_to_ca_cert_file_BaltimoreCyberTrustRoot.crt.pem")}
});

connection.connect();
const query = 'SELECT * FROM customers';
connection.query(query, (err, res) =>
  console.log(`We have ${res.length} customers`)
);

connection.end();
```

## Samples

* [Create a connection to MySQL using JavaScript](https://github.com/mysqljs/mysql/blob/master/Readme.md#establishing-connections)
* [Perform queries using JavaScript and MySQL](https://github.com/mysqljs/mysql/blob/master/Readme.md#performing-queries)
* [MySQL transactions in JavaScript](https://github.com/mysqljs/mysql/blob/master/Readme.md#transactions)

For more code samples that use various Azure packages, explore the [JavaScript samples](https://docs.microsoft.com/samples/browse/?languages=javascript).

## Management SDK

Create, update, or delete MySQL instances using Management SDK

### Installation

```
npm install @azure/arm-mysql
```

### Example code

Examples for using this module in Node.js as well as browser applications can be found in the [README for the module](https://www.npmjs.com/package/@azure/arm-mysql)

