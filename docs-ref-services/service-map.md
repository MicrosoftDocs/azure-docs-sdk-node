---
title: Azure Service Map modules for Node.js
description: Reference for Azure Service Map modules for Node.js
author: bwren
ms.author: bwren
manager: carmonm
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Service Map
---

# Azure Service Map modules for Node.js

Service Map automatically discovers application components on Windows and Linux systems and maps the communication between services. Service Map shows connections between servers, processes, and ports across any TCP-connected architecture, with no configuration required other than the installation of an agent.

Learn more about [Azure Service Map](https://docs.microsoft.com/azure/operations-management-suite/operations-management-suite-service-map).

## Management package

### Install the npm module

Install the Azure Service Map npm module

```bash
npm install azure-arm-servicemap
```

### Example

This example lists all service maps for the specified resource group and workspace.

```javascript
const msRestAzure = require('ms-rest-azure');
const serviceMapManagement = require('azure-arm-servicemap');

const subscriptionId = 'your-subscription-id';
const resourceGroup = 'your-resource-group';
const workspace = 'your-workspace';
let serviceMapClient;

msRestAzure.interactiveLogin().then(credentials => {
  serviceMapClient = new serviceMapManagement(credentials, subscriptionId);
  serviceMapClient.machineGroups
    .listByWorkspace(resourceGroup, workspace)
    .then(machineGroups => console.log('Retrieved machine groups: ', machineGroups));
});
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
