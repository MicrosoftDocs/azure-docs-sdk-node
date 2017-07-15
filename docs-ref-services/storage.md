---
title: Azure Storage packages for Node.js
description: Connect and manage Azure Storage from your Node.js apps.
keywords: Azure, Node, SDK, API, Storage, nodejs, javascript
author: tomarcher
ms.author: tarcher
manager: douge
ms.date: 06/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: storage
---

# Azure Storage packages for Node.js

## Overview

Use the Azure Storage client module to:

- Read and write objects and files from [Azure Blob storage](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-blob-storage)
- Send and receive messages between cloud-connected applications with [Azure Queue storage](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-queues)
- Read and write large structured data with [Azure Table storage](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-table-storage)

Create, update, and manage Azure Storage accounts and query and regenerate access keys from your Node.js apps with the management modules.

## Client Package

### Install packages with npm

```bash
npm install azure-storage
```

### Example

Create a storage container and upload a local file *data.txt* to it.

```javascript
const azure = require('azure-storage');
const blobService = azure.createBlobService(storageConnectionString);

const container = 'taskcontainer';
const task = 'taskblob';
const filename = 'data.txt';

blobService.createContainerIfNotExists(container, error => {
  if (error) return console.log(error);
  blobService.createBlockBlobFromLocalFile(
    container,
    task,
    filename,
    (error, result) => {
      if (error) return console.log(error);
      console.dir(result, { depth: null, colors: true });
    }
  );
});
```

## Management Package

### Install packages with npm

```bash
npm install azure-arm-storage
```

### Example

Authenticate, create client and list storage accounts.

```javascript
const msRestAzure = require('ms-rest-azure');
const storageManagementClient = require('azure-arm-storage');

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new storageManagementClient(
      credentials,
      'your-subscription-id'
    );
    return client.storageAccounts.list();
  })
  .then(accounts => console.dir(accounts, { depth: null, colors: true }))
  .catch(err => console.log(err));
```

## Samples

[!INCLUDE [node-storage-samples](../docs-ref-conceptual/includes/storage-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
