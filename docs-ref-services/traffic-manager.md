---
title: Azure Traffic Manager modules for Node.js
description: Azure Traffic Manager modules for Node.js reference
author: KumudD
ms.author: kumud
manager: jeconnoc
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Traffic Manager
---

# Azure Traffic Manager modules for Node.js

## Overview

Microsoft Azure Traffic Manager allows you to control the distribution of user traffic for service endpoints in different datacenters. Service endpoints supported by Traffic Manager include Azure VMs, Web Apps, and cloud services. You can also use Traffic Manager with external, non-Azure endpoints.

Learn more about [Azure Traffic Manager](https://docs.microsoft.com/azure/traffic-manager/traffic-manager-overview).

## Management Package

### Install the npm module

Install the Azure traffic manager npm module

```bash
npm install azure-arm-trafficmanager
```

### Example

This example lists all Traffic Managers for a given resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const trafficManager = require('azure-arm-trafficmanager');

const subscriptionId = 'your-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
  const client = new trafficManager(credentials, subscriptionId);
  const resourceGroupName = 'resource-group-name';
  client.profiles.listAllInResourceGroup(resourceGroupName).then(profiles => {
    profiles.map(profile => {
      console.log(`found profile : ${profile.name}`);
    });
  });
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
