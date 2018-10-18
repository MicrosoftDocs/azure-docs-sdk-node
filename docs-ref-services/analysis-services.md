---
title: Azure Analysis Services modules for Node.js
description: Reference for Azure Analysis Services modules for Node.js
author: Minewiskan
ms.author: owend
manager: kfile
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Analysis Services
---

# Azure Analysis Services modules for Node.js

## Overview
This package provides a Node.js module that makes it easy to manage Microsoft Azure Analysis Services.

## Management package

### Install the npm module

Install the Azure Analysis Services npm module

```bash
npm install azure-arm-analysisservices
```

### Example

This example lists all available Analysis Service servers.

```javascript
const msRestAzure = require('ms-rest-azure');
const analysisServicesManagement = require('azure-arm-analysisservices');

const subscriptionId = 'your-subscription-id';
let analysisServicesClient;

msRestAzure.interactiveLogin().then(credentials => {
  analysisServicesClient = new analysisServicesManagement(credentials, subscriptionId);

  analysisServicesClient.servers
    .list()
    .then(servers => console.log('Retrieved analysis services servers: ', servers));
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
