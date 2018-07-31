---
title: Azure Billing modules for Node.js
description: Reference for Azure Billing modules for Node.js
author: tfitzmac
ms.author: tomfitz
manager: timlt
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Billing
uid: azure.nodejs.sdk.landingpage.services.billing





---

# Azure Billing modules for Node.js

## Overview
The Azure Billing APIs provide access to your Azure billing information and invoices.

To use this API, the account admin must opt in via the Azure portal. See [Manage access to Azure billing using roles](https://docs.microsoft.com/azure/billing/billing-manage-access).

### Install the npm module 

Install the Azure Billing npm module 

```bash
npm install azure-arm-billing
```
### Example 
 
This example prints a list of all of your past invoices.
 
```javascript 
const msRestAzure = require('ms-rest-azure');
const BillingManagement = require('azure-arm-billing');

const subscriptionId = 'your-subscription-id';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    let client = new BillingManagement(credentials, subscriptionId);
    return client.invoices.list();
  })
  .then(invoices => {
    console.log('List of invoices:');
    console.dir(invoices, { depth: null, colors: true });
  });
``` 


## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
