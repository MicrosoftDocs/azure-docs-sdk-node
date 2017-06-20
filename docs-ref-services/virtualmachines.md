---
title: Azure Virtual Machine libraries for Node.js
description: Define, configure, and deploy new Windows and Linux virtual machines from your Node.js app.
keywords: Azure, Node, SDK, API, virtual machine, vm, nodejs, javascript
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: compute
---

# Azure virtual machine libraries

## Overview

Define, configure, and deploy new Windows and Linux virtual machines and virtual machine scale sets from your code with the Azure management libraries for Node.js. The libraries also enable you to programmatically start and stop existing virtual machines, and attach or detach disks to stopped VMs in your Azure subscription.

## Install modules with npm

Use npm to install the Azure management modules.

### Management

```
npm install azure-arm-compute
```   

## Example

The following code snippet illustrates how to log in to Azure, create a management client, and list all VM images for the specified location, publisher, offer, and SKU.

```javascript
const msRestAzure = require('ms-rest-azure');
const computeManagementClient = require('azure-arm-compute');

// Interactive Login - provides a url, and a code that needs to be copied and pasted in a browser.  
// If successful, the user will receive a DeviceTokenCredentials object. 
msRestAzure.interactiveLogin((err, credentials) => {
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