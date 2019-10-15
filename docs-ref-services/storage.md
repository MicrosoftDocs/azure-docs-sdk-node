---
title: Azure Storage modules for Node.js
description: Reference for Azure Storage modules for Node.js
author: craigshoemaker
ms.author: cshoe
manager: routlaw
ms.date: 07/18/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: storage
---

# Azure Storage modules for Node.js

Use the Azure Storage client module to:

- Read and write objects and files from [Azure Blob storage](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-blob-storage)
- Send and receive messages between cloud-connected applications with [Azure Queue storage](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-queues)
- Read and write large structured data with [Azure Table storage](https://docs.microsoft.com/azure/storage/storage-nodejs-how-to-use-table-storage)

Create, update, and manage Azure Storage accounts and query and regenerate access keys from your Node.js apps with the management modules.

## Client Package

### Install the npm module

Install the Azure storage client npm module

```bash
npm install azure-storage
```

### Example

This example creates a storage container and uploads a local file `data.txt` to it.

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

### Install the npm module 

Install the Azure storage management npm module

```bash
npm install azure-arm-storage
```

### Example

This example lists the storage accounts.

```javascript
const msRestAzure = require('ms-rest-azure');
const storageManagementClient = require('azure-arm-storage');

const subscriptionId = 'your-subscription-id';

msRestAzure
  .interactiveLogin()
  .then(credentials => {
    const client = new storageManagementClient(
      credentials,
      subscriptionId
    );
    return client.storageAccounts.list();
  })
  .then(accounts => console.dir(accounts, { depth: null, colors: true }))
  .catch(err => console.log(err));
```

## Samples

* [Getting Started with Azure Blob Service in Node.js](https://azure.microsoft.com/resources/samples/storage-blob-node-getting-started/)
* [Getting Started with Azure File Service in Node.js](https://azure.microsoft.com/resources/samples/storage-file-node-getting-started/)
* [Getting Started with Azure Queue Service in Node.js](https://azure.microsoft.com/resources/samples/storage-queue-node-getting-started/)
* [Getting Started with Azure Table Service in Node.js](https://azure.microsoft.com/resources/samples/storage-table-node-getting-started/)

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.
