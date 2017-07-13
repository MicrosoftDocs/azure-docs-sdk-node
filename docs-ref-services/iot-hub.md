---
title: Azure IoT Hub modules for Node.js
description: Reference for Azure IoT Hub modules for Node.js
keywords: Azure,SDK,API,IoT Hub, Node.js
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 07/07/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: IoT Hub
---

# Azure IoT Hub Packages for Node.js

## Overview
Azure IoT Hub is a fully managed service that enables reliable and secure bidirectional communications between millions of IoT devices and a solution back end. Azure IoT Hub:
- Provides multiple device-to-cloud and cloud-to-device communication options, including one-way messaging, file transfer, and request-reply methods.
- Provides built-in declarative message routing to other Azure services.
- Provides a queryable store for device metadata and synchronized state information.
- Enables secure communications and access control using per-device security keys or X.509 certificates.
- Provides extensive monitoring for device connectivity and device identity management events.
- Includes device libraries for the most popular languages and platforms.

Use npm to install the Azure IoT Hub modules for Node.js

## Management Package

### Install the npm packages
```bash
npm install azure-arm-iothub
```

### Example

```javascript
const msRestAzure = require('ms-rest-azure');
const IoTHubClient = require('azure-arm-iothub');

const subscriptionId = 'your-subscription-id';
const resourceGroup = 'testrg001';
const hubName = 'testhub';
const location = 'East US';

// Describe the IoT hub you want to create
const hubDescription = {
  name: hubName,
  location: location,
  subscriptionid: subscriptionId,
  resourcegroup: resourceGroup,
  sku: { name: 'S1', capacity: 2 },
  properties: {
    enableFileUploadNotifications: false,
    ipFilterRules: [{ filterName: 'ipfilterrule', action: 'accept', ipMask: '0.0.0.0/0' }],
    operationsMonitoringProperties: {
      events: {
        C2DCommands: 'Error',
        DeviceTelemetry: 'Error',
        DeviceIdentityOperations: 'Error',
        Connections: 'Error, Information'
      }
    },
    features: 'None'
  }
};

// Interactive Login
msRestAzure.interactiveLogin((err, credentials) => {
  const client = new IoTHubClient(credentials, subscriptionId);

  client.iotHubResource
    .createOrUpdate(resourceGroup, hubName, hubDescription)
    .then(hubDescriptionResult => console.log(hubDescriptionResult))
    .catch(err => console.error(err));
});
```

Get the existing hub, by name

```javascript
const subscriptionId = 'your-subscription-id';
const resourceGroup = 'testrg001';
const hubName = 'testhub';

// Interactive Login
msRestAzure.interactiveLogin((err, credentials) => {
  const client = new IoTHubClient(credentials, subscriptionId);
  
  client.iotHubResource
    .get(resourceGroup, hubName)
    .then(hubDescriptionResult => console.log(hubDescriptionResult))
    .catch(err => console.error(err));
});
```

###Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
