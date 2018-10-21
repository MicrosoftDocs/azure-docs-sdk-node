---
title: Azure Search modules for Node.js
description: Reference for Azure Search modules for Node.js
author: HeidiSteen
ms.author: heidist
manager: cgronlun
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Search
---

# Azure Search modules for Node.js

Azure Search is a cloud search-as-a-service solution that delegates server and infrastructure management to Microsoft, leaving you with a ready-to-use service that you can populate with your data and then use to add search to your application.

Learn more about [Azure Search](https://docs.microsoft.com/azure/search/search-what-is-azure-search).

## Management package

### Install the npm module

Install the Azure Search npm module

```bash
npm install azure-arm-search
```

### Example

This example creates a new Search service in Azure, and lists the resources in its resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const SearchManagement = require('azure-arm-search');

const subscriptionId = 'your-subscription-id';
const resourceGroup = 'yourResourceGroup';

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

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
