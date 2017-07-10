---
title: Azure Notification Hubs modules for Node.js
description: Reference for Azure Notification Hubs modules for Node.js
keywords: Azure,SDK,API,Notification Hubs, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/07/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Notification Hubs
---

# Azure Notification Hubs modules for Node.js

## Overview
Azure Notification Hubs provide an easy-to-use, multi-platform, scaled-out push engine. With a single cross-platform API call, you can easily send targeted and personalized push notifications to any mobile platform from any cloud or on-premises backend.

Notification Hubs works great for both enterprise and consumer scenarios. Here are a few examples customers use Notification Hubs for:
- Send breaking news notifications to millions with low latency.
- Send location-based coupons to interested user segments.
- Send event-related notifications to users or groups for media/sports/finance/gaming applications.
- Push promotional contents to apps to engage and market to customers.
- Notify users of enterprise events like new messages and work items.
- Send codes for multi-factor authentication.

## Install the modules with npm

Use npm to install the Azure Notification Hubs modules for Node.js

### Management
```bash
npm install azure-arm-notificationhubs
```

### Example
 ```javascript
 const msRestAzure = require('ms-rest-azure');
 const notificationHubsManagementClient = require('azure-arm-notificationhubs');
 let notificationHubsClient;
  
 msRestAzure.interactiveLogin().then(credentials => {
   notificationHubsClient = new notificationHubsManagementClient(credentials, 'your-subscription-id');
   notificationHubsClient.notificationHubs.list('test-resource-group', 'test-namespace')
     .then(notificationHubs => console.log('Retrieved notification hubs: ', notificationHubs));
 });
 ```

### Samples
| | |
 |---|---|
 | **Mobile Apps** ||
  | [App Service Mobile completed quickstart for Node.js backend](https://azure.microsoft.com/en-us/resources/samples/app-service-mobile-nodejs-backend-quickstart/) | Node.js backend quickstart project. |
  | **IoT** ||
  | [Tweet vibration anomalies detected by Azure IoT services on data from an Intel Edison running Node.js](https://azure.microsoft.com/en-us/resources/samples/iot-hub-nodejs-intel-edison-vibration-anomaly-detection/) | This sample demonstrates how to connect an Intel Edison app running Node.js with the Azure IoT Hub. |

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
