---
title: Azure Redis Cache SDK for JavaScript
description: Reference for Azure Redis Cache SDK for JavaScript
author: xirzec
ms.author: jeffish
ms.data: 12/26/2022
ms.topic: reference
ms.devlang: javascript
ms.service: cache
ms.date: 06/15/2022
---
# Azure Redis Cache modules for JavaScript

Azure Redis Cache is based on the popular open source Redis project. It gives you access to a secure, dedicated Redis instance, managed by Microsoft and accessible from your Azure apps.

Redis is an advanced key-value store, where keys can contain data structures such as strings, hashes, lists, sets, and sorted sets. Redis supports a set of atomic operations on these data types.

Learn more about [Azure Redis Cache](https://docs.microsoft.com/azure/redis-cache/).

## Client package

### Install the npm module

Use npm to install the Redis module for JavaScript

```bash
npm install redis
```

### Example

This example connects to an Azure Redis Cache instance, stores a key/value pair and then reads the stored value by its key.

```JavaScript
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

Use npm to install the Azure Redis Cache modules for JavaScript

```bash
npm install @azure/arm-rediscache
```

## Samples

* Examples for using this module in Node.js as well as browser applications can be found in the [README for the module](https://www.npmjs.com/package/@azure/arm-rediscache)

* [How to use Azure Redis Cache with JavaScript](https://docs.microsoft.com/azure/redis-cache/cache-nodejs-get-started)

For more code samples that use various Azure packages, explore the [JavaScript samples](https://docs.microsoft.com/samples/browse/?languages=javascript).