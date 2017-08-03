---
title: Azure Commerce Modules for Node.js
description: Reference for Azure Commerce Modules for Node.js
keywords: Azure,SDK,API,Commerce, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Commerce
---

# Azure Commerce Modules for Node.js

## Overview

Use Azure Billing APIs to pull usage and resource data into your preferred data analysis tools. The Azure Resource Usage and RateCard APIs can help you accurately predict and manage your costs. The APIs are implemented as a Resource Provider and part of the family of APIs exposed by the Azure Resource Manager.

## Management Package

### Install the modules with npm

Use npm to install the Azure Commerce modules for Node.js

```bash
npm install azure-arm-commerce
```

### Example

This example retrieves your estimated Azure consumption data for a selected time period.

```javascript
const msRestAzure = require('ms-rest-azure');
const CommerceManagement = require('azure-arm-commerce');

const subscriptionId = 'your-subscription-id';

const endDate = new Date();
endDate.setUTCHours(0,0,0,0);
const startDate = new Date();
startDate.setMonth(startDate.getMonth() - 1);
startDate.setUTCHours(0,0,0,0);

const usageOptions = {
  showDetails: true,
  granularity: 'Daily'
};

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new CommerceManagement(credentials, subscriptionId);

    return client.usageAggregates.list(
      startDate,
      endDate,
      usageOptions
    );
  })
  .then(usage => {
    console.dir(usage, { depth: null, colors: true });
  });
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
