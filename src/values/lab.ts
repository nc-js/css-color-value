import { CssColorValue } from '../css-color-value.ts'
import { rectifyColorNumber, rectifyColorPercent } from '../reify.ts'
import type { CSSColorNumber, CSSColorPercent } from '../types.ts'

/**
 * The CIE L\*a\*b\* (CIELAB) color space, which represents the CSS `lab()` function.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#csslab}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab}
 */
export class CssLab extends CssColorValue {
	private _l: CSSColorPercent
	private _a: CSSColorNumber
	private _b: CSSColorNumber
	private _alpha: CSSColorPercent

	/** Create a `CssLab` instance */
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
	public get l(): CSSColorPercent {
		return this._l
	}

	/** Set the color's lightness as a percentage */
	public set l(l: CSSColorPercent) {
		this._l = rectifyColorPercent(l)
	}

	/** The `a` axis which ranges from -125 (red) to 125 (green) */
	public get a(): CSSColorNumber {
		return this._a
	}

	/** Set the `a` axis which ranges from -125 (red) to 125 (green) */
	public set a(a: CSSColorNumber) {
		this._a = rectifyColorNumber(a)
	}

	/** The `b` axis which ranges from -125 (blue) to 125 (yellow) */
	public get b(): CSSColorNumber {
		return this._b
	}

	/** Set the `b` axis which ranges from -125 (blue) to 125 (yellow) */
	public set b(b: CSSColorNumber) {
		this._b = rectifyColorNumber(b)
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
