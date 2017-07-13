---
title: Azure Container Registry modules for Node.js
description: Reference for Azure Container Registry modules for Node.js
keywords: Azure,SDK,API,Container Registry, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/06/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Container Registry
---

# Azure Container Registry modules for Node.js

## Overview

Azure Container Registry is a managed Docker registry service based on the open-source Docker Registry 2.0. Create and maintain Azure container registries to store and manage your private Docker container images. Use container registries in Azure with your existing container development and deployment pipelines, and draw on the body of Docker community expertise.

## Install the modules with npm

Use npm to install the Azure Container Registry modules for Node.js

### Management
```bash
npm install azure-arm-containerregistry
```

##Example

Get a list of the available Docker containers:

```javascript
const msRestAzure = require('ms-rest-azure')
const ContainerRegistryManagement = require('azure-arm-containerregistry')

msRestAzure.interactiveLogin().then( (credentials) => {
    let manager = new ContainerRegistryManagement(credentials, 'your-subscription-id')
    return manager.registries.list()
}).then( (registries) => {
    console.log("List of registries:")
    console.dir(registries, {depth:null, colors:true})
}).catch( (error) => {
    console.log("An error occurred:")
    console.dir(error, {depth:null, colors:true})
})
```

##Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.