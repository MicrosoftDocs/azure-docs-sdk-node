---
title: Azure MySQL modules for Node.js
description: Reference for Azure MySQL modules for Node.js
author: ajlam
ms.author: andrela
ms.date: 07/18/2017
ms.topic: article
ms.devlang: nodejs
ms.service: mysql
---

# Azure MySQL modules for Node.js

The recommended client library for accessing Azure Database for MySQL is the open-source [Node.js connection library for Azure Database for MySQL](https://github.com/sidorares/node-mysql2). 

Learn more about [Azure Database for MySQL](https://docs.microsoft.com/azure/MySQL/)

## Client Package

### Install the npm module

Use npm to install the MySQL client module.

```bash
npm install mysql2
```   

### Example

This example connects to a MySQL database and performs a simple query to retrieve all customers.

```javascript
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysqldemo.mysql.database.azure.com',
  user: 'myadmin@mysqldemo',
  password: 'your_password',
  database: 'my_db',
  port: 3306,
  ssl: true
});

connection.connect();
const query = 'SELECT * FROM customers';
connection.query(query, (err, res) =>
  console.log(`We have ${res.length} customers`)
);

connection.end();
```

## Samples

[!INCLUDE [node-mysql-samples](includes/mysql-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
