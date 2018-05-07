---
title: Azure Event Grid libraries for Node.js
description: Reference for Azure Event Grid libraries for Node.js
author: rloutlaw 
ms.author: routlaw    
manager: angerobe
ms.date: 05/03/2018
ms.topic: reference
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: event-grid
ms.custom: devcenter
---

# Azure Event Grid libraries for Node.js

Build event-driven applications that listen and react to events from Azure services and custom sources using simple HTTP-based event handling with Azure Event Grid.

[Learn more](/azure/event-grid/overview) about Azure Event Grid and get started with the [Azure Blob storage event tutorial](/azure/storage/blobs/storage-blob-event-quickstart). 

## Publish SDK

Create events, authenticate, and post to topics using the Azure Event Grid publish SDK.

### Installation

Add the module to your project with npm:

```bash
npm install azure-eventgrid
```

### Example code

The following code segment publishes a mock event to a Event Grid topic. You can retrieve the endpoint and topic access keys from the Azure Portal or through the Azure CLI:

```azurecli-interactive
endpoint=$(az eventgrid topic show --name <topic_name> -g gridResourceGroup --query "endpoint" --output tsv)
key=$(az eventgrid topic key list --name <topic_name> -g gridResourceGroup --query "key1" --output tsv)
```

```javascript
var EventGridClient = require("azure-eventgrid");
var msRestAzure = require('ms-rest-azure');
var uuid = require('uuid').v4;

let topicCreds = new msRestAzure.TopicCredentials('your-topic-key');
let EGClient = new EventGridClient(topicCreds, 'your-subscription-id');
let topicHostName = 'your-topic-endpoint';
let events = [
   {
   id: uuid(),
   subject: 'TestSubject',
   dataVersion: '1.0',
   eventType: 'Microsoft.MockPublisher.TestEvent',
   data: {
        field1: 'value1',
        filed2: 'value2'
        }
    }
];
return EGClient.publishEvents(topicHostName, events).then((result) => {
   return Promise.resolve(console.log('Published events successfully.'));
 }).catch((err) => {
  console.log('An error ocurred');
  console.dir(err, {depth: null, colors: true});
});
```

This sample shows how to handle an event from Azure Storage:

```javascript
var http = require('http');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function begun');
    var validationEventType = "Microsoft.EventGrid.SubscriptionValidationEvent";
    var storageBlobCreatedEvent = "Microsoft.Storage.BlobCreated";

    for (var events in req.body) {
        var body = req.body[events];
        // Deserialize the event data into the appropriate type based on event type  
        if (body.data && body.eventType == validationEventType) {
            context.log("Got SubscriptionValidation event data, validation code: " + body.data.validationCode + " topic: " + body.topic);

            // Do any additional validation (as required) and then return back the below response
            var code = body.data.validationCode;
            context.res = { status: 200, body: { "ValidationResponse": code } };
        }

        else if (body.data && body.eventType == storageBlobCreatedEvent) {
            var blobCreatedEventData = body.data;
            context.log("Relaying received blob created event payload:" + JSON.stringify(blobCreatedEventData));
        }
    }
    context.done();
};
```

> [!div class="nextstepaction"]
> [Explore the client APIs](/javascript/api/overview/azure/eventgrid/client)

## Management SDK

Create, update, or delete Event Grid instances, topics, and subscriptions with the management SDK.

### Installation

```
npm install azure-arm-eventgrid
```

### Example code

The following code creates an Event Grid topic `topic1` and returns the access keys associated with the newly created topic.

```javascript
var msRestAzure = require('ms-rest-azure');
var EventGridManagementClient = require("azure-arm-eventgrid");

msRestAzure.interactiveLogin(function(err, credentials) {
    // Created the management client
    let EGMClient = new EventGridManagementClient(credentials, 'your-subscription-id');
    let topicResponse;
    // created an enventgrid topic
    return EGMClient.topics.createOrUpdate('resourceGroup', 'topic1', { location: 'westus' }).then((topicResponse) => {
        return Promise.resolve(console.log('Created topic ', topicResponse));
    }).then(() => {
        // listed the access keys
        return EGMClient.topics.listSharedAccessKeys('resourceGroup', 'topic1')}
)};
```

> [!div class="nextstepaction"]
> [Explore the management APIs](/javascript/api/overview/azure/eventgrid/management)

## Learn more

- [Receive events using the Event Grid SDK](/azure/event-grid/receive-events)