# Package azure-arm-datalake-store
## Classes
| Class Name | Description |
|---|---|
| @azure-arm-datalake-store.FileSystem |Class representing a FileSystem.|
| @azure-arm-datalake-store.FileStatusResult |Data Lake Store filesystem file status information response.|
| @azure-arm-datalake-store.FileStatusProperties |Data Lake Store file or directory information.|
| @azure-arm-datalake-store.FileStatusesResult |Data Lake Store filesystem file status list information response.|
| @azure-arm-datalake-store.FileStatuses |Data Lake Store file status list information.|
| @azure-arm-datalake-store.FileOperationResult |The result of the request or operation.|
| @azure-arm-datalake-store.ContentSummaryResult |Data Lake Store filesystem content summary information response.|
| @azure-arm-datalake-store.ContentSummary |Data Lake Store content summary information|
| @azure-arm-datalake-store.AdlsUnsupportedOperationException |A WebHDFS exception thrown indicating that the requested operation is not supported. Thrown when a 400 error response code is returned (bad request).|
| @azure-arm-datalake-store.AdlsThrottledException |A WebHDFS exception thrown indicating that the request is being throttled. Reducing the number of requests or request size helps to mitigate this error.|
| @azure-arm-datalake-store.AdlsSecurityException |A WebHDFS exception thrown indicating that access is denied. Thrown when a 401 error response code is returned (Unauthorized).|
| @azure-arm-datalake-store.AdlsRuntimeException |A WebHDFS exception thrown when an unexpected error occurs during an operation. Thrown when a 500 error response code is returned (Internal server error).|
| @azure-arm-datalake-store.AdlsRemoteException |Data Lake Store filesystem exception based on the WebHDFS definition for RemoteExceptions. This is a WebHDFS 'catch all' exception|
| @azure-arm-datalake-store.AdlsIOException |A WebHDFS exception thrown indicating there was an IO (read or write) error. Thrown when a 403 error response code is returned (forbidden).|
| @azure-arm-datalake-store.AdlsIllegalArgumentException |A WebHDFS exception thrown indicating that one more arguments is incorrect. Thrown when a 400 error response code is returned (bad request).|
| @azure-arm-datalake-store.AdlsFileNotFoundException |A WebHDFS exception thrown indicating the file or folder could not be found. Thrown when a 404 error response code is returned (not found).|
| @azure-arm-datalake-store.AdlsFileAlreadyExistsException |A WebHDFS exception thrown indicating the file or folder already exists. Thrown when a 403 error response code is returned (forbidden).|
| @azure-arm-datalake-store.AdlsError |Data Lake Store filesystem error containing a specific WebHDFS exception.|
| @azure-arm-datalake-store.AdlsBadOffsetException |A WebHDFS exception thrown indicating the append or read is from a bad offset. Thrown when a 400 error response code is returned for append and open operations (Bad request).|
| @azure-arm-datalake-store.AdlsAccessControlException |A WebHDFS exception thrown indicating that access is denied due to insufficient permissions. Thrown when a 403 error response code is returned (forbidden).|
| @azure-arm-datalake-store.AclStatusResult |Data Lake Store file or directory Access Control List information.|
| @azure-arm-datalake-store.AclStatus |Data Lake Store file or directory Access Control List information.|
| @azure-arm-datalake-store.DataLakeStoreFileSystemManagementClient |Class representing a DataLakeStoreFileSystemManagementClient.|
| @azure-arm-datalake-store.TrustedIdProviders |Class representing a TrustedIdProviders.|
| @azure-arm-datalake-store.FirewallRules |Class representing a FirewallRules.|
| @azure-arm-datalake-store.Account |Class representing a Account.|
| @azure-arm-datalake-store.UpdateTrustedIdProviderParameters |Data Lake Store Trusted Identity Provider update parameters|
| @azure-arm-datalake-store.UpdateKeyVaultMetaInfo |The Key Vault update information used for user managed key rotation.|
| @azure-arm-datalake-store.UpdateFirewallRuleParameters |Data Lake Analytics firewall rule update parameters|
| @azure-arm-datalake-store.UpdateEncryptionConfig |The encryption configuration used to update a user managed Key Vault key.|
| @azure-arm-datalake-store.TrustedIdProvider |Data Lake Store Trusted Identity Provider information|
| @azure-arm-datalake-store.SubResource |The Resource model definition for a nested resource.|
| @azure-arm-datalake-store.Resource |The Resource model definition.|
| @azure-arm-datalake-store.KeyVaultMetaInfo |Metadata information used by account encryption.|
| @azure-arm-datalake-store.FirewallRule |Data Lake Store firewall rule information|
| @azure-arm-datalake-store.ErrorDetails |Data Lake Store error details information|
| @azure-arm-datalake-store.EncryptionIdentity |The encryption identity properties.|
| @azure-arm-datalake-store.EncryptionConfig |The encryption configuration for the account.|
| @azure-arm-datalake-store.DataLakeStoreTrustedIdProviderListResult |Data Lake Store trusted identity provider list information.|
| @azure-arm-datalake-store.DataLakeStoreFirewallRuleListResult |Data Lake Store firewall rule list information.|
| @azure-arm-datalake-store.DataLakeStoreAccountUpdateParameters |Data Lake Store account information to update|
| @azure-arm-datalake-store.DataLakeStoreAccountListResult |Data Lake Store account list information response.|
| @azure-arm-datalake-store.DataLakeStoreAccount |Data Lake Store account information|
| @azure-arm-datalake-store.DataLakeStoreAccountManagementClient |Class representing a DataLakeStoreAccountManagementClient.|
