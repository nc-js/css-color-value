import { CssColorValue } from '../css-color-value.ts'
import { rectifyColorAngle, rectifyColorPercent } from '../reify.ts'

/**
 * The HWB color space, which represents the CSS `hwb()` function.
 *
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#csshwb}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hwb}
 */
export class CssHwb extends CssColorValue {
	private _h: CSSNumericValue
	private _w: CSSNumberish
	private _b: CSSNumberish
	private _alpha: CSSNumberish

	/** Create a `CssHwb` instance */
	public constructor(
		h: CSSNumericValue,
		w: CSSNumberish,
		b: CSSNumberish,
		alpha: CSSNumberish = 1,
	) {
		super()
		this._h = rectifyColorAngle(h) as CSSNumericValue
		this._w = rectifyColorPercent(w) as CSSNumberish
		this._b = rectifyColorPercent(b) as CSSNumberish
		this._alpha = rectifyColorPercent(alpha) as CSSNumberish
	}

	/** The color's hue in degrees */
	public get h(): CSSNumericValue {
		return this._h
	}

	/** Set the color's hue in degrees */
	public set h(h: CSSNumericValue) {
		this._h = rectifyColorAngle(h) as CSSNumericValue
	}

	/** The color's whitness as a percentage */
	public get w(): CSSNumberish {
		return this._w
	}

	/** Set the color's whitness as a percentage */
	public set w(w: CSSNumericValue) {
		this._w = rectifyColorPercent(w) as CSSNumericValue
	}

	/** The color's blackness as a percentage */
	public get b(): CSSNumberish {
		return this._b
	}

	/** Set the color's whitness as a percentage */
	public set b(b: CSSNumberish) {
		this._b = rectifyColorPercent(b) as CSSNumberish
	}

	/** The alpha channel */
	public get alpha(): CSSNumberish {
		return this._alpha
	}

	/** Set the alpha channel */
	public set alpha(alpha: CSSNumberish) {
		this._alpha = rectifyColorPercent(alpha) as CSSNumberish
	}
}
