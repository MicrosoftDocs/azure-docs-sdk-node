---
title: Azure Scheduler module for Node.js
description: Reference for Azure Scheduler module for Node.js
keywords: Azure,SDK,API,Scheduler, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/30/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Scheduler
---

# Azure Scheduler module for Node.js

## Overview

Azure Scheduler creates, maintains, and invokes scheduled work via HTTP, HTTPS, a storage queue, or the [Azure Service Bus](/azure/service-bus-messaging/service-bus-messaging-overview).

Learn more about [Azure Scheduler](/azure/scheduler/scheduler-intro).


## Management API

Create, maintain, and invoke scheduled work across various communication channels with the management API.

### Install npm package

Use npm to install the Azure Scheduler module for Node.js

```bash
npm install azure-arm-scheduler
```

### Example

Get a list of the current schedulers:

```javascript
const msRestAzure = require('ms-rest-azure')
const SchedulerManagement = require('azure-arm-scheduler')

// Log in interactively
msRestAzure.interactiveLogin().then((credentials) => {
    // Create a scheduler from the login credentials
    let client = new SchedulerManagement(credentials, 'your-subscription-id')
    // Get the full list of current jobs for the subscription
    return client.jobCollections.listBySubscription()
}).then((currentJobs) => {
    console.log("Current jobs:")
    console.dir(currentJobs, {depth:null, colors:true})
}).catch((error) => {
    console.log("An error occurred:")
    console.dir(error, {depth:null, colors:true})
})
```

### Samples


Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
