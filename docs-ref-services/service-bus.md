---
title: Azure Service Bus module for Node.js
description: Reference for Azure Service Bus module for Node.js
keywords: Azure,SDK,API,Service Bus, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/30/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Service Bus
---

# Azure Service Bus Module for Node.js

## Overview

Azure Service Bus is an asynchronous messaging cloud platform that enables you to send data between decoupled systems.

Learn more about [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview).

## Management package

### Install the npm module

Install the Azure Service Bus npm module

```bash
npm install azure-arm-sb
```

### Example

This example gets and prints a list of namespaces

```javascript
const msRestAzure = require('ms-rest-azure');
const ServicebusManagement = require('azure-arm-sb');

const subscriptionId = 'your-subscription-id';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new ServicebusManagement(credentials, subscriptionId);
    return client.namespaces.listBySubscription();
  })
  .then(namespaces => {
    console.log('List of namespaces:');
    console.dir(namespaces, { depth: null, colors: true });
  });

```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
