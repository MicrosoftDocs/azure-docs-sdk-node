# ApplicationUtil

``` swift
public struct ApplicationUtil
```

## Properties

### `isExecutingInAppExtension`

Boolean describing whether the application is executing within an app extension.

``` swift
var isExecutingInAppExtension:​ Bool
```

### `sharedApplication`

<dl>
<dt><code>canImport(UIKit)</code></dt>
<dd>

Simple access to the shared application when not executing within an app extension.

``` swift
var sharedApplication:​ UIApplication?
```

</dd>
</dl>

## Methods

### `currentViewController(forParent:​)`

<dl>
<dt><code>canImport(UIKit)</code></dt>
<dd>

Returns the current `UIViewController` for a parent controller.

``` swift
public static func currentViewController(forParent parent:​ UIViewController? = nil) -> UIViewController?
```

#### Parameters

  - parent:​ - parent:​ The parent `UIViewController`. If none provided, will attempt to discover the most relevant controller.

</dd>
</dl>

### `currentViewController(withRootViewController:​)`

<dl>
<dt><code>canImport(UIKit)</code></dt>
<dd>

Attempt to find the top-most view controller for a given root view controller.

``` swift
public static func currentViewController(withRootViewController root:​ UIViewController?) -> UIViewController?
```

#### Parameters

  - root:​ - root:​ The root `UIViewController`.

</dd>
</dl>
