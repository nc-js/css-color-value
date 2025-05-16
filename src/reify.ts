import { matchesAngle, matchesNumber, matchesPercentage } from './matches.ts'
import type {
	CSSColorAngle,
	CSSColorNumber,
	CSSColorPercent,
	CSSColorRGBComp,
} from './types.ts'

/**
 * Normalizes an `<ident>` into a `CSSKeywordValue`.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#reify-an-identifier}
 */
export function reifyIdent(ident: string): CSSKeywordValue {
	return new CSSKeywordValue(ident)
}

/**
 * Normalizes a `CSSKeywordish` into a `CSSKeywordValue`.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#rectify-a-keywordish-value}
 */
export function rectifyKeywordish(val: CSSKeywordish): CSSKeywordValue {
	return val instanceof CSSKeywordValue ? val : new CSSKeywordValue(val)
}

/**
 * Normalizes a `CSSColorRGBComp` into a Typed OM value.
 *
 * @throws {SyntaxError} Throws an error if it's not possible
 * to normalize a `CSSColorRGBComp`. This happens if the given
 * value fails all of the following conditions:
 *  - The given value is a `number`.
 *  - The given value is a `string`.
 *  - The given value is a `CSSNumericValue` that matches either a
 *    `<number>` or `<percentage>`.
 *  - The given value is a `CSSKeywordValue` set to `none`.
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
		(matchesNumber(val) || matchesPercentage(val))
	) {
		return val
	}
	if (val instanceof CSSKeywordValue && val.value.toLowerCase() === 'none') {
		return val
	}
	throw new SyntaxError()
}

/**
 * Normalizes a `CSSColorPercent` into a Typed OM value.
 *
 * @throws {SyntaxError} Throws an error if it's not possible
 * to normalize a `CSSColorPercent`.  This happens if the given
 * value fails all of the following conditions:
 *  - The given value is a `number`.
 *  - The given value is a `string`.
 *  - The given value is a `CSSNumericValue` that matches a `<percentage>`.
 *  - The given value is a `CSSKeywordValue` set to `none`.
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
	if (val instanceof CSSNumericValue && matchesPercentage(val)) {
		return val
	}
	if (val instanceof CSSKeywordValue && val.value.toLowerCase() === 'none') {
		return val
	}
	throw new SyntaxError()
}

/**
 * Normalizes a `CSSColorNumber` into a Typed OM value.
 *
 * @throws {SyntaxError} Throws an error if it's not possible
 * to normalize a `CSSColorNumber`. This happens if the given
 * value fails all of the following conditions:
 *  - The given value is a `number`.
 *  - The given value is a `string`.
 *  - The given value is a `CSSNumericValue` that matches a `<number>`.
 *  - The given value is a `CSSKeywordValue` set to `none`.
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
 * Normalizes a `CSSColorAngle` into a Typed OM value.
 *
 * @throws {SyntaxError} Throws an error if it's not possible
 * to normalize a `CSSColorAngle`. This happens if the given
 * value fails all of the following conditions:
 *  - The given value is a `number`.
 *  - The given value is a `string`.
 *  - The given value is a `CSSNumericValue` that matches an `<angle>`.
 *  - The given value is a `CSSKeywordValue` set to `none`.
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
