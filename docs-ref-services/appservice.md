---
title: Azure App Service modules for Node.js
description: Deploy, manage, and scale web apps, APIs, and mobile apps running in Azure App Service from your Node.js code
keywords: Azure, Node, SDK, API, web apps , mobile , nodejs, javascript
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/19/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: appservice
---

# Azure App Service Node.js modules

## Overview

Deploy, manage, and scale web apps, APIs, and mobile apps running in Azure App Service from your Node.js code using the management modules. The management modules also provide a Node.js interface for automating app configuration as an alternative to using the Azure Portal or CLI.

## Install modules with npm

Use npm to install the Azure storage client or management modules.

### Management

```
npm install azure-arm-website
```   

## Example

Create a website from Node.js

```javascript
const msRestAzure = require('ms-rest-azure');
const webSiteManagementClient = require('azure-arm-website');
let webSiteClient;

msRestAzure.interactiveLogin((err, credentials) => {
  webSiteClient = new webSiteManagementClient(credentials, 'my-subscription-id');
  createWebSite('website001').then(website => console.log('Web Site created successfully', website));
});

function createWebSite(webSiteName) {
  const parameters = { location: 'westus', serverFarmId: 'testHostingPlan' };
  console.log(`Creating web site:  ${webSiteName}`);
  return webSiteClient.webApps.createOrUpdate('testResourceGroup', webSiteName, parameters, null);
}
```

## Samples

[!INCLUDE [node-appservice-samples](../docs-ref-conceptual/includes/appservice-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
