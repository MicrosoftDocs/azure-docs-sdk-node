---
title: 
keywords: Azure, javascript, SDK, API, @azure/app-configuration, appconfiguration
ms.date: 11/06/2024
ms.topic: reference
ms.devlang: javascript
ms.service: appconfiguration
---
# App Configuration client library for JavaScript

[Azure App Configuration](/azure/azure-app-configuration/overview) is a managed service that helps developers centralize their application and feature settings simply and securely.

Use the client library for App Configuration to:

- Create flexible key representations and mappings
- Tag keys with labels
- Replay settings from any point in time
- Manage snapshots of an app's configuration

Key links:

- [Source code](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/)
- [Package (NPM)](https://www.npmjs.com/package/@azure/app-configuration)
- [API reference documentation](/javascript/api/@azure/app-configuration)
- [Product documentation](/azure/azure-app-configuration/)
- [Samples](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples)

## Getting started

### Install the package

```bash
npm install @azure/app-configuration
```

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)
- Latest versions of Safari, Chrome, Edge, and Firefox.

See our [support policy](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/SUPPORT.md) for more details.

### Prerequisites

- An [Azure Subscription](https://azure.microsoft.com)
- An [App Configuration](/azure/azure-app-configuration/) resource

### Create an App Configuration resource

You can use the [Azure Portal](https://portal.azure.com) or the [Azure CLI](/cli/azure) to create an Azure App Configuration resource.

Example (Azure CLI):

```
az appconfig create --name <app-configuration-resource-name> --resource-group <resource-group-name> --location eastus
```

### Authenticate the client

AppConfigurationClient can authenticate using a [service principal](#authenticating-with-a-service-principal) or using a [connection string](#authenticating-with-a-connection-string).

#### Authenticating with a service principal

Authentication via service principal is done by:

- Creating a credential using the `@azure/identity` package.
- Setting appropriate RBAC rules on your AppConfiguration resource.
  More information on App Configuration roles can be found [here](/azure/azure-app-configuration/concept-enable-rbac#azure-built-in-roles-for-azure-app-configuration).

Using [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/sdk/identity/identity/README.md#defaultazurecredential)

```javascript
const azureIdentity = require("@azure/identity");
const appConfig = require("@azure/app-configuration");

const credential = new azureIdentity.DefaultAzureCredential();
const client = new appConfig.AppConfigurationClient(
  endpoint, // ex: <https://<your appconfig resource>.azconfig.io>
  credential
);
```

More information about `@azure/identity` can be found [here](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/sdk/identity/identity/README.md)

#### Sovereign Clouds

To authenticate with a resource in a [Sovereign Cloud](/azure/active-directory/develop/authentication-national-cloud), you will need to set the `authorityHost` in the credential options or via the `AZURE_AUTHORITY_HOST` environment variable.

```javascript
const { AppConfigurationClient } = require("@azure/app-configuration");
const { DefaultAzureCredential, AzureAuthorityHosts } = require("@azure/identity");

// Create an AppConfigurationClient that will authenticate through AAD in the China cloud
const client = new AppConfigurationClient(
  endpoint, // ex: <https://<your appconfig resource>.azconfig.azure.cn>
  new DefaultAzureCredential({ authorityHost: AzureAuthorityHosts.AzureChina })
);
```

More information about `@azure/identity` can be found [here](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/sdk/identity/identity/README.md)

#### Authenticating with a connection string

To get the Primary **connection string** for an App Configuration resource you can use this Azure CLI command:

```
az appconfig credential list -g <resource-group-name> -n <app-configuration-resource-name> --query "([?name=='Primary'].connectionString)[0]"
```

And in code you can now create your App Configuration client with the **connection string** you got from the Azure CLI:

```typescript
const client = new AppConfigurationClient("<connection string>");
```

## Key concepts

The [`AppConfigurationClient`](/javascript/api/@azure/app-configuration/appconfigurationclient) has some terminology changes from App Configuration in the portal.

- Key/Value pairs are represented as [`ConfigurationSetting`](/javascript/api/@azure/app-configuration/configurationsetting) objects
- Locking and unlocking a setting is represented in the `isReadOnly` field, which you can toggle using `setReadOnly`.
- Snapshots are represented as `ConfigurationSnapshot` objects.

The client follows a simple design methodology - [`ConfigurationSetting`](/javascript/api/@azure/app-configuration/configurationsetting) can be passed into any method that takes a [`ConfigurationSettingParam`](/javascript/api/@azure/app-configuration/configurationsettingparam) or [`ConfigurationSettingId`](/javascript/api/@azure/app-configuration/configurationsettingid).

This means this pattern works:

```typescript
const setting = await client.getConfigurationSetting({
  key: "hello"
});

setting.value = "new value!";
await client.setConfigurationSetting(setting);

// fields unrelated to just identifying the setting are simply
// ignored (for instance, the `value` field)
await client.setReadOnly(setting, true);

// delete just needs to identify the setting so other fields are
// just ignored
await client.deleteConfigurationSetting(setting);
```

or, for example, re-getting a setting:

```typescript
let setting = await client.getConfigurationSetting({
  key: "hello"
});

// re-get the setting
setting = await client.getConfigurationSetting(setting);
```

The `2022-11-01-preview` API version supports configuration snapshots: immutable, point-in-time copies of a configuration store. Snapshots can be created with filters that determine which key-value pairs are contained within the snapshot, creating an immutable, composed view of the configuration store. This feature enables applications to hold a consistent view of configuration, ensuring that there are no version mismatches to individual settings due to reading as updates were made. For example, this feature can be used to create "release configuration snapshots" within an App Configuration. See [the _create and get a snapshot_ section](#create-and-get-a-setting) in the example below. 

## Examples

### Create and get a setting

```javascript
const appConfig = require("@azure/app-configuration");

const client = new appConfig.AppConfigurationClient(
  "<App Configuration connection string goes here>"
);

async function run() {
  const newSetting = await client.setConfigurationSetting({
    key: "testkey",
    value: "testvalue",
    // Labels allow you to create variants of a key tailored
    // for specific use-cases like supporting multiple environments.
    // /azure/azure-app-configuration/concept-key-value#label-keys
    label: "optional-label"
  });

  const retrievedSetting = await client.getConfigurationSetting({
    key: "testkey",
    label: "optional-label"
  });

  console.log("Retrieved value:", retrievedSetting.value);
}

run().catch((err) => console.log("ERROR:", err));
```

### Create a snapshot

`beginCreateSnapshot` gives you the poller to poll for the snapshot creation. 

```javascript
const { AppConfigurationClient } = require("@azure/app-configuration");

const client = new AppConfigurationClient(
  "<App Configuration connection string goes here>"
);


async function run() {
  const key = "testkey";
  const value = "testvalue";
  const label = "optional-label";

  await client.addConfigurationSetting({
    key,
    value,
    label
  });

  const poller = await client.beginCreateSnapshot({
    name:"testsnapshot",
    retentionPeriod: 2592000,
    filters: [{keyFilter: key, labelFilter: label}],
  });
  const snapshot = await poller.pollUntilDone();
}

run().catch((err) => console.log("ERROR:", err));
```

You can also use `beginCreateSnapshotAndWait` to have the result of the creation directly after the polling is done.
```js
const snapshot  = await client.beginCreateSnapshotAndWait({
  name:"testsnapshot",
  retentionPeriod: 2592000,
  filters: [{keyFilter: key, labelFilter: label}],
});
```

### Get a snapshot

```js
const retrievedSnapshot = await client.getSnapshot("testsnapshot");
console.log("Retrieved snapshot:", retrievedSnapshot);
```

### List the `ConfigurationSetting` in the snapshot
```javascript
const retrievedSnapshotSettings = await client.listConfigurationSettingsForSnapshot("testsnapshot");

for await (const setting of retrievedSnapshotSettings) {
  console.log(`Found key: ${setting.key}, label: ${setting.label}`);
}
```

### List all snapshots from the service
```javascript
const snapshots = await client.listSnapshots();

for await (const snapshot of snapshots) {
  console.log(`Found snapshot: ${snapshot.name}`);
}
```

### Recover and archive the snapshot
```javascript
// Snapshot is in ready status
const archivedSnapshot = await client.archiveSnapshot("testsnapshot");
console.log("Snapshot updated status is:", archivedSnapshot.status);

// Snapshot is in archive status
const recoverSnapshot = await client.recoverSnapshot("testsnapshot");
console.log("Snapshot updated status is:", recoverSnapshot.status);
```

## Troubleshooting

### Logging

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```javascript
const { setLogLevel } = require("@azure/logger");

setLogLevel("info");
```

For more detailed instructions on how to enable logs, you can look at the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/core/logger).

### React Native support

React Native does not support some JavaScript API used by this SDK library so you need to provide polyfills for them.  Please see our [React Native sample with Expo](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/samples/frameworks/react-native/appconfigBasic/README.md#add-polyfills) for more details.

## Next steps

The following samples show you the various ways you can interact with App Configuration:

- [`helloworld.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/helloworld.ts) - Get, set, and delete configuration values.
- [`helloworldWithLabels.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/helloworldWithLabels.ts) - Use labels to add additional dimensions to your settings for scenarios like beta vs production.
- [`optimisticConcurrencyViaEtag.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/optimisticConcurrencyViaEtag.ts) - Set values using etags to prevent accidental overwrites.
- [`setReadOnlySample.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/setReadOnlySample.ts) - Marking settings as read-only to prevent modification.
- [`getSettingOnlyIfChanged.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/getSettingOnlyIfChanged.ts) - Get a setting only if it changed from the last time you got it.
- [`listRevisions.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/listRevisions.ts) - List the revisions of a key, allowing you to see previous values and when they were set.
- [`secretReference.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/secretReference.ts) - SecretReference represents a configuration setting that references as KeyVault secret.
- [`snapshot.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/snapshot.ts) - Create, list configuration settings, and archive snapshots.
- [`featureFlag.ts`](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/typescript/src/featureFlag.ts) - Feature flags are settings that follow specific JSON schema for the value.

More in-depth examples can be found in the [samples](https://github.com/Azure/azure-sdk-for-js/tree/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/samples/v1/) folder on GitHub.

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/CONTRIBUTING.md) to learn more about how to build and test the code.

This module's tests are a mixture of live and unit tests, which require you to have an Azure App Configuration instance. To execute the tests you'll need to run:

1. `rush update`
2. `rush build -t @azure/app-configuration`
3. Create a .env file with these contents in the `sdk\appconfiguration\app-configuration` folder:
   `APPCONFIG_CONNECTION_STRING=connection string for your App Configuration instance`
4. `cd sdk\appconfiguration\app-configuration`
5. `npm run test`.

View our [tests](https://github.com/Azure/azure-sdk-for-js/blob/@azure/app-configuration_1.8.0/sdk/appconfiguration/app-configuration/test)
folder for more details.

## Related projects

- [Microsoft Azure SDK for JavaScript](https://github.com/Azure/azure-sdk-for-js)
- [Azure App Configuration](/azure/azure-app-configuration/overview)



