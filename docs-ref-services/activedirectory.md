---
title: Azure Active Directory modules for Node.js
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
ms.service: active-directory
---

# Azure Active Directory Node.js modules

## Overview

The Azure Active Directory Authentication Library (ADAL) for Node.js enables Node.js applications to authenticate to AAD in order to access AAD protected web resources.

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