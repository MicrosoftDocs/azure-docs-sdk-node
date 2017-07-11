---
title: Azure Redis Cache modules for Node.js
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

# Azure Redis Cache packages for Node.js

## Overview

## Management Package

#### Install the packages with npm

Use npm to install the Azure Redis Cache modules for Node.js

```bash
npm install azure-arm-rediscache
```

## Example
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

* [How to use Azure Redis Cache with Node.js](https://docs.microsoft.com/en-us/azure/redis-cache/cache-nodejs-get-started)
