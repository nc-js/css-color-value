import { CssColorValue } from './../mod.ts'
import { rectifyColorAngle, rectifyColorPercent } from './../reify.ts'
import type { CSSColorAngle, CSSColorPercent } from './../types.ts'

/**
 * The HSL color space, which represents the CSS `hsl()`/`hsla()` functions.
 *
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#csshsl}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl}
 *
 * @example
 * ```ts
 * import { CssHsl } from '@nc/css-color-value/values'
 *
 * // black and white
 * const black = new CssHsl(0, 0, 0) // hsl(0, 0%, 0%)
 * const white = new CssHsl(0, 0, 1) // hsl(0, 0%, 100%)
 *
 * // red, green, and blue
 * const red = new CssHsl(0, 1, 0.5) // hsl(0, 100%, 50%)
 * const green = new CssHsl(120, 1, 0.5) // hsl(120, 100%, 50%)
 * const blue = new CssHsl(240, 1, 0.5) // hsl(240, 100%, 50%)
 *
 * // cyan, magenta, and yellow
 * const cyan = new CssHsl(180, 1, 0.5) // hsl(180, 100%, 50%)
 * const magenta = new CssHsl(300, 1, 0.5) // hsl(300, 100%, 50%)
 * const yellow = new CssHsl(60, 1, 0.5) // hsl(64, 100%, 50%)
 * ```
 */
export class CssHsl extends CssColorValue {
	private _h: CSSColorAngle
	private _s: CSSColorPercent
	private _l: CSSColorPercent
	private _alpha: CSSColorPercent

	/** Create a `CssHsl` instance */
	public constructor(
		h: CSSColorAngle,
		s: CSSColorPercent,
		l: CSSColorPercent,
		alpha: CSSColorPercent = 1,
	) {
		super()
		this._h = rectifyColorAngle(h)
		this._s = rectifyColorPercent(s)
		this._l = rectifyColorPercent(l)
		this._alpha = rectifyColorPercent(alpha)
	}

	/** The hue of the color in degrees */
	public get h(): CSSColorAngle {
		return this._h
	}

	/** Set the hue of the color in degrees */
	public set h(r: CSSColorAngle) {
		this._h = rectifyColorAngle(r)
	}

	/** The saturation of the color */
	public get s(): CSSColorPercent {
		return this._s
	}

	/** Set the saturation of the color */
	public set s(s: CSSColorPercent) {
		this._s = rectifyColorPercent(s)
	}

	/** The lightness of the color */
	public get l(): CSSColorPercent {
		return this._l
	}

	/** Set the lightness of the color */
	public set l(l: CSSColorPercent) {
		this._l = rectifyColorPercent(l)
	}

	/** The alpha channel */
	public get alpha(): CSSColorPercent {
		return this._alpha
	}

	/** Set the alpha channel */
	public set alpha(alpha: CSSColorPercent) {
		this._alpha = rectifyColorPercent(alpha)
	}
}
