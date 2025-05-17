# Changelog

## 0.2.3 (2025-05-17)
### Documentation
- Fix minor typo in documentation for `CssHwb` and `CssOkLch`.
- Add inline comments in example for `CssRgb`.
- Use consistent notation for CSS functions in `CssHsl`, `CssHwl`, `CssOkLch`, and `CssRgb`.

## 0.2.2 (2025-05-16)
### Documentation
- Fixes minor formatting consistency issue in `matchesFrequency()`.

## 0.2.1 (2025-05-16)
### Documentation
- Use `README.md` as the root module-level documentation.

## 0.2.0 (2025-05-16)
### Features
- Adds `CssColor` type, which represents a generic color space and the CSS `color()` function (CSS Colors Module Level 4). This polyfills the official `CSSColor` type.
- Exports the `matchesType()` function (formerly internal), for dynamically checking the type of a `CSSNumericValue`.
- All type-matching functions (under `/matches`) now also accept a `CSSNumericType` (instead of just `CSSNumericValue`).
- Adds `CSSMatchableType` type alias, a union of `CSSNumericType` and `CSSNumericValue`.

### Fixes
- Fixes a typo in a function name, where `matchesPercent()` is renamed to `matchesPercentage()` (matching the CSS type, `<percentage>`).

### Documentation
- `CssRgb`, `CssHsl`, `CssHwb`: Adds usage examples.
- `CssLab`, `CssLch`: Fixes text-rendering in the summary.
- `CssColor`: Adds MDN link to the CSS `color()` function for `CssColor`.
- `CssColor`: Clarifies valid color space types for `CssColor`.
- Adds module-level documentation to every module.
- Cleans up documentation for type-matching functions.
- Consistently links to `drafts.css-houdini.org` instead of `w3.org` for W3-related links.
- (Internal) Clarifies the conditions that a reifying/rectifying function (under `./reify`) throws a `SyntaxError`.

## 0.1.2 (2025-05-15)
### Fixes
- Correctly export all symbols

## 0.1.0 (2025-05-15)
### Documentation
- Use correct `README.md` file for package

## 0.1.0 (2025-05-15)
- Initial release of library
