---
title: 
keywords: Azure, javascript, SDK, API, @azure/notification-hubs, notificationhubs
ms.date: 10/14/2024
ms.topic: reference
ms.devlang: javascript
ms.service: notificationhubs
---
# Azure Notification Hubs SDK for JavaScript

Azure Notification Hubs provide a scaled-out push engine that enables you to send notifications to any platform (Apple, Amazon Kindle, Firebase, Baidu, Xiaomi, Web, Windows, etc.) from any back-end (cloud or on-premises). Notification Hubs works well for both enterprise and consumer scenarios. Here are a few example scenarios:

- Send breaking news notifications to millions with low latency.
- Send location-based coupons to interested user segments.
- Send event-related notifications to users or groups for media/sports/finance/gaming applications.
- Push promotional contents to applications to engage and market to customers.
- Notify users of enterprise events such as new messages and work items.
- Send codes for multi-factor authentication.

Key links:

- [Source code](https://github.com/Azure/azure-sdk-for-js/blob/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/)
- [Package (npm)](https://www.npmjs.com/package/@azure/notification-hubs)
- [Product documentation](/azure/notification-hubs/)
- [Samples](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev)

**NOTE**: If you are coming from using the `azure-sb` package, see the [migration guide to move from azure-sb to @azure/notification-hubs](https://github.com/Azure/azure-sdk-for-js/blob/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/migrationguide.md)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge, and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/@azure/notification-hubs_2.0.0/SUPPORT.md) for more details.

### Install the package

```bash
npm install @azure/notification-hubs
```

### Prerequisites

- An [Azure Subscription](https://azure.microsoft.com)
- An [App Notification Hubs](/azure/notification-hubs/) resource.

### Create an Azure Notification Hubs resource

An Azure Notification Hub can be created using the following methods:

1. [Azure Portal](/azure/notification-hubs/create-notification-hub-portal)
2. [Azure CLI](/azure/notification-hubs/create-notification-hub-azure-cli)
3. [Bicep](/azure/notification-hubs/create-notification-hub-bicep)
4. [ARM Template](/azure/notification-hubs/create-notification-hub-template)

Once created, the Notification Hub can be configured using the [Azure Portal or Azure CLI](/azure/notification-hubs/configure-notification-hub-portal-pns-settings?tabs=azure-portal).

### Importing the Client

This SDK for JavaScript offers two ways of interacting with Azure Notification Hubs, either through the class-based approach, or with a modular design approach.  The class-based approach is consistent across all packages to create a client and then interact with the methods on the client.

```ts snippet:importing_classical
import { NotificationHubsClient, createAppleInstallation } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const installation = createAppleInstallation({
  installationId: "<installation-id>",
  pushChannel: "<push-channel>",
  tags: ["likes_javascript"],
});
const result = await client.createOrUpdateInstallation(installation);
```

The modular approach allows the developer to pick and choose which functions to import as each method is exposed individually.  This approach uses subpath-exports with ES-Modules to expose the methods via direct imports.  With the individual exports, this creates a better tree-shaking experience and smaller bundle sizes that the developer can take advantage of.

Note that creating a client is exposed through the `"@azure/notification-hubs/api"` subpath and all client methods are exposed through the `"@azure/notification-hubs/api"` subpath.  Each function exported takes the `client` as the first parameter and the rest of the parameters remain unchanged.

The following subpaths are exposed:

- `@azure/notification-hubs/api` - The main entry point for the client via `createClientContext` and client methods such as `getInstallation` or `sendNotification`
- `@azure/notification-hubs/models` - The Notification Hubs models and factory methods.

The above code snippet then becomes the following:

```ts snippet:importing_modular
import { createClientContext, createOrUpdateInstallation } from "@azure/notification-hubs/api";
import { createAppleInstallation } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const installation = createAppleInstallation({
  installationId: "<installation-id>",
  pushChannel: "<push-channel>",
  tags: ["likes_javascript"],
});
const result = await createOrUpdateInstallation(context, installation);
```

### Authenticate the client

Interaction with an Azure Notification Hub starts with the `NotificationHubsClient` which supports [Shared Access Signature connection strings](/azure/notification-hubs/notification-hubs-push-notification-security).  This includes the following permission levels: **Listen**, **Manage**, **Send**.

Listen allows for a client to register itself via the Registration and Installations API. Send allows for the client to send notifications to devices using the send APIs. Finally, Manage allows the user to do Registration and Installation management, such as queries.

A new `NotificationHubsClient` client can be created using the constructor with the connection string and Notification Hub name.

```ts snippet:authenticating_classical
import { NotificationHubsClient } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
```

Using the modular approach, the `createClientContext` can be imported via the `"@azure/notification-hubs/api"` subpath.

```ts snippet:authenticating_modular
import { createClientContext } from "@azure/notification-hubs/api";

const context = createClientContext("<connection string>", "<hub name>");
```

## Key concepts

Once the `NotificationHubClient` has been initialized, the following concepts can be explored.

- Device Management via Installations and RegistrationDescriptions
- Send Notifications to Devices

### Device Management

Device management is a core concept to Notification Hubs to be able to store the unique identifier from the native Platform Notification Service (PNS) such as APNs or Firebase, and associated metadata such as tags used for sending push notifications to audiences.  This is done with two APIs, the Installation API which is the newer and preferred mechanism, and Registrations.

#### Installations API

Installations are a newer and native JSON approach to device management that contains additional properties such as an installation ID and user ID which can be used for sending to audiences.  The installations API has a few advantages over the existing Registration APIs in the following ways:

- Fully idempotent API so calling create on the installation, so an operation can be retried without worries about duplications.
- Support for `userId` and `installationId` properties which can be then used in tag expressions such as `$InstallationId:{myInstallId}` and `$UserId:{bob@contoso.com}`.
- Templates are now part of the installation instead of a separate registration and can be reference by name as a tag for sending.
- Partial updates are supported through the [JSON Patch Standard](https://tools.ietf.org/html/rfc6902), which allows to add tags and change other data without having to first query the installation.

Installations can be created through the `createOrUpdateInstallation` method such as the following:

```ts snippet:createOrUpdateInstallation_classical
import { NotificationHubsClient, createAppleInstallation } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
// Create an installation for APNs
const installation = createAppleInstallation({
  installationId: "0d8ab095-c449-493f-9195-17e4917806c4", // Must be unique
  pushChannel: "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0", // PNS specific handle
  tags: ["likes_hockey", "likes_football"],
});
const response = await client.createOrUpdateInstallation(installation);
```

Using the modular approach, the code would be as follows:

```ts snippet:createOrUpdateInstallation_modular
import { createClientContext, createOrUpdateInstallation } from "@azure/notification-hubs/api";
import { createAppleInstallation } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
// Create an installation for APNs
const installation = createAppleInstallation({
  installationId: "0d8ab095-c449-493f-9195-17e4917806c4", // Must be unique
  pushChannel: "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0", // PNS specific handle
  tags: ["likes_hockey", "likes_football"],
});
const response = await createOrUpdateInstallation(context, installation);
```

An update to an installation can be made through the JSON Patch schema such as adding a tag and a user ID using the `updateInstallation` method.

```ts snippet:updateInstallation_classical
import { NotificationHubsClient, JsonPatch } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const installationId = "<unique installation ID>";
const updates: JsonPatch[] = [
  { op: "add", path: "/tags", value: "likes_baseball" },
  { op: "add", path: "/userId", value: "bob@contoso.com" },
];
const installation = await client.updateInstallation(installationId, updates);
```

Using the modular approach, the code would be as follows:

```ts snippet:updateInstallation_modular
import { createClientContext, updateInstallation } from "@azure/notification-hubs/api";
import { JsonPatch } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const installationId = "<unique installation ID>";
const updates: JsonPatch[] = [
  { op: "add", path: "/tags", value: "likes_baseball" },
  { op: "add", path: "/userId", value: "bob@contoso.com" },
];
const installation = await updateInstallation(context, installationId, updates);
```

To retrieve an existing installation, use the `getInstallation` method with your existing unique installation ID.

```ts snippet:getInstallation_classical
import { NotificationHubsClient } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const installationId = "<unique installation ID>";
const installation = client.getInstallation(installationId);
```

Using the modular approach, the code would be as follows:

```ts snippet:getInstallation_modular
import { createClientContext, getInstallation } from "@azure/notification-hubs/api";

const context = createClientContext("<connection string>", "<hub name>");
const installationId = "<unique installation ID>";
const installation = getInstallation(context, installationId);
```

#### Registrations API

A registration is associated with a PNS just as the installation above, with the unique device identifier from the PNS, and associated tags.  Templates registrations are a way of creating pre-defined body templates which can then be customized at send time with properties to fill in for the message.  For more information about templates, see [Templates documentation](/azure/notification-hubs/notification-hubs-templates-cross-platform-push-messages).

An installation may be created in one of two ways, first by getting a registration ID from the server using `getInstallationId` and then `createOrUpdateRegistration` or via the `createRegistration` method.

```ts snippet:createRegistration_classical
import {
  NotificationHubsClient,
  createAppleRegistrationDescription,
} from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const registration = createAppleRegistrationDescription({
  deviceToken: "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0",
  tags: ["likes_hockey", "likes_football"],
});
const updatedRegistration = await client.createRegistration(registration);
```

Using the modular approach, the code would be as follows:

```ts snippet:createRegistration_modular
import { createClientContext, createRegistration } from "@azure/notification-hubs/api";
import { createAppleRegistrationDescription } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const registration = createAppleRegistrationDescription({
  deviceToken: "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0",
  tags: ["likes_hockey", "likes_football"],
});
const updatedRegistration = await createRegistration(context, registration);
```

Updates can be done via the `updateRegistration` method but unlike installations, does not support incremental updates.  Querying for an existing registration can be done with the `getRegistration` method.

```ts snippet:updateRegistration_classical
import { NotificationHubsClient } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const registrationId = "<unique Registration ID>";
const registration = await client.getRegistration(registrationId);
if (registration.tags) {
  registration.tags.push("likes_sports");
} else {
  registration.tags = ["likes_sports"];
}
const updatedRegistration = await client.updateRegistration(registration);
```

Using the modular approach, the code would be as follows:

```ts snippet:updateRegistration_modular
import {
  createClientContext,
  getRegistration,
  updateRegistration,
} from "@azure/notification-hubs/api";

const context = createClientContext("<connection string>", "<hub name>");
const registrationId = "<unique Registration ID>";
const registration = await getRegistration(context, registrationId);
if (registration.tags) {
  registration.tags.push("likes_sports");
} else {
  registration.tags = ["likes_sports"];
}
const updatedRegistration = await updateRegistration(context, registration);
```

Registrations, unlike installations, can be queried to get all registrations, matching registrations to a condition, or by tags.  Registrations can be queried using the `listRegistrations`, `listRegistrationsByChannel` and `listRegistrationsByTag` method.  All methods support limiting via the `top` option and support asynchronous paging.

```ts snippet:listRegistrationsByTag_classical
import { NotificationHubsClient } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const registrations = client.listRegistrationsByTag("likes_hockey");
let page = 0;
for await (const pages of registrations.byPage()) {
  console.log(`Page number ${page++}`);
  for (const item of pages) {
    console.log(JSON.stringify(item, null, 2));
  }
}
```

Using the modular approach, the code would be as follows:

```ts snippet:listRegistrationsByTag_modular
import { createClientContext, listRegistrationsByTag } from "@azure/notification-hubs/api";

const context = createClientContext("<connection string>", "<hub name>");
const registrations = await listRegistrationsByTag(context, "likes_hockey");
let page = 0;
for await (const pages of registrations.byPage()) {
  console.log(`Page number ${page++}`);
  for (const item of pages) {
    console.log(JSON.stringify(item, null, 2));
  }
}
```

### Send Operations

Notification Hubs supports sending notifications to devices either directly using the unique PNS provided identifier, using tags for audience send, or a general broadcast to all devices.  Using the Standard SKU and above, [scheduled send](/azure/notification-hubs/notification-hubs-send-push-notifications-scheduled) allows the user to schedule notifications up to seven days in advance.  All send operations return a Tracking ID and Correlation ID which can be used for Notification Hubs support cases.  With the Standard SKU and above, a Notification ID is also returned which can be used to get notification telemetry via the `getNotificationOutcomeDetails` method.

For debugging purposes, the `enableTestSend` options can be set to `true` which gets immediate feedback from the PNS on the `sendNotification` method, however, is not supported in production scenarios.  This is not supported on the scheduled send methods.

Raw JSON or XML strings can be sent to the send or scheduled send methods, or the notification builders can be used which helps construct messages per PNS such as APNs, Firebase, Baidu, ADM and WNS.  These builders will build the native message format so there is no guessing about which fields are available for each PNS.

```ts snippet:createAppleNotificationBody
import { createAppleNotificationBody, createAppleNotification } from "@azure/notification-hubs";

const apnsBody = createAppleNotificationBody({
  alert: {
    title: "Notification Title",
    subtitle: "Notification Subtitle",
    body: "Notification body goes here",
  },
  sound: "default",
  interruptionLevel: "time-sensitive",
});
// Send the message using the modular approach
const notification = createAppleNotification({
  body: apnsBody,
});
```

#### Broadcast Send

Notification Hubs can be used to send notifications to all registered devices per platform using broadcast send through the `sendBroadcastNotification` method.

```ts snippet:sendBroadcastNotification_classical
import { NotificationHubsClient, createAppleNotification } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const message = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await client.sendBroadcastNotification(message);
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Only available in Standard SKU and above
if (result.notificationId) {
  console.log(`Notification ID: ${result.notificationId}`);
}
```

Using the modular approach, the code would be as follows:

```ts snippet:sendBroadcastNotification_modular
import { createClientContext, sendBroadcastNotification } from "@azure/notification-hubs/api";
import { createAppleNotification } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const message = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await sendBroadcastNotification(context, message);
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Only available in Standard SKU and above
if (result.notificationId) {
  console.log(`Notification ID: ${result.notificationId}`);
}
```

#### Direct Send

To send directly a device, the user can send using the platform provided unique identifier such as APNs device token by calling the `sendNotification` method with a `deviceHandle` parameter.

```ts snippet:directSend_classical
import { NotificationHubsClient, createAppleNotification } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const deviceHandle = "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const message = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await client.sendNotification(message, { deviceHandle });
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Only available in Standard SKU and above
if (result.notificationId) {
  console.log(`Notification ID: ${result.notificationId}`);
}
```

Using the modular approach, the code would be as follows:

```ts snippet:directSend_modular
import { createClientContext, sendNotification } from "@azure/notification-hubs/api";
import { createAppleNotification } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const deviceHandle = "00fc13adff785122b4ad28809a3420982341241421348097878e577c991de8f0";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const message = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await sendNotification(context, message, { deviceHandle });
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Only available in Standard SKU and above
if (result.notificationId) {
  console.log(`Notification ID: ${result.notificationId}`);
}
```

#### Audience Send

In addition to targeting a single device, a user can target multiple devices using tags.  These tags can be supplied as a list of tags, which then creates a tag expression to match registered devices, or via a tag expression which can then use Boolean logic to target the right audience.  For more information about tags and tags expressions, see [Routing and Tag Expressions](/azure/notification-hubs/notification-hubs-tags-segment-push-message).

If you wish to create a tag expression from an array of tags, there is a Tag Expression Builder available with the `createTagExpression` method which is exposed at the top level import or `@azure/notification-hubs/models/tagExpressionBuilder` modular import which creates an "or tag expression" from the tags.

```ts snippet:createTagExpression
import { createTagExpression } from "@azure/notification-hubs";

const tags = ["likes_football", "likes_hockey"];
const tagExpression = createTagExpression(tags);
console.log(tagExpression);
```

Tag expression messages can be sent using the following code:

```ts snippet:sendNotification_classical
import { NotificationHubsClient, createAppleNotification } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const tagExpression = "likes_hockey && likes_football";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const notification = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await client.sendNotification(notification, { tagExpression });
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Only available in Standard SKU and above
if (result.notificationId) {
  console.log(`Notification ID: ${result.notificationId}`);
}
```

Using the modular approach, the code would be as follows:

```ts snippet:sendNotification_modular
import { createClientContext, sendNotification } from "@azure/notification-hubs/api";
import { createAppleNotification } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const tagExpression = "likes_hockey && likes_football";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const notification = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await sendNotification(context, notification, { tagExpression });
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Only available in Standard SKU and above
if (result.notificationId) {
  console.log(`Notification ID: ${result.notificationId}`);
}
```

#### Scheduled Send

Push notifications can be scheduled up to seven days in advance with Standard SKU namespaces and above using the `scheduleNotification` method to send to devices with tags or a general broadcast with `scheduleBroadcastNotification`.  This returns a notification ID which can be then used to cancel if necessary via the `cancelScheduledNotification` method.

```ts snippet:scheduledSendNotification_classical
import { NotificationHubsClient, createAppleNotification } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const tagExpression = "likes_hockey && likes_football";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
// Schedule 8 hours from now
const scheduledTime = new Date(Date.now() + 8 * 60 * 60 * 1000);
const message = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await client.scheduleNotification(scheduledTime, message, { tagExpression });
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Can be used to cancel via the cancelScheduledSend method
console.log(`Notification ID: ${result.notificationId}`);
```

Using the modular approach, the code would be as follows:

```ts snippet:scheduledSendNotification_modular
import { createClientContext, scheduleNotification } from "@azure/notification-hubs/api";
import { createAppleNotification } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const tagExpression = "likes_hockey && likes_football";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
// Schedule 8 hours from now
const scheduledTime = new Date(Date.now() + 8 * 60 * 60 * 1000);
const message = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await scheduleNotification(context, scheduledTime, message, { tagExpression });
console.log(`Tracking ID: ${result.trackingId}`);
console.log(`Correlation ID: ${result.correlationId}`);
// Can be used to cancel via the cancelScheduledSend method
console.log(`Notification ID: ${result.notificationId}`);
```

## Troubleshooting

## React Native Support

React Native currently does not have support for [`URLSearchParams`] which is used by the Azure Notification Hubs SDK.  In order to use the SDK in React Native, you will need to install the [`url-search-params-polyfill`](https://www.npmjs.com/package/url-search-params-polyfill) package and import it before using the SDK.

We also need to provide polyfill for `TextEncoder` API and async iterator API. Please see our [React Native sample with Expo](https://github.com/Azure/azure-sdk-for-js/blob/@azure/notification-hubs_2.0.0/samples/frameworks/react-native/appconfigBasic/README.md#add-polyfills) for more details.

### Diagnose Dropped Notifications

Azure Notification Hubs has a complete guide to troubleshooting problems with dropped notifications in the [Diagnose dropped notifications in Azure Notification Hubs Guide](/azure/notification-hubs/notification-hubs-push-notification-fixer).

[Test send](/azure/notification-hubs/notification-hubs-push-notification-fixer#enabletestsend-property) is supported supported in the `sendNotification` and `sendBroadcastNotification` methods with the `enableTestSend` option:

```ts snippet:testSend_classical
import { NotificationHubsClient, createAppleNotification } from "@azure/notification-hubs";

const client = new NotificationHubsClient("<connection string>", "<hub name>");
const tagExpression = "likes_hockey && likes_football";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const notification = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await client.sendNotification(notification, {
  tagExpression,
  enableTestSend: true,
});
```

```ts snippet:testSend_modular
import { createClientContext, sendNotification } from "@azure/notification-hubs/api";
import { createAppleNotification } from "@azure/notification-hubs";

const context = createClientContext("<connection string>", "<hub name>");
const tagExpression = "likes_hockey && likes_football";
const messageBody = `{ "aps" : { "alert" : "Hello" } }`;
const notification = createAppleNotification({
  body: messageBody,
  headers: {
    "apns-priority": "10",
    "apns-push-type": "alert",
  },
});
const result = await sendNotification(context, notification, {
  tagExpression,
  enableTestSend: true,
});
```

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts snippet:logging
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/core/logger).

## Next steps

The following samples show you the various ways you can interact with Azure Notification Hubs:

**Device Management:**

- Installations API
  - [Create Or Update Installation](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/createInstallation.ts)
  - [Update Installation](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/updateInstallation.ts)
- Registration API
  - [Create Registration](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/createRegistration.ts)s
  - [Create Or Update Registration](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/createOrUpdateRegistration.ts)
  - [Update Registration](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/updateRegistration.ts)
  - [List Registrations](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/listRegistrations.ts)
  - [List Registration By Tag](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/listRegistrationsByTag.ts)

**Send Operations:**

- [Broadcast Send](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/sendBroadcastNotification.ts)
- [Direct Send](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/sendDirectNotification.ts)
- [Audience Send With Tags List](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/sendTagsList.ts)
- [Audience Send With Tag Expression](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/sendTagExpression.ts)
- [Scheduled Broadcast Send](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/scheduledSendBroadcastNotification.ts)
- [Scheduled Send](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/scheduledSendNotification.ts)

**Management Operations:**

- [Export Registrations](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/exportRegistrationsJob.ts)
- [Import Registrations](https://github.com/Azure/azure-sdk-for-js/tree/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/samples-dev/importRegistrationsJob.ts)

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/notification-hubs_2.0.0/CONTRIBUTING.md) to learn more about how to build and test the code.

This module's tests are a mixture of live and unit tests, which require you to have an Azure Notification Hubs instance. To execute the tests you'll need to run:

1. `rush update`
2. `rush build -t @azure/notification-hubs`
3. Create a .env file with these contents in the `sdk\notificationhubs\notification-hubs` folder:
   `NOTIFICATIONHUBS_CONNECTION_STRING=connection string for your Notification Hubs instance`
   `NOTIFICATION_HUB_NAME=Notification Hub name`
4. `cd sdk\notificationhubs\notification-hubs`
5. `rushx test`.

View our [tests](https://github.com/Azure/azure-sdk-for-js/blob/@azure/notification-hubs_2.0.0/sdk/notificationhubs/notification-hubs/test)
folder for more details.

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)
- [Azure Notification Hubs](/azure/notification-hubs/notification-hubs-push-notification-overview)



