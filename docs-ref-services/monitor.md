---
title: Azure Monitor modules for Node.js
description: Reference for Azure Monitor modules for Node.js
keywords: Azure,SDK,API,Monitor, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/07/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Monitor
---

# Azure Monitor Packages for Node.js

## Overview
Cloud applications are complex with many moving parts. Monitoring provides data to ensure that your application stays up and running in a healthy state. It also helps you to stave off potential problems or troubleshoot past ones. In addition, you can use monitoring data to gain deep insights about your application. That knowledge can help you to improve application performance or maintainability, or automate actions that would otherwise require manual intervention.

## Management Package

### Install npm module

```bash
npm install azure-arm-insights
```

### Example

This snippet prints all the alerting rules associated with a resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const insightsManagementClient = require('azure-arm-insights');

const subscriptionId = 'your-subscription-id';
const resourceGroupName = 'your-resource-group-name';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new insightsManagementClient(credentials, subscriptionId);
    return client.alertRules.listByResourceGroup(resourceGroupName);
  })
  .then(rules => {
    console.log('List of rules:');
    console.dir(rules, { depth: null, colors: true });
  });

```

### Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
