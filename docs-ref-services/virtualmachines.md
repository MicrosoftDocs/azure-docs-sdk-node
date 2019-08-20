---
title: Virtual Machine Modules for Node.js - Azure
description: Azure Virtual Machine Modules for Node.js reference guide
author: iainfoulds
ms.author: iainfou
manager: jeconnoc
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: compute
---

# Azure Virtual Machine Modules for Node.js

## Overview

Define, configure, and deploy new Windows and Linux virtual machines and virtual machine scale sets from your code with the Azure management modules for Node.js. The modules let you start and stop existing virtual machines and attach or detach disks to stopped VMs in your Azure subscription.

## Management package

### Install the npm module

Install the Azure Compute npm module

```bash
npm install azure-arm-compute
```   

### Example

The following example illustrates how to log in to Azure, create a management client, and list all VM images for the specified location, publisher, offer, and SKU.

```javascript
const msRestAzure = require('ms-rest-azure');
const computeManagementClient = require('azure-arm-compute');

const subscriptionId = 'my-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
  const client = new computeManagementClient(credentials, subscriptionId);

  client.virtualMachineImages
    .list(
        'westus',                   // location
        'Canonical',   // publisher name
        'UbuntuServer',            // offer
        '16.04-LTS'        // sku
    )
    .then(result => console.log(result));
});
```

## Samples

| | |
|---|---|
| **Virtual machine management** ||
| [Azure virtual machines management sample with Node.js](https://github.com/Azure-Samples/compute-node-manage-vm) | Demonstrates how to create, list, restart, and delete virtual machines. |

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
