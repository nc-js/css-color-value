import { matchesAngle, matchesNumber, matchesPercent } from './matches.ts'
import type {
	CSSColorAngle,
	CSSColorNumber,
	CSSColorPercent,
	CSSColorRGBComp,
} from './types.ts'

/**
 * A method that turns an `<ident>` into a CSSKeywordValue.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#reify-an-identifier}
 */
export function reifyIdent(ident: string): CSSKeywordValue {
	return new CSSKeywordValue(ident)
}

/**
 * A method that turns a CSSKeywordish into a CSSKeywordValue.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#rectify-a-keywordish-value}
 */
export function rectifyKeywordish(val: CSSKeywordish): CSSKeywordValue {
	return val instanceof CSSKeywordValue ? val : new CSSKeywordValue(val)
}

/**
 * A method that turns a CSSColorRGBComp into a Typed OM value.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#rectify-a-csscolorrgbcomp}
 */
export function rectifyColorRGBComp(
	val: CSSColorRGBComp,
): CSSUnitValue | CSSKeywordValue | CSSNumericValue {
	if (typeof val === 'number') {
		return new CSSUnitValue(val * 100, 'percent')
	}
	if (typeof val === 'string') {
		return rectifyKeywordish(val)
	}
	if (
		val instanceof CSSNumericValue &&
		(matchesNumber(val) || matchesPercent(val))
	) {
		return val
	}
	if (val instanceof CSSKeywordValue && val.value.toLowerCase() === 'none') {
		return val
	}
	throw new SyntaxError()
}

/**
 * A method that turns a CSSColorPercent into a Typed OM value.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#rectify-a-csscolorpercent}
 */
export function rectifyColorPercent(
	val: CSSColorPercent,
): CSSUnitValue | CSSKeywordValue | CSSNumericValue {
	if (typeof val === 'number') {
		return new CSSUnitValue(val * 100, 'percent')
	}
	if (typeof val === 'string') {
		return rectifyKeywordish(val)
	}
	if (val instanceof CSSNumericValue && matchesPercent(val)) {
		return val
	}
	if (val instanceof CSSKeywordValue && val.value.toLowerCase() === 'none') {
		return val
	}
	throw new SyntaxError()
}

/**
 * A method that turns a CSSColorNumber into a Typed OM value.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#rectify-a-csscolornumber}
 */
export function rectifyColorNumber(
	val: CSSColorNumber,
): CSSUnitValue | CSSKeywordValue | CSSNumericValue {
	if (typeof val === 'number') {
		return new CSSUnitValue(val, 'number')
	}
	if (typeof val === 'string') {
		return rectifyKeywordish(val)
	}
	if (val instanceof CSSNumericValue && matchesNumber(val)) {
		return val
	}
	if (val instanceof CSSKeywordValue && val.value.toLowerCase() === 'none') {
		return val
	}
	throw new SyntaxError()
}

/**
 * A method that turns a CSSColorAngle into a Typed OM value.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#rectify-a-csscolorangle}
 */
export function rectifyColorAngle(
	val: CSSColorAngle,
): CSSUnitValue | CSSKeywordValue | CSSNumericValue {
	if (typeof val === 'number') {
		return new CSSUnitValue(val, 'deg')
	}
	if (typeof val === 'string') {
		return rectifyKeywordish(val)
	}
	if (val instanceof CSSNumericValue && matchesAngle(val)) {
		return val
	}
	if (val instanceof CSSKeywordValue && val.value.toLowerCase() === 'none') {
		return val
	}
	throw new SyntaxError()
}
