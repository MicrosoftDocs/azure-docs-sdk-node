---
title: Azure Relay modules for Node.js
description: Reference for Azure Relay modules for Node.js
author: sethmanheim
ms.author: sethm
manager: timlt
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Relay
---

# Azure Relay modules for Node.js

The Azure Relay service creates hybrid applications by enabling you to securely expose services that reside within a corporate enterprise network to the public cloud, without having to open a firewall connection, or require intrusive changes to a corporate network infrastructure. Relay supports a variety of different transport protocols and web services standards.

Learn more about [Azure Relay](https://docs.microsoft.com/azure/service-bus-relay/relay-what-is-it).

## Management package

### Install the npm module

Install the Azure Relay npm module

```bash
npm install azure-arm-relay
```

### Example

This example lists the namespaces for a Relay client.

```javascript
const msRestAzure = require('ms-rest-azure');
const RelayManagement = require('azure-arm-relay');

const subscriptionId = 'your-subscription-id';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new RelayManagement(credentials, subscriptionId);
    return client.namespaces.list();
  })
  .then(namespaces => {
    console.dir(namespaces, { depth: null, colors: true });
  })
  .catch(err => console.log(err));
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
