# Changelog

## 0.2.0 (Unreleased)
### Features
- Adds `CssColor` type, which represents a generic color space and the CSS `color()` function (CSS Colors Module Level 4). This polyfills the official `CSSColor` type.
- Exports the `matchesType()` function (formerly internal), for dynamically checking the type of a `CSSNumericValue`.
- All type-matching functions (under `/matches`) now also accept a `CSSNumericType` (instead of just `CSSNumericValue`).
- Adds `CSSMatchableType` type alias, a union of `CSSNumericType` and `CSSNumericValue`.

### Fixes
- Fixes a typo in a function name, where `matchesPercent()` is renamed to `matchesPercentage()` (matching the CSS type, `<percentage>`).

### Documentation
- Adds usage examples for `CssRgb`, `CssHsl`, and `CssHwb`.
- `CssLab`, `CssLch`: Fixes text-rendering in the summary.
- `CssColor`: Adds MDN link to the CSS `color()` function for `CssColor`.
- `CssColor`: Clarifies valid color space types for `CssColor`.
- Cleans up documentation for type-matching functions.
- (Internal) Clarifies the conditions that a reifying/rectifying function (under `./reify`) throws a `SyntaxError`.

## 0.1.2 (2025-05-15)
- Fix: correctly export all symbols

## 0.1.0 (2025-05-15)
- Use correct `README.md` file for package

## 0.1.0 (2025-05-15)
- Initial release of library
