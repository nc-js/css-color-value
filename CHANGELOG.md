# Changelog

## 0.2.0 (Unreleased)
### Features
- Adds `CssColor` type, which represents a generic color space and the CSS `color()` function (CSS Colors Module Level 4). This polyfills the official `CSSColor` type.
- Adds `matchesType()` function, for dynamically checking the type of a `CSSNumericValue`.

### Fixes
- Fixes a typo in a function name, where `matchesPercent()` is renamed to `matchesPercentage()` (matching the CSS type, `<percentage>`).

### Documentation
- Adds usage examples for `CssRgb`, `CssHsl`, and `CssHwb`.
- Cleans up documentation for type-matching functions.
- (Internal) Clarifies the conditions that a reifying/rectifying function (under `./reify`) throws a `SyntaxError`.

## 0.1.2 (2025-05-15)
- Fix: correctly export all symbols

## 0.1.0 (2025-05-15)
- Use correct `README.md` file for package

## 0.1.0 (2025-05-15)
- Initial release of library
