---
title: Azure Redis Cache modules for Node.js
description: Reference for Azure Redis Cache modules for Node.js
keywords: Azure,SDK,API,Redis Cache, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Redis Cache
---

# Azure Redis Cache modules for Node.js

## Overview

Azure Redis Cache is based on the popular open source Redis project. It gives you access to a secure, dedicated Redis instance, managed by Microsoft and accessible from your Azure apps.

Redis is an advanced key-value store, where keys can contain data structures such as strings, hashes, lists, sets, and sorted sets. Redis supports a set of atomic operations on these data types.

Learn more about [Azure Redis Cache](https://docs.microsoft.com/azure/redis-cache/).

## Client package

### Install the npm module

Use npm to install the Redis module for Node.js

```bash
npm install redis
```

### Example

This example connects to an Azure Redis Cache instance, stores a key/value pair and then reads the stored value by its key.

```javascript
const redis = require('redis');

const client = redis.createClient(6380, '<name>.redis.cache.windows.net', {
  auth_pass: '<key>',
  tls: { servername: '<name>.redis.cache.windows.net' }
});

client.set('key1', 'value', (err, reply) => {
  console.log(reply);
});

client.get('key1', (err, reply) => {
  console.log(reply);
});
```

## Management package

### Install the npm module

Use npm to install the Azure Redis Cache modules for Node.js

```bash
npm install azure-arm-rediscache
```

### Example

This example authenticates to Azure and lists all Redis Cache instances in a specified resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const AzureMgmtRedisCache = require('azure-arm-rediscache');

msRestAzure.interactiveLogin().then(credentials => {
  const client = new AzureMgmtRedisCache(credentials, 'my-subscription-id');
  client.redis.listByResourceGroup('testResourceGroup').then(result => {
    console.log(result);
  });
});
```


## Samples

* [How to use Azure Redis Cache with Node.js](https://docs.microsoft.com/azure/redis-cache/cache-nodejs-get-started)

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
