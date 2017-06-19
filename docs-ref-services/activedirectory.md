---
title: Azure Active Directory libraries for Node.js
description: Leverage Azure Active Directory from your Node.js apps.
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

# Azure Active Directory Node.js modules

## Overview

Use the Azure Storage client module to:

- Create, update, and manage Azure Storage accounts and query and regenerate access keys from your Node.js apps with the management libraries.
- Sign-on users to web apps and control access to API and applications with Azure Active Directory. The [Azure Active Directory authentication library (ADAL) for Node.js](https://github.com/AzureAD/azure-activedirectory-library-for-nodejs) provides a Node.js interface to set up OAuth2, OpenID Connect, Active Directory Graph API authentication flow, and provides support for single sign-on with [SAML 2.0](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-protocol-reference).
- Provide an interface to configure [role based access control](https://docs.microsoft.com/azure/active-directory/role-based-access-control-what-is) and assign identities (such as users and [service principals](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-application-objects)) to those roles.


## Install modules with npm

Use npm to install the Azure storage client or management modules.

```
npm install adal-node
```   

## Example

The following code from the [client credentials sample](https://github.com/MSOpenTech/azure-activedirectory-library-for-nodejs/blob/master/sample/client-credentials-sample.js) illustrates server-to-server authentication via client credentials:

```javascript
var adal = require('adal-node').AuthenticationContext;

var authorityHostUrl = 'https://login.windows.net';
var tenant = 'myTenant';
var authorityUrl = authorityHostUrl + '/' + tenant;
var clientId = 'yourClientIdHere';
var clientSecret = 'yourAADIssuedClientSecretHere'
var resource = '00000002-0000-0000-c000-000000000000';

var context = new AuthenticationContext(authorityUrl);

context.acquireTokenWithClientCredentials(resource, clientId, clientSecret, function(err, tokenResponse) {
  if (err) {
    console.log('well that didn\'t work: ' + err.stack);
  } else {
    console.log(tokenResponse);
  }
});
```

## Samples

[!INCLUDE [node-activedirectory-samples](../docs-ref-conceptual/includes/activedirectory-samples.md)]

Explore more [sample Node.js code](https://azure.microsoft.com/resources/samples/?platform=nodejs) you can use in your apps.