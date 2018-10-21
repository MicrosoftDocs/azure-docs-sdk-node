---
title: Azure Authorization modules for Node.js
description: Reference for Azure Authorization modules for Node.js
author: rloutlaw
ms.author: ROutlaw
manager: angrobe
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Authorization
---

# Azure Authorization modules for Node.js

## Overview

Azure App Service Authentication / Authorization is a feature that provides a way for your application to sign in users so that code doesn't have to be changed on the app backend. Authorization provides an easy way to protect your application and work with per-user data.

## Management package

Use npm to install the Azure Authorization modules for Node.js

### Install the npm module

Install the Azure authorization npm module

```bash
npm install azure-arm-authorization
```

### Example

This example lists all role assignments for the requested resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const authorizationManagement = require('azure-arm-authorization');

const resourceGroup = 'resource-group-name';
const subscriptionId = 'your-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
 const client = new authorizationManagement(credentials, subscriptionId);
 client.roleAssignments.listForResourceGroup(resourceGroupName).then(result => {
   console.log(result);
 });
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
