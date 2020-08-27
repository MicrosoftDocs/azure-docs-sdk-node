# CryptoAlgorithm

Crypto HMAC algorithms and digest lengths

``` swift
public enum CryptoAlgorithm
```

## Enumeration Cases

### `sha512`

``` swift
case sha512
```

### `md5`

``` swift
case md5
```

### `sha1`

``` swift
case sha1
```

### `sha384`

``` swift
case sha384
```

### `sha256`

``` swift
case sha256
```

### `sha224`

``` swift
case sha224
```

## Properties

### `hmacAlgorithm`

Underlying CommonCrypto HMAC algorithm.

``` swift
var hmacAlgorithm:​ CCHmacAlgorithm
```

### `digestLength`

Digest length for the HMAC algorithm.

``` swift
var digestLength:​ Int
```

## Methods

### `hmac(_:​dataLength:​withKey:​)`

Calculate the HMAC digest of data.

``` swift
public func hmac(_ data:​ UnsafeRawPointer!, dataLength:​ Int, withKey key:​ Data) -> Data
```

### `hash(_:​dataLength:​)`

Compute a hash of the underlying data using the specfied algorithm.

``` swift
public func hash(_ data:​ UnsafeRawPointer!, dataLength:​ Int) -> Data
```
