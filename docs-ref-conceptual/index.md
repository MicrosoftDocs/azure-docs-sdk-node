---
title: Azure for Node.js developers
description: Overview of the Azure management and service libraries for Node.js
keywords: Azure, Node.js, SDK, API
author: tomarcher
layout: LandingPage
ms.author: tarcher
manager: douge
ms.date: 06/17/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: node
ms.service: multiple
ms.assetid: 
---

# Azure for Node.js developers

Get started building great Node.js apps on Azure.

<ul class="panelContent">
    <li>
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardText">
                        <h2>Tools</h2>
                        <a href="node-azure-tools.md">Download Azure tools and plugins.</a>
                    </div>
                </div>
            </div>
        </div>
    </li><li>
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                    </div>
                    <div class="cardText">
                        <h2>npm packages</h2>
                        <a href="node-sdk-azure-install.md">Use services and manage Azure resources.</a>
                    </div>
                </div>
            </div>
        </div>
    </li><li>
        <div class="cardSize">
            <div class="cardPadding">
                <div class="card">
                    <div class="cardImageOuter">
                    </div>
                    <div class="cardText">
                        <h2>Jenkins CI/CD</h2>
                        <a href="/azure/virtual-machines/linux/tutorial-jenkins-github-docker-cicd">Use Jenkins to deploy to Azure.</a>
                    </div>
                </div>
            </div>
        </div>
    </li>
</ul>

## Management APIs

Create and manage Azure resources from your Node.js applications using the [Azure management libraries for Node.js](node-sdk-azure-get-started.md). The following code snippet illustrates how to log in to Azure, create a management client, and list all VM images for the specified location, publisher, offer, and SKU.

```javascript
const msRestAzure = require('ms-rest-azure');
const computeManagementClient = require('azure-arm-compute');

// Interactive Login - provides a url, and a code that needs to be copied and pasted in a browser.  
// If successful, the user will receive a DeviceTokenCredentials object. 
msRestAzure.interactiveLogin((err, credentials) => {
  const client = new computeManagementClient(credentials, '<azure-subscription-id>');

  client.virtualMachineImages.list(
    'westus', // location
    'MicrosoftWindowsServer', // publisher name 
    'WindowsServer',  // offer
    '2012-R2-Datacenter', // sku
    (err, result, request, response) => {
      if (err) return console.error(err);
      console.log(result);
    });
});
```

## Five-minute quickstarts
Create and deploy a Node.js app to Azure in five minutes.
<ul>
   <li><a href="/azure/app-service-web/app-service-web-get-started-nodejs">Web Apps</a></li>
   <li><a href="/azure/app-service-api/app-service-api-nodejs-api-app">REST API</a></li>
   <li><a href="/azure/azure-functions/functions-create-first-azure-function">Azure Functions</a></li>
   <li><a href="/azure/container-service/container-service-kubernetes-walkthrough">Docker and Kubernetes</a></li>
</ul>

## Tutorials and samples

Complete walkthroughs for app creation and deployment.

<ul>
    <li><a href="node-sdk-azure-virtual-machine-samples.md">Virtual machines</a></li>
    <li><a href="node-sdk-azure-web-apps-samples.md">Web Apps</a></li>
    <li><a href="node-sdk-azure-sql-database-samples.md">SQL Database</a></li>
</ul>