import { CssColorValue } from './../mod.ts'
import { rectifyColorAngle, rectifyColorPercent } from './../reify.ts'
import type { CSSColorAngle, CSSColorPercent } from './../types.ts'

/**
 * The HSL color space, which represents the CSS `hsl()`/`hsla()` functions.
 *
 * @see {@link https://www.w3.org/TR/css-typed-om-1/#csshsl}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl}
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

	/** The hue of the color in degrees */
	public get h(): CSSColorAngle {
		return this._h
	}

	/** Set the hue of the color in degrees */
	public set h(r: CSSColorAngle) {
		this._h = rectifyColorAngle(r)
	}

	/** The saturation of the color */
	public get s(): CSSColorPercent {
		return this._s
	}

	/** Set the saturation of the color */
	public set s(s: CSSColorPercent) {
		this._s = rectifyColorPercent(s)
	}

	/** The lightness of the color */
	public get l(): CSSColorPercent {
		return this._l
	}

	/** Set the lightness of the color */
	public set l(l: CSSColorPercent) {
		this._l = rectifyColorPercent(l)
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
