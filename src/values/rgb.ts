import { rectifyColorPercent, rectifyColorRGBComp } from '../reify.ts'
import { CssColorValue } from './../mod.ts'
import type { CSSColorPercent, CSSColorRGBComp } from './../types.ts'

/**
 * The RGB color space, which represents the CSS `rgb()`/`rgba()` functions.
 *
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#cssrgb}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb}
 *
 * @example
 * ```ts
 * import { CssRgb } from '@nc/css-color-value/values'
 *
 * // black and white
 * const black = new CssRgb(0, 0, 0)
 * const white = new CssRgb(255, 255, 255)
 *
 * // red, green, and blue
 * const red = new CssRgb(255, 0, 0)
 * const green = new CssRgb(0, 255, 0)
 * const blue = new CssRgb(0, 0, 255)
 *
 * // cyan, magenta, and yellow
 * const cyan = new CssRgb(0, 255, 255)
 * const magenta = new CssRgb(255, 0, 255)
 * const yellow = new CssRgb(255, 255, 0)
 * ```
 */
export class CssRgb extends CssColorValue {
	private _r: CSSColorRGBComp
	private _g: CSSColorRGBComp
	private _b: CSSColorRGBComp
	private _alpha: CSSColorPercent

	/** Create a `CssRgb` instance */
	public constructor(
		r: CSSColorRGBComp,
		g: CSSColorRGBComp,
		b: CSSColorRGBComp,
		alpha: CSSColorPercent = 1,
	) {
		super()
		this._r = rectifyColorRGBComp(r)
		this._g = rectifyColorRGBComp(g)
		this._b = rectifyColorRGBComp(b)
		this._alpha = rectifyColorPercent(alpha)
	}

	/** The value of the red channel */
	public get r(): CSSColorRGBComp {
		return this._r
	}

	/** Set the value of the red channel  */
	public set r(r: CSSColorRGBComp) {
		this._r = rectifyColorRGBComp(r)
	}

	/** The value of the green channel */
	public get g(): CSSColorRGBComp {
		return this._g
	}

	/** Set the value of the green channel */
	public set g(g: CSSColorRGBComp) {
		this._g = rectifyColorRGBComp(g)
	}

	/** The value of the green channel */
	public get b(): CSSColorRGBComp {
		return this._b
	}

	/** Set the value of the blue channel */
	public set b(b: CSSColorRGBComp) {
		this._b = rectifyColorRGBComp(b)
	}

	/** The value of the alpha channel */
	public get alpha(): CSSColorPercent {
		return this._alpha
	}

	/** Set the value of the alpha channel */
	public set alpha(alpha: CSSColorPercent) {
		this._alpha = rectifyColorPercent(alpha)
	}
}
