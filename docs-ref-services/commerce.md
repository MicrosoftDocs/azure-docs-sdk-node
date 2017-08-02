---
title: Azure Commerce modules for Node.js
description: Reference for Azure Commerce modules for Node.js
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

const startDate = '2017-06-01';
const endDate = '2017-07-01';
const subcriptionId = 'your-subscription-id';
const usageOptions = {
  showDetails: true,
  granularity: 'Daily'
};

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new CommerceManagement(credentials, subcriptionId);

    client.usageAggregates.list(
      startDate,
      endDate,
      usageOptions,
      (err, result) => {
        if (err) {
          return console.log(err);
        }
        console.dir(result, { depth: null, colors: true });
      }
    );
  })
  .catch(err => console.log(err));
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
