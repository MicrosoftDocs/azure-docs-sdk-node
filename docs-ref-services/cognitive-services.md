---
title: Azure Cognitive Services modules for Node.js
description: Reference for Azure Cognitive Services modules for Node.js
keywords: Azure,SDK,API,Cognitive Services, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/06/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Cognitive Services
---

# Azure Cognitive Services packages for Node.js

## Overview
Azure Cognitive Services is a set of APIs, SDKs, and services available to developers to make their applications more intelligent, engaging and discoverable. Microsoft Cognitive Services expands on Microsoft’s evolving portfolio of machine learning APIs and enables developers to easily add intelligent features – such as emotion and video detection; facial, speech and vision recognition; and speech and language understanding – into their applications. Our vision is for more personal computing experiences and enhanced productivity aided by systems that increasingly can see, hear, speak, understand and even begin to reason.

## Management
### Install npm module
```bash
npm install azure-arm-cognitiveservices
```

### Example
```javascript
const msRestAzure = require('ms-rest-azure');
const cognitiveServicesManagementClient = require('azure-arm-cognitiveservices');

const subscriptionId = 'your-subscription-id';
let cognitiveServicesClient;

msRestAzure.interactiveLogin().then(credentials => {
  cognitiveServicesClient = new cognitiveServicesManagementClient(credentials, subscriptionId);
  cognitiveServicesClient.cognitiveServicesAccounts
    .list()
    .then(cognitiveServicesAccounts =>
      console.log('Retrieved cognitive services accounts: ', cognitiveServicesAccounts)
    );
});
```

##Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
