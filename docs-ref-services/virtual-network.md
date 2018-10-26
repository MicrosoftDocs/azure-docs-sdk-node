---
title: Azure Virtual Network modules for Node.js
description: Reference for Azure Virtual Network modules for Node.js
author: jimdial
ms.author: jdial
manager: jeconnoc
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Virtual Network
---

# Azure Virtual Network modules for Node.js

## Overview

The Azure Virtual Network service enables you to securely connect Azure resources to each other with virtual networks (VNets). A VNet is a representation of your own network in the cloud. A VNet is a logical isolation of the Azure cloud dedicated to your subscription. You can also connect VNets to your on-premises network.

Learn more about [Azure Virtual Network](https://docs.microsoft.com/azure/virtual-network/virtual-networks-overview).

## Management package

### Install the npm module

Install the Azure Virtual Network npm module

```bash
npm install azure-arm-network
```

### Example

This example gets and prints the list of virtual networks

```javascript
const msRestAzure = require('ms-rest-azure');
const NetworkManagementClient = require('azure-arm-network');

const subscriptionId = 'your-subscription-id';
const resourceGroup = 'your-resource-group-name';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new NetworkManagementClient(credentials, subscriptionId);
    return client.virtualNetworks.list(resourceGroup);
  })
  .then(networkList => {
    console.log('List of virtual networks:');
    console.dir(networkList, { depth: null, colors: true });
  });
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
