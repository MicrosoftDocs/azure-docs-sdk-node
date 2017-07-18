---
title: Azure Redis Cache Modules for Node.js
description: Reference for Azure Redis Cache modules for Node.js
keywords: Azure,SDK,API,Redis Cache, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/30/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Redis Cache
---

# Azure Redis Cache Modules for Node.js

## Overview

Azure Redis Cache is based on the popular open source Redis project. It gives you access to a secure, dedicated Redis instance, managed by Microsoft and accessible from your Azure apps.

Redis is an advanced key-value store, where keys can contain data structures such as strings, hashes, lists, sets, and sorted sets. Redis supports a set of atomic operations on these data types.

Learn more about [Azure Redis Cache](https://docs.microsoft.com/azure/redis-cache/).

## Management package

### Install the npm module

Install the Azure Redis Cache npm module

```bash
npm install azure-arm-rediscache
```

### Example

This example lists all Redis Cache instances for a given resource group

```javascript
const msRestAzure = require('ms-rest-azure');
const AzureMgmtRedisCache = require('azure-arm-rediscache');

const subscriptionId = 'your-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
  const client = new AzureMgmtRedisCache(credentials, subscriptionId);
  client.redis.listByResourceGroup('testResourceGroup').then(result => {
    console.log(result);
  });
});
```


## Samples

* [How to use Azure Redis Cache with Node.js](https://docs.microsoft.com/en-us/azure/redis-cache/cache-nodejs-get-started)

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
