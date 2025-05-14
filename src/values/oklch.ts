import { CssColorValue } from '../mod.ts'
import { rectifyColorAngle, rectifyColorPercent } from '../reify.ts'
import type { CSSColorAngle, CSSColorPercent } from '../types.ts'

/**
 * Represents the CSS `oklch()` function.
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#cssoklch}
 */
export class CssOkLch extends CssColorValue {
	private _l: CSSColorPercent
	private _c: CSSColorPercent
	private _h: CSSColorAngle
	private _alpha: CSSColorPercent

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

	public get l(): CSSColorPercent {
		return this._l
	}

	public set l(value: CSSColorPercent) {
		this._l = rectifyColorPercent(value)
	}

	public get c(): CSSColorPercent {
		return this._c
	}

	public set c(value: CSSColorPercent) {
		this._c = rectifyColorPercent(value)
	}

	public get h(): CSSColorAngle {
		return this._h
	}

	public set h(value: CSSColorAngle) {
		this._h = rectifyColorAngle(value)
	}

	public get alpha(): CSSColorPercent {
		return this._alpha
	}

	public set alpha(value: CSSColorPercent) {
		this._alpha = rectifyColorPercent(value)
	}
}
