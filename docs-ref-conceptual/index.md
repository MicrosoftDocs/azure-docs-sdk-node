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

Build great Node.js apps on Azure.

<ul class="cardsY panelContent">
    <li>
        <a href="node-azure-tools.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage">
                                <img src="/media/common/i_tools.svg" alt="" />
                            </div>
                        </div>
                        <div class="cardText">
                            <h2>Tools</h2>
                            Download Azure tools and plugins.
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li><li>
        <a href="node-sdk-azure-install.md">
            <div class="cardSize">
                <div class="cardPadding">
                    <div class="card">
                        <div class="cardImageOuter">
                            <div class="cardImage">
                                <img src="/media/common/i_reference.svg" alt="" />
                            </div>
                        </div>
                        <div class="cardText">
                            <h2>Libraries</h2>
                            Use services and manage Azure resources.
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </li>
</ul>

## Five-minute quickstarts
Create and deploy a sample app in five minutes.
<ul>
   <li><a href="http://docs.microsoft.com/azure/app-service-web/app-service-web-get-started-nodejs">Web Apps</a></li>
   <li><a href="http://docs.microsoft.com/azure/azure-functions/functions-create-first-azure-function">Azure Functions</a></li>
   <li><a href="http://docs.microsoft.com/azure/container-service/container-service-kubernetes-walkthrough">Docker and Kubernetes</a></li>
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

## Tutorials

Learn how to use Azure services in your Node.js apps.

<ul>
    <li><a href="https://docs.microsoft.com/azure/app-service-web/app-service-web-tutorial-nodejs-mongodb-app">Node.js with MongoDB</a></li>
</ul>