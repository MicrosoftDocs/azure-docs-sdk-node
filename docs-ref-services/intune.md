---
title: Azure Intune modules for Node.js
description: Reference for Azure Intune modules for Node.js
keywords: Azure,SDK,API,Intune, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/07/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Intune
---

# Azure Intune modules for Node.js

## Overview
Azure Intune is a cloud-based enterprise mobility management (EMM) service that helps enable your workforce to be productive while keeping your corporate data protected. With Intune, you can:
- Manage the mobile devices your workforce uses to access company data.
- Manage the mobile apps your workforce uses.
- Protect your company information by helping to control the way your workforce accesses and shares it.
- Ensure devices and apps are compliant with company security requirements.

Intune integrates closely with Azure Active Directory (Azure AD) for identity and access control, and Azure Information Protection for data protection.

## Management Package

### Install npm modules

Use npm to install the Azure Intune modules for Node.js

```bash
npm install azure-arm-intune
```

### Example

Authenticate, create a client and retrieve a location by host name.

```javascript
const msRestAzure = require('ms-rest-azure');
const IntuneResourceManagementClient = require('azure-arm-intune');

msRestAzure.interactiveLogin().then(credentials => {
  const client = new IntuneResourceManagementClient(credentials);
  client.getLocationByHostName(null).then((error, result) => {
    console.log(result);
  });
});
```


### Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
