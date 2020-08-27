# UserAgentPolicy

``` swift
public class UserAgentPolicy:​ PipelineStage
```

## Inheritance

[`PipelineStage`](docs/core/PipelineStage)

## Initializers

### `init(for:​telemetryOptions:​)`

``` swift
public convenience init(for clazz:​ AnyClass, telemetryOptions:​ TelemetryOptions)
```

### `init(sdkName:​sdkVersion:​telemetryOptions:​platformInfoProvider:​appBundleInfoProvider:​localeInfoProvider:​)`

``` swift
public init(sdkName:​ String, sdkVersion:​ String, telemetryOptions:​ TelemetryOptions, platformInfoProvider:​ PlatformInfoProvider? = DeviceProviders.platformInfo, appBundleInfoProvider:​ BundleInfoProvider? = DeviceProviders.appBundleInfo, localeInfoProvider:​ LocaleInfoProvider? = DeviceProviders.localeInfo)
```

### `init(sdkName:​sdkVersion:​platformInfoProvider:​appBundleInfoProvider:​localeInfoProvider:​)`

``` swift
public convenience init(sdkName:​ String, sdkVersion:​ String, platformInfoProvider:​ PlatformInfoProvider? = DeviceProviders.platformInfo, appBundleInfoProvider:​ BundleInfoProvider? = DeviceProviders.appBundleInfo, localeInfoProvider:​ LocaleInfoProvider? = DeviceProviders.localeInfo)
```

## Properties

### `next`

``` swift
var next:​ PipelineStage?
```

## Methods

### `on(request:​completionHandler:​)`

``` swift
public func on(request:​ PipelineRequest, completionHandler:​ @escaping OnRequestCompletionHandler)
```
