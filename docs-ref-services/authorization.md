---
title: Azure Authorization modules for Node.js
description: Reference for Azure Authorization modules for Node.js
keywords: Azure,SDK,API,Authorization, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/06/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Authorization
---

# Azure Authorization modules for Node.js

## Overview
Azure App Service Authentication / Authorization is a feature that provides a way for your application to sign in users so that code doesn't have to be changed on the app backend. Authorization provides an easy way to protect your application and work with per-user data.

## Management

Use npm to install the Azure Authorization modules for Node.js

### Install the modules with npm
```bash
npm install azure-arm-authorization
```
### Example
```javascript
const msRestAzure = require('ms-rest-azure');
const authorizationManagement = require('azure-arm-authorization');

msRestAzure.interactiveLogin( (err, credentials) => {
 const client = new authorizationManagement(credentials, 'your-subscription-id');
 const resourceGroupName = 'resource-group-name';
 client.roleAssignments.listForResourceGroup(resourceGroupName, (err, result) => {
   console.log(result);
 });
});
```

##Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
