import { CssColorValue } from './../mod.ts'
import { rectifyColorAngle, rectifyColorPercent } from './../reify.ts'
import type { CSSColorAngle, CSSColorPercent } from './../types.ts'

/**
 * Represents the CSS `hsl()`/`hsla()` functions.
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#csshsl}
 */
export class CssHsl extends CssColorValue {
	private _h: CSSColorAngle
	private _s: CSSColorPercent
	private _l: CSSColorPercent
	private _alpha: CSSColorPercent

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

	public get h(): CSSColorAngle {
		return this._h
	}

	public set h(r: CSSColorAngle) {
		this._h = rectifyColorAngle(r)
	}

	public get s(): CSSColorPercent {
		return this._s
	}

	public set s(s: CSSColorPercent) {
		this._s = rectifyColorPercent(s)
	}

	public get l(): CSSColorPercent {
		return this._l
	}

	public set l(l: CSSColorPercent) {
		this._l = rectifyColorPercent(l)
	}

	public get alpha(): CSSColorPercent {
		return this._alpha
	}

	public set alpha(alpha: CSSColorPercent) {
		this._alpha = rectifyColorPercent(alpha)
	}
}
