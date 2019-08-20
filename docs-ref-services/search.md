---
title: Azure Search resource management modules for Node.js
description: Introduction to the Node.js resource management modules for Azure Search.
author: HeidiSteen
manager: nitinme
ms.author: heidist

ms.date: 08/18/2019
ms.topic: conceptual
ms.devlang: nodejs
services: search
ms.service: search

---

# Node.js resource management modules for Azure Search

Azure Search is a search-as-a-service cloud solution that gives developers APIs and tools for adding a rich search experience over private, heterogeneous content in web, mobile, and enterprise applications. This Node.js module provides resource management APIs for creating and updating a search service, managing access keys, and allocating replicas and partitionss. You cannot change tiers (SKU) or location with these APIs.

For more information about the service and related features, see [Introduction to Azure Search](https://docs.microsoft.com/azure/search/search-what-is-azure-search), [Service administration for Azure Search](https://docs.microsoft.com/azure/search/search-manage), and [Quickstart: Create an Azure Search index in Node.js](https://docs.microsoft.com/azure/search/search-get-started-nodejs).

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
