---
title: Azure Search modules for Node.js
description: Reference for Azure Search modules for Node.js
keywords: Azure,SDK,API,Search, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/30/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Search
---

# Azure Search modules for Node.js

## Overview

This package provides a Node.js module that makes it easy to manage Microsoft Azure Search.

## Management Package

### Install npm module

Use npm to install the Azure Search module for Node.js

```bash
npm install azure-arm-search
```

### Example

This example creates a new search service in Azure, and lists the resources in its resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const SearchManagement = require('azure-arm-search');

const subscriptionId = 'your-subscription-id';
const resourceGroup = 'yourResourceGroup';

// Interactive Login provides a url and code that needs to be copied
// and pasted in a browser and authenticated over there.If successful,
// the user will get a DeviceTokenCredentials object.
msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new SearchManagement(credentials, subscriptionId);
    return client.services.listByResourceGroup(resourceGroup);
  })
  .then(services => console.dir(services, { depth: null, colors: true }))
  .catch(err => {
    console.log('An error ocurred');
    console.dir(err, { depth: null, colors: true });
  });
```

### Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
