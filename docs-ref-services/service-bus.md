---
title: Azure Service Bus Modules for Node.js
description: Reference for Azure Service Bus Modules for Node.js
author: sethmanheim
ms.author: sethm
manager: timlt
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Service Bus
---

# Azure Service Bus Modules for Node.js

Azure Service Bus is an asynchronous messaging cloud platform that enables you to send data between decoupled systems.

Learn more about [Azure Service Bus](https://docs.microsoft.com/azure/service-bus-messaging/service-bus-messaging-overview).

## Management package

### Install the npm module

Use npm to install the Azure Service Bus module for Node.js

```bash
npm install azure-arm-sb
```

### Example

This example creates a client and then lists all Service Bus namespaces associated with a given subscription.

```javascript
const msRestAzure = require('ms-rest-azure');
const ServicebusManagement = require('azure-arm-sb');

const subscriptionId = 'your-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
    const client = new ServicebusManagement(credentials, subscriptionId);
    client.namespaces.listBySubscription().then(namespaces => {
        namespaces.map(ns => {
            console.log(`found ns : ${ns.name}`);
        });
    });
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
