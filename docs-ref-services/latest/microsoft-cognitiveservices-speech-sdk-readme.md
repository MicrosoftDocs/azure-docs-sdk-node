---
title: Cognitive Services Speech SDK for JavaScript
description: Reference for Cognitive Services Speech SDK for JavaScript
ms.date: 12/18/2018
ms.topic: reference
ms.devlang: nodejs
ms.service: cognitive-services
ms.subservice: speech-service
manager: wolfma
---
# Cognitive Services Speech SDK for JavaScript

## Overview

To simplify the development of speech-enabled applications, Microsoft provides the Speech SDK for use with the [Speech service](https://aka.ms/csspeech).
The Speech SDK provides consistent native Speech-to-Text and Speech Translation APIs.

### Install the npm module

Install the Cognitive Services Speech SDK npm module

```bash
npm install microsoft-cognitiveservices-speech-sdk
```

### Example 

The following code snippets illustrates how to do simple speech recognition from a file:

```JavaScript 
// Pull in the required packages.
var sdk = require("microsoft-cognitiveservices-speech-sdk");
var fs = require("fs");

// Replace with your own subscription key, service region (e.g., "westus"), and
// the name of the file you want to run through the speech recognizer.
var subscriptionKey = "YourSubscriptionKey";
var serviceRegion = "YourServiceRegion"; // e.g., "westus"
var filename = "YourAudioFile.wav"; // 16000 Hz, Mono

// Create the push stream we need for the speech sdk.
var pushStream = sdk.AudioInputStream.createPushStream();

// Open the file and push it to the push stream.
fs.createReadStream(filename).on('data', function(arrayBuffer) {
  pushStream.write(arrayBuffer.buffer);
}).on('end', function() {
  pushStream.close();
});

// We are done with the setup
console.log("Now recognizing from: " + filename);

// Create the audio-config pointing to our stream and
// the speech config specifying the language.
var audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);
var speechConfig = sdk.SpeechConfig.fromSubscription(subscriptionKey, serviceRegion);

// Setting the recognition language to English.
speechConfig.speechRecognitionLanguage = "en-US";

// Create the speech recognizer.
var recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

// Start the recognizer and wait for a result.
recognizer.recognizeOnceAsync(
  function (result) {
    console.log(result);

    recognizer.close();
    recognizer = undefined;
  },
  function (err) {
    console.trace("err - " + err);

    recognizer.close();
    recognizer = undefined;
  });
``` 


The previous example uses single-shot recognition, which recognizes a single utterance. You can also use [continuous recognition](/azure/cognitive-services/speech-service/get-started-speech-to-text?tabs=windowsinstall&pivots=programming-language-nodejs#continuous-recognition) to control when to stop recognizing. Check out our [step-by-step quickstart](/azure/cognitive-services/speech-service/quickstart-js-node) for many more options.

## Samples

* [Step-by-step quickstart for JavaScript](/azure/cognitive-services/speech-service/quickstart-js-node).
* [Step-by-step quickstart for the browser](/azure/cognitive-services/speech-service/quickstart-js-browser).
* More samples can be found in our [Speech SDK sample repository](https://aka.ms/csspeech/samples).

