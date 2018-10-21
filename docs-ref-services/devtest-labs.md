---
title: Azure DevTest Labs Modules for Node.js
description: Reference for Azure DevTest Labs modules for Node.js
author: craigcaseyMSFT
ms.author: v-craic
manager: v-laurab
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: DevTest Labs
---

# Azure DevTest Labs modules for Node.js

Azure DevTest Labs is a service that helps developers and testers quickly create environments in Azure while minimizing waste and controlling cost. You can test the latest version of your application by quickly provisioning Windows and Linux environments using reusable templates and artifacts. Easily integrate your deployment pipeline with DevTest Labs to provision on-demand environments. Scale up your load testing by provisioning multiple test agents, and create pre-provisioned environments for training and demos.

## Management package

### Install the npm module

Install the Azure DevTest Labs npm module

```bash
npm install azure-arm-devtestlabs
```

### Example

This example gets and prints the details of a lab.

```javascript
const msRestAzure = require('ms-rest-azure');
const DevTestLabsClient = require('azure-arm-devtestlabs');

const subscriptionId = 'your-subscription-id';
const resourceGroupName = 'your-resource-group-name';
const labName = 'your-lab-name';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new DevTestLabsClient(credentials, subscriptionId);
    return client.labOperations.getResource(resourceGroupName, labName);
  })
  .then(lab => {
    console.log('Details of lab:');
    console.dir(lab, { depth: null, colors: true });
  });
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
