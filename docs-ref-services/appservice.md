---
title: Azure App Service modules for Node.js
description: Deploy, manage, and scale web apps, APIs, and mobile apps running in Azure App Service from your Node.js code
keywords: Azure, Node, SDK, API, web apps , mobile , nodejs, javascript
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/06/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: appservice
---

# Azure App Service Node.js modules

## Overview

Azure App Service is a platform-as-a-service (PaaS) offering of Microsoft Azure. Create web and mobile apps for any platform or device. Integrate your apps with SaaS solutions, connect with on-premises applications, and automate your business processes. Azure runs your apps on fully managed virtual machines (VMs), with your choice of shared VM resources or dedicated VMs.

App Service includes the web and mobile capabilities that we previously delivered separately as Azure Websites and Azure Mobile Services. It also includes new capabilities for automating business processes and hosting cloud APIs. As a single integrated service, App Service lets you compose various components -- websites, mobile app back ends, RESTful APIs, and business processes -- into a single solution.

## Management Package

### Install packages with npm

Use npm to install the Azure storage module.

```
npm install azure-arm-website
```   

### Example

This example creates a website using Node.js

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
