---
title: Azure Operational Insights Modules for Node.js
description: Reference for Azure Operational Insights Modules for Node.js
author: MGoedtel
ms.author: magoedte
manager: carmonm
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Operational Insights
---

# Azure Operational Insights Modules for Node.js

Use npm to install the Azure Operational Insights module for Node.js

```bash
npm install azure-arm-operationalinsights
```

### Example 

This example creates a client, connects to Operational Insights and retreives a list of workspaces by a specified resource group.

```javascript
const msRestAzure = require('ms-rest-azure');
const OperationalInsightsManagement = require('azure-arm-operationalinsights');

const subscriptionId = 'your-subscription-id';

msRestAzure.interactiveLogin().then(credentials => {
    const client = new OperationalInsightsManagement(
        credentials,
        subscriptionId
    );
    return client.workspaces.listByResourceGroup('resource-group-name');
})
.then(workspaces => {
    console.log(workspaces);
});
``` 

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
