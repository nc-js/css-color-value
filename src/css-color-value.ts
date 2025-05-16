/**
 * Solely exposes the `CssColorValue` type, a polyfill of `CSSColorValue`.
 * @module
 */

/**
 * A CSS Typed OM value which represents a `<color>`.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#colorvalue-objects}
 */
export class CssColorValue extends CSSStyleValue {
	/**
	 * Parse a string into a `CssColorValue`.
	 *
	 * @see {@link https://drafts.css-houdini.org/css-typed-om/#dom-csscolorvalue-parse}
	 */
	static override parse(_value: string): CssColorValue | CSSStyleValue {
		throw new Error()
	}
}
