import { CssColorValue } from '../mod.ts'
import { rectifyColorNumber, rectifyColorPercent } from '../reify.ts'
import type { CSSColorNumber, CSSColorPercent } from '../types.ts'

/**
 * Represents the CSS `oklab()` function.
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#cssoklab}
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

	get l(): CSSColorPercent {
		return this._l
	}

	set l(value: CSSColorPercent) {
		this._l = rectifyColorPercent(value)
	}

	get a(): CSSColorNumber {
		return this._a
	}

	set a(value: CSSColorNumber) {
		this._a = rectifyColorNumber(value)
	}

	get b(): CSSColorNumber {
		return this._b
	}

	set b(value: CSSColorNumber) {
		this._b = rectifyColorNumber(value)
	}

	get alpha(): CSSColorPercent {
		return this._alpha
	}

	set alpha(value: CSSColorPercent) {
		this._alpha = rectifyColorPercent(value)
	}
}
