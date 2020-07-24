# Details on UI Disable

The following code repos have had their UI update disabled.

### Azure-docs-sdk-node 

 - [Disabled UI](https://ops.microsoft.com/#/repos/a92b76e3-3152-c0a9-537b-4d37096a01a1?tabName=ci)
 - [Latest](https://apidrop.visualstudio.com/Content%20CI/_build?definitionId=1590)
 - [Preview](https://apidrop.visualstudio.com/Content%20CI/_build?definitionId=1155)

### Azure-docs-sdk-python

- [Disabled UI](https://ops.microsoft.com/#/repos/a92b76e3-3152-c0a9-537b-4d37096a01a1?tabName=ci)
- [Latest](https://apidrop.visualstudio.com/Content%20CI/_build?definitionId=437)
- [Preview](https://apidrop.visualstudio.com/Content%20CI/_build?definitionId=2190)

Not only this, but the CI for these repositories has been MERGED. The CI jobs run both preview and regular at the same time. The primarybenefit here is that we no longer have to be concerned about
multiple preview branches.

How does this work?

- `target_repo` PARAMS.json is RETAINED for CI PULL and PUSH only.
- targeted NPM packages configuration will be pulled from the packages-X.json files

To update the targeted packages, submit a PR into `smoke-test` for the appropriate moniker.

- `ci-configs/packages-latest.json` for latest
- `ci-configs/packages-preview.json` for preview

Mime what you see for existing packages.