---
title: Cognitive Services Speech SDK for JavaScript
description: Reference for Cognitive Services Speech SDK for JavaScript
author: mahilleb-msft
ms.author: mahilleb
manager: wolfma
ms.date: 09/24/2018
ms.topic: article
ms.prod: azure
ms.technology: azure
ms.devlang: nodejs
ms.service: cognitive-services
ms.component: speech-service
---

# Cognitive Services Speech SDK for JavaScript

## Overview

To simplify the development of speech-enabled applications, Microsoft provides the Speech SDK for use with the [Speech service](https://aka.ms/csspeech).
The Speech SDK provides consistent native Speech-to-Text and Speech Translation APIs.

> [!NOTE]
> The Cognitive Services Speech SDK is currently available only for browsers.
> An NPM package will follow soon.

### Install the Speech SDK

Download the Speech SDK as a [.zip package](https://aka.ms/csspeech/jsbrowserpackage) and unpack it.
This should result in a number of files being unpacked including a file named `microsoft.cognitiveservices.speech.sdk.bundle.js`.
Load this file as a script resource in your web page to start using the Speech SDK:

```html
<script src="microsoft.cognitiveservices.speech.sdk.bundle.js"></script>
```

### Example 

The following code snippets illustrates how to do simple speech recognition from your browser:

```javascript 
var SpeechSDK = window.SpeechSDK;
var speechConfig = SpeechSDK.SpeechConfig.fromSubscription("your-subscription-key", "your-service-region");
speechConfig.language = "en-US";
var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

recognizer.recognizeOnceAsync(
  function (result) {
    alert("Recognition result:" + JSON.stringify(result));
    recognizer.close();
  },
  function (err) {
    alert("An error occurred:" + JSON.stringify(err));
    recognizer.close();
  }
);
``` 

Check out our [step-by-step quickstart](/azure/cognitive-services/speech-service/quickstart-js-browser).

## Samples

Explore more samples in our [Speech SDK sample repository](https://aka.ms/csspeech/samples).
