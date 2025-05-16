import { CssColorValue } from '../css-color-value.ts'
import { rectifyColorAngle, rectifyColorPercent } from '../reify.ts'
import type { CSSColorAngle, CSSColorPercent } from '../types.ts'

/**
 * The Oklch color space (polar verison of Oklab),
 * which epresents the CSS `oklch()` function.
 *
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#cssoklch}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab}
 */
export class CssOkLch extends CssColorValue {
	private _l: CSSColorPercent
	private _c: CSSColorPercent
	private _h: CSSColorAngle
	private _alpha: CSSColorPercent

	/** Create a `CssOkLch` instance */
	public constructor(
		l: CSSColorPercent,
		c: CSSColorPercent,
		h: CSSColorAngle,
		alpha: CSSColorPercent = 1,
	) {
		super()
		this._l = rectifyColorPercent(l)
		this._c = rectifyColorPercent(c)
		this._h = rectifyColorAngle(h)
		this._alpha = rectifyColorPercent(alpha)
	}

	/** The color's lightness as a percentage */
	public get l(): CSSColorPercent {
		return this._l
	}

	/** Set the color's lightness as a percentage */
	public set l(value: CSSColorPercent) {
		this._l = rectifyColorPercent(value)
	}

	/** The color's chroma as a percentage */
	public get c(): CSSColorPercent {
		return this._c
	}

	/** Set the color's chroma as a percentage */
	public set c(value: CSSColorPercent) {
		this._c = rectifyColorPercent(value)
	}

	/** The color's hue as an angle */
	public get h(): CSSColorAngle {
		return this._h
	}

	/** Set the color's hue as an angle */
	public set h(value: CSSColorAngle) {
		this._h = rectifyColorAngle(value)
	}

	/** The alpha channel */
	public get alpha(): CSSColorPercent {
		return this._alpha
	}

	/** Set the alpha channel */
	public set alpha(value: CSSColorPercent) {
		this._alpha = rectifyColorPercent(value)
	}
}
