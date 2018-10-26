---
title: Azure DNS modules for Node.js
description: Reference for Azure DNS modules for Node.js
author: KumudD
ms.author: kumud
manager: jeconnoc
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: DNS
---

# Azure DNS modules for Node.js

Use Azure DNS to host your Domain Name System (DNS) domains in Azure. Manage your DNS records using the same credentials and billing and support contract as your other Azure services. Seamlessly integrate Azure-based services with corresponding DNS updates and streamline your end-to-end deployment process.

## Management package

### Install the npm module

Install the Azure DNS npm module

```bash
npm install azure-arm-dns
```

### Example

This example lists the DNS Management zones.

```javascript
const msRestAzure = require('ms-rest-azure');
const DNSManagement = require('azure-arm-dns');

const subscriptionId = 'your-subscription-id';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new DNSManagement(credentials, subscriptionId);
    return client.zones.list();
  })
  .then(zones => console.dir(zones, { depth: null, colors: true }))
  .catch(err => console.log(err));
```

## Samples

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
