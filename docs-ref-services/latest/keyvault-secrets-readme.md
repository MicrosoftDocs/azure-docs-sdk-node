---
title: Azure Key Vault Secret client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/keyvault-secrets, keyvault
ms.date: 06/10/2025
ms.topic: reference
ms.devlang: javascript
ms.service: keyvault
---
# Azure Key Vault Secret client library for JavaScript - version 4.10.0 


Azure Key Vault is a service that allows you to encrypt authentication keys, storage account keys, data encryption keys, .pfx files, and passwords by using secured keys.
If you would like to know more about Azure Key Vault, you may want to review: [What is Azure Key Vault?](https://learn.microsoft.com/azure/key-vault/key-vault-overview)

Azure Key Vault Secrets management allows you to securely store and
tightly control access to tokens, passwords, certificates, API keys,
and other secrets.

Use the client library for Azure Key Vault Secrets in your Node.js application to:

- Get, set and delete secrets.
- Update a secret and it's attributes.
- Backup and restore a secret.
- Get, purge or recover a deleted secret.
- Get all the versions of a secret.
- Get all secrets.
- Get all deleted secrets.

> Note: This package cannot be used in the browser due to Azure Key Vault service limitations, please refer to [this document](https://github.com/Azure/azure-sdk-for-js/blob/@azure/keyvault-secrets_4.10.0/samples/cors/ts/README.md) for guidance.

Key links:

- [Source code](https://github.com/Azure/azure-sdk-for-js/tree/@azure/keyvault-secrets_4.10.0/sdk/keyvault/keyvault-secrets)
- [Package (npm)](https://www.npmjs.com/package/@azure/keyvault-secrets)
- [API Reference Documentation](https://learn.microsoft.com/javascript/api/@azure/keyvault-secrets)
- [Product documentation](https://azure.microsoft.com/services/key-vault/)
- [Samples](https://github.com/Azure/azure-sdk-for-js/tree/@azure/keyvault-secrets_4.10.0/sdk/keyvault/keyvault-secrets/samples)

## Getting started

### Currently supported environments

- [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule)

### Prerequisites

- An [Azure subscription](https://azure.microsoft.com/free/)
- A [Key Vault resource](https://learn.microsoft.com/azure/key-vault/quick-create-portal)
- An existing [Azure Key Vault][azure_keyvault]. If you need to create a key vault, you can do so in the Azure Portal by following the steps in [this document][azure_keyvault_portal]. Alternatively, you can use the Azure CLI by following the steps in [this document][azure_keyvault_cli].

### Install the package

Install the Azure Key Vault Secret client library using npm:

`npm install @azure/keyvault-secrets`

### Install the identity library

Key Vault clients authenticate using the Azure Identity Library. Install it as well using npm

`npm install @azure/identity`

### Configure TypeScript

TypeScript users need to have Node type definitions installed:

```bash
npm install @types/node
```

You also need to enable `compilerOptions.allowSyntheticDefaultImports` in your tsconfig.json. Note that if you have enabled `compilerOptions.esModuleInterop`, `allowSyntheticDefaultImports` is enabled by default. See [TypeScript's compiler options handbook](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for more information.

## Key concepts

- The **Secret client** is the primary interface to interact with the API methods
  related to secrets in the Azure Key Vault API from a JavaScript application.
  Once initialized, it provides a basic set of methods that can be used to
  create, read, update and delete secrets.
- A **Secret version** is a version of a secret in the Key Vault.
  Each time a user assigns a value to a unique secret name, a new **version**
  of that secret is created. Retrieving a secret by a name will always return
  the latest value assigned, unless a specific version is provided to the
  query.
- **Soft delete** allows Key Vaults to support deletion and purging as two
  separate steps, so deleted secrets are not immediately lost. This only happens if the Key Vault
  has [soft-delete](https://learn.microsoft.com/azure/key-vault/key-vault-ovw-soft-delete)
  enabled.
- A **Secret backup** can be generated from any created secret. These backups come as
  binary data, and can only be used to regenerate a previously deleted secret.

## Authenticating with Azure Active Directory

The Key Vault service relies on Azure Active Directory to authenticate requests to its APIs. The [`@azure/identity`](https://www.npmjs.com/package/@azure/identity) package provides a variety of credential types that your application can use to do this. The [README for `@azure/identity`](https://github.com/Azure/azure-sdk-for-js/blob/@azure/keyvault-secrets_4.10.0/sdk/identity/identity/README.md) provides more details and samples to get you started.

In order to interact with the Azure Key Vault service, you will need to create an instance of the `SecretClient` class, a **vault url** and a credential object. The examples shown in this document use a credential object named [`DefaultAzureCredential`][default_azure_credential], which is appropriate for most scenarios, including local development and production environments. Additionally, we recommend using a [managed identity][managed_identity] for authentication in production environments.

You can find more information on different ways of authenticating and their corresponding credential types in the [Azure Identity documentation][azure_identity].

Here's a quick example. First, import `DefaultAzureCredential` and `SecretClient`. Once these are imported, we can next connect to the Key Vault service:

```ts snippet:ReadmeSampleCreateClient
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

// Build the URL to reach your key vault
const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

// Lastly, create our keys client and connect to the service
const client = new SecretClient(url, credential);
```

## Specifying the Azure Key Vault service API version

By default, this package uses the latest Azure Key Vault service version which is `7.1`. The only other version that is supported is `7.0`. You can change the service version being used by setting the option `serviceVersion` in the client constructor as shown below:

```ts snippet:ReadmeSampleCreateClientWithVersion
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

// Build the URL to reach your key vault
const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

// Change the Azure Key Vault service API version being used via the `serviceVersion` option
const client = new SecretClient(url, credential, {
  serviceVersion: "7.0", // Or 7.1
});
```

## Examples

The following sections provide code snippets that cover some of the common
tasks using Azure Key Vault Secrets. The scenarios that are covered here consist of:

- [Creating and setting a secret](#creating-and-setting-a-secret).
- [Getting a secret](#getting-a-secret).
- [Creating and updating secrets with attributes](#creating-and-updating-secrets-with-attributes).
- [Deleting a secret](#deleting-a-secret).
- [Iterating lists of secrets](#iterating-lists-of-secrets).

### Creating and setting a secret

`setSecret` assigns a provided value to the specified secret name. If a secret
with the same name already exists, then a new version of the secret is created.

```ts snippet:ReadmeSampleCreateSecret
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

const result = await client.setSecret(secretName, "MySecretValue");
console.log("result: ", result);
```

### Getting a secret

The simplest way to read secrets back from the vault is to get a secret by
name. This will retrieve the most recent version of the secret. You can
optionally get a different version of the key if you specify it as part of the
optional parameters.

```ts snippet:ReadmeSampleGetSecret
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

const latestSecret = await client.getSecret(secretName);
console.log(`Latest version of the secret ${secretName}: `, latestSecret);

const specificSecret = await client.getSecret(secretName, {
  version: latestSecret.properties.version!,
});
console.log(
  `The secret ${secretName} at the version ${latestSecret.properties.version!}: `,
  specificSecret,
);
```

### Creating and updating secrets with attributes

A secret can have more information than its name and its value. They can also include
the following attributes:

- `tags`: Any set of key-values that can be used to search and filter secrets.
- `contentType`: Any string that can be used to help the receiver of the secret understand how to use the secret value.
- `enabled`: A boolean value that determines whether the secret value can be read or not.
- `notBefore`: A given date after which the secret value can be retrieved.
- `expiresOn`: A given date after which the secret value cannot be retrieved.

An object with these attributes can be sent as the third parameter of
`setSecret`, right after the secret's name and value, as follows:

```ts snippet:ReadmeSampleCreateSecretWithAttributes
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

const result = await client.setSecret(secretName, "MySecretValue", {
  enabled: false,
});
```

This will create a new version of the same secret, which will have the latest
provided attributes.

Attributes can also be updated to an existing secret version with
`updateSecretProperties`, as follows:

```ts snippet:ReadmeSampleUpdateSecretAttributes
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

const result = await client.getSecret(secretName);
await client.updateSecretProperties(secretName, result.properties.version, { enabled: false });
```

### Deleting a secret

The `beginDeleteSecret` method starts the deletion of a Secret.
This process will happen in the background as soon as the necessary resources
are available.

```ts snippet:ReadmeSampleDeleteSecret
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

await client.beginDeleteSecret(secretName);
```

If [soft-delete](https://learn.microsoft.com/azure/key-vault/key-vault-ovw-soft-delete)
is enabled for the Key Vault, this operation will only label the secret as a
_deleted_ secret. A deleted secret can't be updated. They can only be either
read, recovered or purged.

```ts snippet:ReadmeSampleDeleteSecretSoftDelete
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

const poller = await client.beginDeleteSecret(secretName);

// You can use the deleted secret immediately:
const deletedSecret = poller.getResult();

// The secret is being deleted. Only wait for it if you want to restore it or purge it.
await poller.pollUntilDone();

// You can also get the deleted secret this way:
await client.getDeletedSecret(secretName);

// Deleted secrets can also be recovered or purged.

// recoverDeletedSecret returns a poller, just like beginDeleteSecret.
const recoverPoller = await client.beginRecoverDeletedSecret(secretName);
await recoverPoller.pollUntilDone();

// And then, to purge the deleted secret:
await client.purgeDeletedSecret(secretName);
```

Since Secrets take some time to get fully deleted, `beginDeleteSecret`
returns a Poller object that keeps track of the underlying Long Running
Operation according to our guidelines:
https://azure.github.io/azure-sdk/typescript_design.html#ts-lro

The received poller will allow you to get the deleted secret by calling to `poller.getResult()`.
You can also wait until the deletion finishes, either by running individual service
calls until the secret is deleted, or by waiting until the process is done:

```ts snippet:ReadmeSampleDeleteSecretWait
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

const poller = await client.beginDeleteSecret(secretName);

// You can use the deleted secret immediately:
let deletedSecret = poller.getResult();

// Or you can wait until the secret finishes being deleted:
deletedSecret = await poller.pollUntilDone();
console.log(deletedSecret);
```

Another way to wait until the secret is fully deleted is to do individual calls, as follows:

```ts snippet:ReadmeSampleDeleteSecretWaitIndividually
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const poller = await client.beginDeleteSecret(secretName);
while (!poller.isDone()) {
  await poller.poll();
  await delay(5000);
}

console.log(`The secret ${secretName} is fully deleted`);
```

### Iterating lists of secrets

Using the SecretClient, you can retrieve and iterate through all of the
secrets in a Key Vault, as well as through all of the deleted secrets and the
versions of a specific secret. The following API methods are available:

- `listPropertiesOfSecrets` will list all of your non-deleted secrets by their names, only
  at their latest versions.
- `listDeletedSecrets` will list all of your deleted secrets by their names,
  only at their latest versions.
- `listPropertiesOfSecretVersions` will list all the versions of a secret based on a secret
  name.

Which can be used as follows:

```ts snippet:ReadmeSampleListSecrets
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

for await (const secretProperties of client.listPropertiesOfSecrets()) {
  console.log("Secret properties: ", secretProperties);
}

for await (const deletedSecret of client.listDeletedSecrets()) {
  console.log("Deleted secret: ", deletedSecret);
}

for await (const versionProperties of client.listPropertiesOfSecretVersions(secretName)) {
  console.log("Version properties: ", versionProperties);
}
```

All of these methods will return **all of the available results** at once. To
retrieve them by pages, add `.byPage()` right after invoking the API method you
want to use, as follows:

```ts snippet:ReadmeSampleListSecretsByPage
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";

const credential = new DefaultAzureCredential();

const vaultName = "<YOUR KEYVAULT NAME>";
const url = `https://${vaultName}.vault.azure.net`;

const client = new SecretClient(url, credential);

const secretName = "MySecretName";

for await (const page of client.listPropertiesOfSecrets().byPage()) {
  for (const secretProperties of page) {
    console.log("Secret properties: ", secretProperties);
  }
}
for await (const page of client.listDeletedSecrets().byPage()) {
  for (const deletedSecret of page) {
    console.log("Deleted secret: ", deletedSecret);
  }
}
for await (const page of client.listPropertiesOfSecretVersions(secretName).byPage()) {
  for (const versionProperties of page) {
    console.log("Version properties: ", versionProperties);
  }
}
```

## Troubleshooting

See our [troubleshooting guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/keyvault-secrets_4.10.0/sdk/keyvault/keyvault-secrets/TROUBLESHOOTING.md) for details on how to diagnose various failure scenarios.

Enabling logging may help uncover useful information about failures. In order to see a log of HTTP requests and responses, set the `AZURE_LOG_LEVEL` environment variable to `info`. Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts snippet:SetLogLevel
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

## Next steps

You can find more code samples through the following links:

- [Key Vault Secrets Samples (JavaScript)](https://github.com/Azure/azure-sdk-for-js/blob/@azure/keyvault-secrets_4.10.0/sdk/keyvault/keyvault-secrets/samples/v4/javascript)
- [Key Vault Secrets Samples (TypeScript)](https://github.com/Azure/azure-sdk-for-js/blob/@azure/keyvault-secrets_4.10.0/sdk/keyvault/keyvault-secrets/samples/v4/typescript)
- [Key Vault Secrets Test Cases](https://github.com/Azure/azure-sdk-for-js/blob/@azure/keyvault-secrets_4.10.0/sdk/keyvault/keyvault-secrets/test/)

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/keyvault-secrets_4.10.0/CONTRIBUTING.md) to learn more about how to build and test the code.

[azure_keyvault]: https://learn.microsoft.com/azure/key-vault/general/overview
[azure_keyvault_cli]: https://learn.microsoft.com/azure/key-vault/general/quick-create-cli
[azure_keyvault_portal]: https://learn.microsoft.com/azure/key-vault/general/quick-create-portal
[default_azure_credential]: https://learn.microsoft.com/javascript/api/@azure/identity/defaultazurecredential?view=azure-node-latest
[managed_identity]: https://learn.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview
[azure_identity]: https://learn.microsoft.com/javascript/api/overview/azure/identity-readme?view=azure-node-latest

