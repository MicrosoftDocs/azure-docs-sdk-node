---
title: Azure MySQL modules for Node.js
description: Create and manage MySQL resources from your Node.js apps.
keywords: Azure, Node, SDK, API, nodejs, javascript, database, MySQL
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/19/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: mysql
---

# Azure MySQL modules for Node.js

## Overview

The recommended client library for accessing Azure Database for MySQL is the open-source [Node.js connection library for Azure Database for MySQL](https://github.com/sidorares/node-mysql2/tree/master/documentation). 

Learn more about [Azure Database for MySQL](https://docs.microsoft.com/azure/MySQL/)

## Install modules with npm

Use npm to install the MySQL client module.

```
npm install mysql
```   

## Example

Connect to, and query, a MySQL database.

```javascript
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
```

## Samples

[!INCLUDE [node-storage-samples](../docs-ref-conceptual/includes/mysql-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
