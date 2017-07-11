---
title: Azure Advisor modules for Node.js
description: Reference for Azure Advisor modules for Node.js
keywords: Azure,SDK,API,Advisor, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/06/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Advisor
---

# Azure Advisor modules for Node.js

## Overview
Azure Advisor is a personalized cloud consultant that helps you follow best practices to optimize your Azure deployments. Advisor analyzes your resource configuration and usage telemetry and then recommends solutions that can help you improve the cost effectiveness, performance, high availability, and security of your Azure resources.

With Advisor, you can:
- Get proactive, actionable, and personalized best practices recommendations.
- Improve the performance, security, and high availability of your resources, as you identify opportunities to reduce your overall Azure spend.
- Get recommendations with proposed actions inline.

## Management

Use npm to install the Azure Advisor modules for Node.js

### Install the modules with npm
```bash
npm install azure-arm-advisor
```
## Example
```javascript
const msRestAzure = require('ms-rest-azure');
const advisorManagement = require('azure-arm-advisor');

msRestAzure.interactiveLogin().then( credentials => {
  const client = new advisorManagement(credentials, 'your-subscription-id');
  client.recommendations.list().then(recommendations => {
    console.log('List of recommendations:');
    console.dir(recommendations, {depth: null, colors: true});
  });
});
```
## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
