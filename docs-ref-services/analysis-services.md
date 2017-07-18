---
title: Azure Analysis Services modules for Node.js
description: Reference for Azure Analysis Services modules for Node.js
keywords: Azure,SDK,API,Analysis Services, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/06/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Analysis Services
---

# Azure Analysis Services packages for Node.js

## Overview
This package provides a Node.js module that makes it easy to manage Microsoft Azure Analysis Services.

## Management package

### Install npm module

Install the Azure analysis services npm module

```bash
npm install azure-arm-analysisservices
```

### Example

This example lists all available analysis servers.

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
