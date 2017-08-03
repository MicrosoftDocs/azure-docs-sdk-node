# Package azure-arm-cdn
## Classes
| Class Name | Description |
|---|---|
| @azure-arm-cdn.Profiles |Class representing a Profiles.|
| @azure-arm-cdn.Origins |Class representing a Origins.|
| @azure-arm-cdn.Endpoints |Class representing a Endpoints.|
| @azure-arm-cdn.EdgeNodes |Class representing a EdgeNodes.|
| @azure-arm-cdn.CustomDomains |Class representing a CustomDomains.|
| @azure-arm-cdn.ValidateCustomDomainOutput |Output of custom domain validation.|
| @azure-arm-cdn.ValidateCustomDomainInput |Input of the custom domain to be validated for DNS mapping.|
| @azure-arm-cdn.SsoUri |SSO URI required to login to the supplemental portal.|
| @azure-arm-cdn.Sku |The pricing tier (defines a CDN provider, feature list and rate) of the CDN profile.|
| @azure-arm-cdn.ResourceUsageListResult |Output of check resource usage API.|
| @azure-arm-cdn.ResourceUsage |Output of check resource usage API.|
| @azure-arm-cdn.Resource |The Resource definition.|
| @azure-arm-cdn.PurgeParameters |Parameters required for content purge.|
| @azure-arm-cdn.ProfileUpdateParameters |Properties required to update a profile.|
| @azure-arm-cdn.ProfileListResult |Result of the request to list profiles. It contains a list of profile objects and a URL link to get the the next set of results.|
| @azure-arm-cdn.Profile |CDN profile represents the top level resource and the entry point into the CDN API. This allows users to set up a logical grouping of endpoints in addition to creating shared configuration settings and selecting pricing tiers and providers.|
| @azure-arm-cdn.OriginUpdateParameters |Origin properties needed for origin creation or update.|
| @azure-arm-cdn.OriginListResult |Result of the request to list origins. It contains a list of origin objects and a URL link to get the next set of results.|
| @azure-arm-cdn.Origin |CDN origin is the source of the content being delivered via CDN. When the edge nodes represented by an endpoint do not have the requested content cached, they attempt to fetch it from one or more of the configured origins.|
| @azure-arm-cdn.OperationListResult |Result of the request to list CDN operations. It contains a list of operations and a URL link to get the next set of results.|
| @azure-arm-cdn.OperationDisplay |The object that represents the operation.|
| @azure-arm-cdn.Operation |CDN REST API operation|
| @azure-arm-cdn.LoadParameters |Parameters required for content load.|
| @azure-arm-cdn.IpAddressGroup |CDN Ip address group|
| @azure-arm-cdn.GeoFilter |Rules defining user geo access within a CDN endpoint.|
| @azure-arm-cdn.ErrorResponse |Error reponse indicates CDN service is not able to process the incoming request. The reason is provided in the error message.|
| @azure-arm-cdn.EndpointUpdateParameters |Properties required to create a new endpoint.|
| @azure-arm-cdn.EndpointListResult |Result of the request to list endpoints. It contains a list of endpoint objects and a URL link to get the the next set of results.|
| @azure-arm-cdn.Endpoint |CDN endpoint is the entity within a CDN profile containing configuration information such as origin, protocol, content caching and delivery behavior. The CDN endpoint uses the URL format <endpointname>.azureedge.net.|
| @azure-arm-cdn.EdgenodeResult |Result of the request to list CDN edgenodes. It contains a list of ip address group and a URL link to get the next set of results.|
| @azure-arm-cdn.EdgeNode |Edge node of CDN service.|
| @azure-arm-cdn.DeepCreatedOrigin |Origin to be added when creating a CDN endpoint.|
| @azure-arm-cdn.CustomDomainParameters |The customDomain JSON object required for custom domain creation or update.|
| @azure-arm-cdn.CustomDomainListResult |Result of the request to list custom domains. It contains a list of custom domain objects and a URL link to get the next set of results.|
| @azure-arm-cdn.CustomDomain |Customer provided domain for branding purposes, e.g. www.consoto.com.|
| @azure-arm-cdn.CidrIpAddress |CIDR Ip address|
| @azure-arm-cdn.CheckNameAvailabilityOutput |Output of check name availability API.|
| @azure-arm-cdn.CheckNameAvailabilityInput |Input of CheckNameAvailability API.|
| @azure-arm-cdn.CdnManagementClient |Class representing a CdnManagementClient.|
