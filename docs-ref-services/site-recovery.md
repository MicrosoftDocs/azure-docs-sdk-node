---
title: Azure Site Recovery modules for Node.js
description: Reference for Azure Site Recovery modules for Node.js
author: rayne-wiselman
ms.author: raynew
manager: carmonm
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Site Recovery
---

# Azure Site Recovery modules for Node.js

Site Recovery allows you to automate replication of Azure VMs between regions, on-premises virtual machines and physical servers to Azure, and on-premises machines to a secondary datacenter.

Learn more about [Azure Site Recovery](https://docs.microsoft.com/azure/site-recovery/site-recovery-overview).

## Management package

### Install the npm module

Install the Azure Site Recovery service npm module

```bash
npm install azure-arm-recoveryservices
```

### Example

This example lists the Site Recovery service for a resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const RecoveryServicesManagement = require('azure-arm-recoveryservices');

const subscriptionId = 'your-subscription-id';
const resourceGroupName = 'your-resource-group-name';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new RecoveryServicesManagement(credentials, subscriptionId);
    return client.vaults.listByResourceGroup(resourceGroupName);
  })
  .then(vaults => {
    console.log('List of vaults:');
    console.dir(vaults, { depth: null, colors: true });
  });
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
