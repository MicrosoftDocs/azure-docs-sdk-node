---
title: Azure Notification Hubs modules for Node.js
description: Reference for Azure Notification Hubs modules for Node.js
author: rloutlaw
ms.author: ROutlaw
manager: angrobe
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Notification Hubs
---

# Azure Notification Hubs modules for Node.js

Azure Notification Hubs provide an easy-to-use, multi-platform, scaled-out push engine. With a single cross-platform API call, you can easily send targeted and personalized push notifications to any mobile platform from any cloud or on-premises backend.

Notification Hubs works great for both enterprise and consumer scenarios. Here are a few examples customers use Notification Hubs for:
- Send breaking news notifications to millions with low latency.
- Send location-based coupons to interested user segments.
- Send event-related notifications to users or groups for media/sports/finance/gaming applications.
- Push promotional contents to apps to engage and market to customers.
- Notify users of enterprise events like new messages and work items.
- Send codes for multi-factor authentication.

## Management Package

### Install the npm module

Install the Azure Notification Hubs module 

```bash
npm install azure-arm-notificationhubs
```

### Example

This example lists all notification hubs.

 ```javascript
const msRestAzure = require('ms-rest-azure');
const notificationHubsManagementClient = require('azure-arm-notificationhubs');

const subscriptionId = 'your-subscription-id';
const notificationHubNamespace = 'your-hub-namespace';
const resourceGroup = 'your-resource-group';
let notificationHubsClient;

msRestAzure.interactiveLogin().then(credentials => {
  notificationHubsClient = new notificationHubsManagementClient(credentials, subscriptionId);
  notificationHubsClient.notificationHubs
    .list(resourceGroup, notificationHubNamespace)
    .then(notificationHubs => console.log('Retrieved notification hubs: ', notificationHubs));
});
```

## Samples

* [App Service Mobile completed quickstart for Node.js backend](https://azure.microsoft.com/resources/samples/app-service-mobile-nodejs-backend-quickstart/)
* [Tweet vibration anomalies detected by Azure IoT services on data from an Intel Edison running Node.js](https://azure.microsoft.com/resources/samples/iot-hub-nodejs-intel-edison-vibration-anomaly-detection/)

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
