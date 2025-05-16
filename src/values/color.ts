import { CssColorValue } from '../css-color-value.ts'
import type { CSSColorPercent } from '../mod.ts'
import { rectifyColorPercent, rectifyKeywordish } from '../reify.ts'

/**
 * A generic color space, representing the CSS `color()` function.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#csscolor}
 */
export class CSSColor extends CssColorValue {
	private _colorSpace: CSSKeywordish
	private _channels: CSSColorPercent[]
	private _alpha: CSSNumberish

	/** Create a `CssColor` instance */
	public constructor(
		colorSpace: CSSKeywordish,
		channels: CSSColorPercent[],
		alpha: CSSNumberish = 1,
	) {
		super()
		this._colorSpace = rectifyKeywordish(colorSpace)
		this._channels = channels.map((channel) => rectifyColorPercent(channel))
		this._alpha = rectifyColorPercent(alpha) as CSSNumberish
	}

	/** The color space */
	public get colorSpace(): CSSKeywordish {
		return this._colorSpace
	}

	/** Set the color space */
	public set colorSpace(colorSpace: CSSKeywordish) {
		this._colorSpace = rectifyKeywordish(colorSpace)
	}

	/** The color channels */
	public get channels(): CSSColorPercent[] {
		return this._channels
	}

	/** Set a color channel at index `i` */
	public setChannel(i: number, channel: CSSColorPercent): void {
		this._channels[i] = rectifyColorPercent(channel)
	}

	/** Delete a color channel at index `i` */
	public deleteChannel(i: number): void {
		this._channels.splice(i, 1)
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
