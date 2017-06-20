---
title: Azure for Node.js developers
description: Overview of the Azure management and service modules for Node.js
keywords: Azure, Node.js, SDK, API
author: tomarcher
layout: LandingPage
ms.author: tarcher
manager: douge
ms.date: 06/17/2017
ms.topic: article
ms.prod: azure
ms.devlang: nodejs
ms.service: azure-nodejs
---

# Azure for Node.js developers

<ul class="cardsY panelContent">
    <li>
        <a href="node-azure-tools.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card"  style="height: 84px">
                        <div class="cardImageOuter"  style="margin-top: 12px">
                            <div class="cardImage">
                                <img src="https://docs.microsoft.com/media/common/i_tools.svg" alt="" />
                            </div>
                        </div>
                        <div class="cardText">
                             <h3 style="margin-bottom: 0; font-size: 24px">Tools</h3>
                            <p style="font-size: 1rem">Download Azure tools and plugins.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li><li>
        <a href="node-sdk-azure-install.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card" style="height: 84px">
                        <div class="cardImageOuter"  style="margin-top: 12px">
                            <div class="cardImage">
                                <img src="https://docs.microsoft.com/media/common/i_reference.svg" alt="" />
                            </div>
                        </div>
                        <div class="cardText">
                            <h3 style="margin-bottom: 0; font-size: 24px">Modules</h3>
                            <p style="font-size: 1rem">Use services and manage Azure resources.</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>

## Five-minute quickstarts
Create and deploy a sample app in five minutes.
<ul class="noBullet">
   <li><a href="http://docs.microsoft.com/azure/app-service-web/app-service-web-get-started-nodejs">Create a web app</a></li>
   <li><a href="http://docs.microsoft.com/azure/azure-functions/functions-create-first-azure-function">Create and trigger serverless code</a></li>
   <li><a href="http://docs.microsoft.com/azure/container-service/container-service-kubernetes-walkthrough">Deploy a Docker image to a Kubernetes cluster</a></li>
</ul>

## Free PluralSight video training

<ul class="panelContent cardsW">
   <li>
      <div class="cardSize">
         <div class="cardPadding">
            <div class="card">
               <div class="cardImageOuter">
                  <div class="cardImage">
                     <a href="https://www.pluralsight.com/courses/developing-nodejs-microsoft-azure-getting-started?twoid=d6abac77-7dcc-4d33-9e03-f85e78989f02" data-linktype="external">
                     <img alt="" src="https://docs.microsoft.com/en-us/azure/app-service-web/media/index/video-training-nodejs.png" data-linktype="external"></a>
                  </div>
               </div>
               <div class="cardText">
                  <p>
                     <a href="https://www.pluralsight.com/courses/developing-nodejs-microsoft-azure-getting-started?twoid=d6abac77-7dcc-4d33-9e03-f85e78989f02" data-linktype="external">Developing with Node.js</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </li>
</ul>

## Management APIs
Install [Azure npm modules](node-sdk-azure-get-started.md) to manage Azure resources. 

```javascript
const msRestAzure = require('ms-rest-azure');
const computeManagementClient = require('azure-arm-compute');

// Authenticate with service principal information from environment variables
MsRest.loginWithServicePrincipalSecret(process.env.AZURE_APPID, process.env.AZURE_PASS, process.env.AZURE_TENANT, (err, credentials) => {
    const client = new storageManagementClient(credentials, process.env.AZURE_SUB);

  client.virtualMachineImages.list(
    'westus', // location
    'Canonical', // publisher name 
    'UbuntuServer',  // offer
    '16.04-LTS', // sku
    (err, result, request, response) => {
      if (err) return console.error(err);
      console.log(result);
    });
});
```

## Tutorials

Learn how to use Azure services in your Node.js apps.

<ul class="noBullet">
    <li><a href="https://docs.microsoft.com/azure/app-service-web/app-service-web-tutorial-nodejs-mongodb-app">Node.js with MongoDB</a></li>
</ul>