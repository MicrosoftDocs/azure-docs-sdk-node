---
title: Azure Async Iterator Polyfill client library for JavaScript
keywords: Azure, javascript, SDK, API, @azure/core-asynciterator-polyfill, core
ms.date: 02/09/2022
ms.topic: reference
ms.devlang: javascript
ms.service: azure
---
# Azure Async Iterator Polyfill client library for JavaScript - version 1.0.2 


This library provides a polyfill for [Symbol.asyncIterator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)
for platforms that do not have support for it by default.

## Getting started

### Installation

If using this as part of another project in the [azure-sdk-for-js](https://github.com/Azure/azure-sdk-for-js) repo,
then run `rush install` after cloning the repo.

Otherwise, use npm to install this package in your application as follows

```
npm install @azure/core-asynciterator-polyfill
```

## Key concepts

[Symbol.asyncIterator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) is not supported
in all platforms and therefore you might need a polyfill in order to get it working on such platforms. Importing the polyfill from
this library lets you use the iterator in your applications.

## Examples

To use this polyfill, just include an import of this library in your code

```typescript
import "@azure/core-asynciterator-polyfill";
```

## Next steps

Try out this package in your application if you are working on platforms that do not have support for
[Symbol.asyncIterator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) and provide feedback!

## Troubleshooting

Log an issue at https://github.com/Azure/azure-sdk-for-js/issues

## Contributing

If you'd like to contribute to this library, please read the [contributing guide](https://github.com/Azure/azure-sdk-for-js/blob/@azure/core-asynciterator-polyfill_1.0.2/CONTRIBUTING.md) to learn more about how to build and test the code.



