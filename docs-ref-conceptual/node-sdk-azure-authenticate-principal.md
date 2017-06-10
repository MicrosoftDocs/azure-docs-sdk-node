---
title: Create an Azure service principal with Node.js
description: Learn how to use service principal authentication via Node.js 
keywords: Azure, Node, SDK, API, authentication, active directory, service principal
author: tomarcher
manager: douge
ms.author: tarcher
ms.date: 06/10/2017
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: node
ms.service: multiple
ms.assetid: 
---

# Create an Azure service principal with Node.js 

When an app needs to access resources, you can set up an identity for the app and authenticate the app with its own credentials. This identity is known as a *service principal*. Essentially, you create keys for your Azure Active Directory account that you provide to the SDK to authenticate rather than requiring user intervention or username/password.

The service principal approach enables you to:
- Assign permissions to the app identity that are different than your own permissions. Typically, these permissions are restricted to exactly what the app needs to do.
- Use a certificate for authentication when running an unattended script.

This topic shows you three techniques for creating a service principal.

- Azure portal
- Azure CLI
- Azure SDK for Node.js

## Create a service principal using the Azure portal

Follow the steps outlined in the topic, 
[Use portal to create an Azure Active Directory application and service principal that can access resources](https://azure.microsoft.com/en-us/documentation/articles/resource-group-create-service-principal-portal/), to generate the service principal.

## Create a service principal using the Azure CLI

Creating a service principal using the Azure CLI can be 
accomplished using the 
[Azure Cross-Platform CLI (npm module)](https://github.com/Azure/azure-xplat-cli).

1. Log into Azure. The following command produces instructions that log you into Azure: 

	```shell
	$ azure login
	```

2. Create a service principal using the `azure ad sp` command:

	```shell
	$ azure ad sp create -n sp-name -p sp-password
	```

	Here's an example of the output from the `azure ad sp` command:

	```shell
	+ Creating application sp-name
	+ Creating service principal for application <service-principal-name>
	data:    Object Id:               weewrerer-e329-4e9b-98c6-7878787
	data:    Display Name:            sp-name
	data:    Service Principal Names:
	data:                             <service-principal-name>
	data:                             https://sp-name
	info:    ad sp create command OK
	```

3. Assign a role to the new service principal. For the `--spn` option, use the &lt;service-principal-name> from the previous step.

	```shell
	$ azure role assignment create --spn <service-principal-name> -o Contributor
	```

	Running the `azure role assignment` command results in output similar to the following:

	```shell
	info:    Executing command role assignment create
	+ Finding role with specified name
	data:    RoleAssignmentId     : /subscriptions/abcdefgh-1234-4cc9-89b5-12345678/providers/Microsoft.Authorization/roleAssignments/987654-ea85-40a5-80c2-abcdferghtt
	data:    RoleDefinitionName   : Contributor
	data:    RoleDefinitionId     : jhfskjf-6180-42a0-ab88-5656eiu677e23e
	data:    Scope                : /subscriptions/abcdefgh-1234-4cc9-89b5-12345678
	data:    Display Name         : sp-name
	data:    SignInName           :
	data:    ObjectId             : weewrerer-e329-4e9b-98c6-7878787
	data:    ObjectType           : ServicePrincipal
	data:
	+
	info:    role assignment create command OK
	```

4. Log in using the service principal.

	```shell
	$ azure login -u <service-principal-name> -p <password> --tenant <guid or domain> --service-principal
	```

	Once processed, the `azure login` command produces output similar to the following:

	```shell
	info:    Executing command login
	info:    Added subscription TestSubscription
	+
	info:    login command OK
	```

## Create a service principal using the Azure SDK for Node.js

To programmatically create a service principal using JavaScript, use the 
[ServicePrincipal script](https://github.com/Azure/azure-sdk-for-node/tree/master/Documentation/ServicePrincipal).   

## Using the service principal

Once you have a service principal, the following JavaScript code snippet 
illustrates how to use the service principal keys to authenticate with the 
Azure SDK for Node.js. Modify the following placeholders: &lt;clientId or appId>, &lt;secret or password>,
and &lt;domain or tenant>,

```javascript
const Azure = require('azure');
const MsRest = require('ms-rest-azure');

MsRest.loginWithServicePrincipalSecret(
  <clientId or appId>,
  <secret or password>,
  <domain or tenant>,
  (err, credentials) => {
    if (err) throw err

    let storageClient = Azure.createARMStorageManagementClient(credentials, '<azure-subscription-id>');

    // ..use the client instance to manage service resources.
  }
);
```
