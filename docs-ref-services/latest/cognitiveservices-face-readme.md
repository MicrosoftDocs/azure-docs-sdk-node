---
title: Face API 
description: The Azure Face service client library for Node.js
author: PatrickFarley
ms.author: pafarley
ms.date: 06/21/2021
ms.topic: reference
ms.prod: azure
ms.technology:
ms.devlang: javascript
ms.service: 
---

# Azure Face API

> [!IMPORTANT]
> Face service access is limited based on eligibility and usage criteria in order to support our Responsible AI principles. Face service is only available to Microsoft managed customers and partners. Use the [Face Recognition intake form](https://aka.ms/facerecognition) to apply for access. For more information, see the [Face limited access](/legal/cognitive-services/computer-vision/limited-access-identity?context=%2Fazure%2Fcognitive-services%2Fcomputer-vision%2Fcontext%2Fcontext) page.


> [!IMPORTANT]
> Microsoft will be retiring facial recognition capabilities that can be used to try to infer emotional states and identity attributes which, if misused, can subject people to stereotyping, discrimination or unfair denial of services. These include capabilities that predict emotion, gender, age, smile, facial hair, hair and makeup. Existing customers have until June 30, 2023 to discontinue use of these capabilities before they are retired. Read more about this decision [here](https://azure.microsoft.com/blog/responsible-ai-investments-and-safeguards-for-facial-recognition/).

The Azure Face service provides AI algorithms that detect, recognize, and analyze human faces in images.

## Setting up

### Create a new Node.js application

In a console window (such as cmd, PowerShell, or Bash), create a new directory for your app, and navigate to it.

```console
mkdir myapp && cd myapp
```

Run the `npm init` command to create a node application with a `package.json` file.

```console
npm init
```

### Install the client library

Navigate to your project directory and run the following command to install the `ms-rest-azure` and `azure-cognitiveservices-face` NPM packages:

```console
npm install @azure/cognitiveservices-face @azure/ms-rest-js
```

Your app's `package.json` file will be updated with the dependencies.

## Next Steps

Go to the Face service [Overview](/azure/cognitive-services/face/overview) or follow a [quickstart](/azure/cognitive-services/face/quickstarts/client-libraries) to get started.
