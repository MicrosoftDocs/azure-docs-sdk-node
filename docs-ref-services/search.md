---
title: Azure Search module for Node.js
description: Reference for Azure Search module for Node.js
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

# Azure Search module for Node.js

## Overview

Azure Search is a cloud search-as-a-service solution that delegates server and infrastructure management to Microsoft, leaving you with a ready-to-use service that you can populate with your data and then use to add search to your application.

Learn more about [Azure Search](https://docs.microsoft.com/en-us/azure/search/search-what-is-azure-search).

## Management Package

## Install the module with npm

Use npm to install the Azure Search module for Node.js

### Management

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
