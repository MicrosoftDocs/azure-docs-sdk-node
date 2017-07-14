---
title: Azure Traffic Manager module for Node.js
description: Reference for Azure Traffic Manager module for Node.js
keywords: Azure,SDK,API,Traffic Manager, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/30/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Traffic Manager
---

# Azure Traffic Manager Packages for Node.js

## Overview

Microsoft Azure Traffic Manager allows you to control the distribution of user traffic for service endpoints in different datacenters. Service endpoints supported by Traffic Manager include Azure VMs, Web Apps, and cloud services. You can also use Traffic Manager with external, non-Azure endpoints.

Learn more about [Azure Traffic Manager](https://docs.microsoft.com/en-us/azure/traffic-manager/traffic-manager-overview).

## Management Package

### Install npm module
```bash
npm install azure-arm-trafficmanager
```

### Example

Authenticate to Azure, create a new client and list all Traffic Managers for a given resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const trafficManager = require('azure-arm-trafficmanager');

msRestAzure.interactiveLogin().then(credentials => {
  const client = new trafficManager(credentials, 'subscription-id');
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
