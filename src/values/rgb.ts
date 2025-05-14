import { rectifyColorPercent, rectifyColorRGBComp } from '../reify.ts'
import { CssColorValue } from './../mod.ts'
import type { CSSColorPercent, CSSColorRGBComp } from './../types.ts'

/**
 * Represents the CSS `rgb()`/`rgba()` functions.
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#cssrgb}
 */
export class CssRgb extends CssColorValue {
	private _r: CSSColorRGBComp
	private _g: CSSColorRGBComp
	private _b: CSSColorRGBComp
	private _alpha: CSSColorPercent

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

	public get r(): CSSColorRGBComp {
		return this._r
	}

	public set r(r: CSSColorRGBComp) {
		this._r = rectifyColorRGBComp(r)
	}

	public get g(): CSSColorRGBComp {
		return this._g
	}

	public set g(g: CSSColorRGBComp) {
		this._g = rectifyColorRGBComp(g)
	}

	public get b(): CSSColorRGBComp {
		return this._b
	}

	public set b(b: CSSColorRGBComp) {
		this._b = rectifyColorRGBComp(b)
	}

	public get alpha(): CSSColorPercent {
		return this._alpha
	}

	public set alpha(alpha: CSSColorPercent) {
		this._alpha = rectifyColorPercent(alpha)
	}
}
