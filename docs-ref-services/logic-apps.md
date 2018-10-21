---
title: Azure Logic Apps modules for Node.js
description: Reference for Azure Logic Apps modules for Node.js
author: ecfan
ms.author: estfan
manager: cfowler
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: Logic Apps
---

# Azure Logic Apps modules for Node.js

Logic Apps provide a way to simplify and implement scalable integrations and workflows in the cloud. It provides a visual designer to model and automate your process as a series of steps known as a workflow. There are many connectors across the cloud and on-premises to quickly integrate across services and protocols. A logic app begins with a trigger (like 'When an account is added to Dynamics CRM') and after firing can begin many combinations of actions, conversions, and condition logic.

The advantages of using Logic Apps include the following:
- Saving time by designing complex processes using easy to understand design tools
- Implementing patterns and workflows seamlessly, that would otherwise be difficult to implement in code
- Getting started quickly from templates
- Customizing your logic app with your own custom APIs, code, and actions
- Connect and synchronise disparate systems across on-premises and the cloud
- Build off of BizTalk server, API Management, Azure Functions, and Azure Service Bus with first-class integration support

Logic Apps is a fully managed iPaaS (integration Platform as a Service) allowing developers not to have to worry about building hosting, scalability, availability and management. Logic Apps will scale up automatically to meet demand.

## Management package

### Install the npm module

Install the Azure logic module for Node.js

```bash
npm install azure-arm-logic
```

### Example

```javascript
const msRestAzure = require('ms-rest-azure');
const LogicManagement = require('azure-arm-logic');

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const subscriptionId = 'subscription-id';
    const client = new LogicManagement(credentials, subscriptionId);
    return client.workflows.listBySubscription();
  })
  .then(workflows => console.log(workflows));
```

### Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
