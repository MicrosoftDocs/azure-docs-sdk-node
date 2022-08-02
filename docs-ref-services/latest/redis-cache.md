---
author: xirzec
title: Azure Redis Cache SDK for JavaScript
description: Reference for Azure Redis Cache SDK for JavaScript
ms.data: 08/02/2022
ms.author: jeffish
ms.devlang: javascript
ms.service: cache
ms.topic: reference
ms.date: 06/15/2022
---
# Azure Redis Cache modules for JavaScript

Azure Redis Cache is based on the popular open-source Redis project. It gives you access to a secure, dedicated Redis instance, managed by Microsoft and accessible from your Azure apps.

Redis is an advanced key-value store, where keys can contain data structures such as strings, hashes, lists, sets, and sorted sets. Redis supports a set of atomic operations on these data types.

Learn more about [Azure Redis Cache](/azure/redis-cache/).

## Client package

### Install the npm module

Use npm to install the Redis module for JavaScript

```bash
npm install redis
```

### Example

This example connects to an Azure Redis Cache instance, stores a key/value pair and then reads the stored value by its key.

```javascript
const redis = require('redis');

async function sample() 
{
    var client = redis.createClient(
    {
        // rediss for TLS
        url: "rediss://<name>.redis.cache.windows.net:6380",
        password: "<key>",
    });
    await client.connect();

    console.log(await client.set('key1', 'value'));
    console.log(await client.get('key1'));
    console.log("\nDone");
    process.exit();
}
sample();
```

## Management package

### Install the npm module for Azure Cache for Redis

Use npm to install the Azure Cache for Redis modules for JavaScript

```bash
npm install @azure/arm-rediscache
```

## Samples

* Examples for using this module in Node.js and browser applications can be found in the [README for the module](https://www.npmjs.com/package/@azure/arm-rediscache)

* [How to use Azure Redis Cache with JavaScript](/azure/redis-cache/cache-nodejs-get-started)

For more code samples that use various Azure packages, explore the [JavaScript samples](/samples/browse/?languages=javascript)