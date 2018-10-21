---
title: Azure Commerce modules for Node.js
description: Reference for Azure Commerce modules for Node.js
author: rloutlaw
ms.author: ROutlaw
manager: angrobew
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Commerce
---

# Azure Commerce modules for Node.js

## Overview

Use Azure Commerce APIs to pull usage and resource data into your preferred data analysis tools. The Azure Resource Usage and RateCard APIs can help you accurately predict and manage your costs. The APIs are implemented as a Resource Provider and part of the family of APIs exposed by the Azure Resource Manager.

## Management package

### Install the npm module

Install the Azure Commerce npm module

```bash
npm install azure-arm-commerce
```

### Example

This example retrieves your estimated Azure consumption data for the last month.

```javascript
const msRestAzure = require('ms-rest-azure');
const CommerceManagement = require('azure-arm-commerce');

const endDate = new Date();
endDate.setUTCHours(0, 0, 0, 0);
const startDate = new Date();
startDate.setMonth(startDate.getMonth() - 1);
startDate.setUTCHours(0, 0, 0, 0);

const subscriptionId = 'your-subscription-id';
const usageOptions = {
  showDetails: true,
  granularity: 'Daily'
};

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new CommerceManagement(credentials, subscriptionId);
    return client.usageAggregates.list(startDate, endDate, usageOptions);
  })
  .then(usage => {
    console.dir(usage, { depth: null, colors: true });
  });
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
