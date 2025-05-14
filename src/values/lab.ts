import { CssColorValue } from '../mod.ts'
import { rectifyColorNumber, rectifyColorPercent } from '../reify.ts'
import type { CSSColorNumber, CSSColorPercent } from '../types.ts'

/**
 * Represents the CSS `lab()` function.
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#csslab}
 */
export class CssLab extends CssColorValue {
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

	public get l(): CSSColorPercent {
		return this._l
	}

	public set l(l: CSSColorPercent) {
		this._l = rectifyColorPercent(l)
	}

	public get a(): CSSColorNumber {
		return this._a
	}

	public set a(a: CSSColorNumber) {
		this._a = rectifyColorNumber(a)
	}

	public get b(): CSSColorNumber {
		return this._b
	}

	public set b(b: CSSColorNumber) {
		this._b = rectifyColorNumber(b)
	}

	public get alpha(): CSSColorPercent {
		return this._alpha
	}

	public set alpha(alpha: CSSColorPercent) {
		this._alpha = rectifyColorPercent(alpha)
	}
}
