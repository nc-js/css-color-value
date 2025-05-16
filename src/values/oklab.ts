import { CssColorValue } from '../mod.ts'
import { rectifyColorNumber, rectifyColorPercent } from '../reify.ts'
import type { CSSColorNumber, CSSColorPercent } from '../types.ts'

/**
 * The Oklab color space, which represents the CSS `oklab()` function.
 *
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#cssoklab}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklab}
 */
export class CssOkLab extends CssColorValue {
	private _l: CSSColorPercent
	private _a: CSSColorNumber
	private _b: CSSColorNumber
	private _alpha: CSSColorPercent

	public constructor(
		l: CSSColorPercent,
		a: CSSColorNumber,
		b: CSSColorNumber,
		alpha: CSSColorPercent = 1,
	) {
		super()
		this._l = rectifyColorPercent(l)
		this._a = rectifyColorNumber(a)
		this._b = rectifyColorNumber(b)
		this._alpha = rectifyColorPercent(alpha)
	}

	/** The color's lightness as a percentage */
	get l(): CSSColorPercent {
		return this._l
	}

	/** Set the color's lightness as a percentage */
	set l(value: CSSColorPercent) {
		this._l = rectifyColorPercent(value)
	}

	/** The `a` axis which has a hue range from red to green */
	get a(): CSSColorNumber {
		return this._a
	}

	/** Set the `a` axis which has a hue range from red to green */
	set a(value: CSSColorNumber) {
		this._a = rectifyColorNumber(value)
	}

	/** The `b` axis which has a hue range from blue to yellow */
	get b(): CSSColorNumber {
		return this._b
	}

	/** Set the `b` axis which has a hue range from blue to yellow */
	set b(value: CSSColorNumber) {
		this._b = rectifyColorNumber(value)
	}

	/** The alpha channel */
	get alpha(): CSSColorPercent {
		return this._alpha
	}

	/** Set the alpha channel */
	set alpha(value: CSSColorPercent) {
		this._alpha = rectifyColorPercent(value)
	}
}
