---
title: Azure Machine Learning modules for Node.js
description: Reference for Azure Machine Learning modules for Node.js
author: hning86
ms.author: haining
manager: mwinkle
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Machine Learning
---

# Azure Machine Learning modules for Node.js

Machine learning is a technique of data science that helps computers learn from existing data in order to forecast future behaviors, outcomes, and trends. These forecasts or predictions from machine learning can make apps and devices smarter. When you shop online, machine learning helps recommend other products you might like based on what you've purchased. When your credit card is swiped, machine learning compares the transaction to a database of transactions and helps detect fraud. When your robot vacuum cleaner vacuums a room, machine learning helps it decide whether the job is done.

## Management Package


### Install the npm module

Install the Azure Machine Learning npm module

```bash
npm install azure-arm-machinelearning
```

### Example

This example lists all machine learning committment plans.

```javascript
const msRestAzure = require('ms-rest-azure');
const MachineLearningManagement = require('azure-arm-machinelearning');

const subscriptionId = 'your-subscription-id';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new MachineLearningManagement.CommitmentPlansManagementClient(
      credentials,
      subscriptionId
    );
    return client.commitmentPlans.list();
  })
  .then(commitmentPlans => {
    console.log('List of commitmentPlans:');
    console.dir(commitmentPlans, { depth: null, colors: true });
  });
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
