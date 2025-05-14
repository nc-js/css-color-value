import { CssColorValue } from '../mod.ts'
import { rectifyColorAngle, rectifyColorPercent } from '../reify.ts'

/**
 * Represents the CSS `hwb()` function.
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#csshwb}
 */
export class CssHwb extends CssColorValue {
	private _h: CSSNumericValue
	private _w: CSSNumberish
	private _b: CSSNumberish
	private _alpha: CSSNumberish

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

	public get h(): CSSNumericValue {
		return this._h
	}

	public set h(h: CSSNumericValue) {
		this._h = rectifyColorAngle(h) as CSSNumericValue
	}

	public get w(): CSSNumberish {
		return this._w
	}

	public set w(w: CSSNumericValue) {
		this._w = rectifyColorPercent(w) as CSSNumericValue
	}

	public get b(): CSSNumberish {
		return this._b
	}

	public set b(b: CSSNumberish) {
		this._b = rectifyColorPercent(b) as CSSNumberish
	}

	public get alpha(): CSSNumberish {
		return this._alpha
	}

	public set alpha(alpha: CSSNumberish) {
		this._alpha = rectifyColorPercent(alpha) as CSSNumberish
	}
}
