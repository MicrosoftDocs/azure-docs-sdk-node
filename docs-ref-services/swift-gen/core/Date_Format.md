# Date.Format

``` swift
public enum Format
```

## Enumeration Cases

### `rfc1123`

Format the `Date` as an RFC 1123-formatted string.

``` swift
case rfc1123
```

### `iso8601`

Format the `Date` as an ISO-8601-formatted string (in RFC 3339 format).

``` swift
case iso8601
```

## Properties

### `formatter`

Retrieve a `DateFormatter` for the given date format.

``` swift
var formatter:​ DateFormatter
```
