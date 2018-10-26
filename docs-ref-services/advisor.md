---
title: Azure Advisor modules for Node.js
description: Reference for Azure Advisor modules for Node.js
author: KumudD
ms.author: kumud
manager: jeconnoc
ms.date: 07/18/2017
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

## Management package

### Install the npm module

Install the Azure Advisor npm module

```bash
npm install azure-arm-advisor
```

### Example

This example displays the list of recommendations from Azure Advisor.

```javascript
const msRestAzure = require('ms-rest-azure');
const advisorManagement = require('azure-arm-advisor');

const subscriptionId = 'your-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
  const client = new advisorManagement(credentials, subscriptionId);
  client.recommendations.list().then(recommendations => {
    console.log('List of recommendations:');
    console.dir(recommendations, {depth: null, colors: true});
  });
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
