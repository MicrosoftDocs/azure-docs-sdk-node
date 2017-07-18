---
title: Azure Virtual Machine modules for Node.js
description: Reference for Azure Virtual Machine modules for Node.js
keywords: Azure, Node, SDK, API, virtual machine, vm, nodejs, javascript
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: compute
---

# Azure Virtual Machine modules for Node.js

## Overview

Define, configure, and deploy new Windows and Linux virtual machines and virtual machine scale sets from your code with the Azure management modules for Node.js. The modules let you start and stop existing virtual machines and attach or detach disks to stopped VMs in your Azure subscription.

## Install modules with npm

Use npm to install the Azure management modules.

### Management

```bash
npm install azure-arm-compute
```   

## Example

The following code snippet illustrates how to log in to Azure, create a management client, and list all VM images for the specified location, publisher, offer, and SKU.

```javascript
const msRestAzure = require('ms-rest-azure');
const computeManagementClient = require('azure-arm-compute');

msRestAzure.interactiveLogin().then(credentials => {
  const client = new computeManagementClient(credentials, '<azure-subscription-id>');

  client.virtualMachineImages.list(
    'westus', // location
    'MicrosoftWindowsServer', // publisher name 
    'WindowsServer',  // offer
    '2012-R2-Datacenter', // sku
    (err, result, request, response) => {
      if (err) return console.error(err);
      console.log(result);
    });
});
```

## Samples

[!INCLUDE [node-storage-samples](../docs-ref-conceptual/includes/virtualmachines-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
