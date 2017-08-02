---
title: Azure Resource Manager Modules for Node.js
description: Reference for Azure Resource Manager Modules for Node.js
keywords: Azure,SDK,API,Resources, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Resources
---

# Azure Resource modules for Node.js

## Overview

Azure Resource Manager enables you to deploy and manage the infrastructure for your Azure solutions. You organize related resources in resource groups, and deploy your resources with JSON templates.

Learn more about [Azure Resources](https://docs.microsoft.com/azure/azure-resource-manager/).

## Management package

### Install the npm module

Use npm to install the Azure Resource Manager module for Node.js

```bash
npm install azure-arm-resource
```

### Example

This example creates a client and then retrieves all of the resource groups for a specified subscription.

```javascript
const msRestAzure = require('ms-rest-azure');
const resourceManagement = require('azure-arm-resource');

const subscriptionId = 'your-subscription-id';

// Interactive Login
msRestAzure.interactiveLogin().then(credentials => {
    const client = new resourceManagement.ResourceManagementClient(
        credentials, 
        subscriptionId
    );
    client.resources.list((err, result) => {
        console.log(result);
    });
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
