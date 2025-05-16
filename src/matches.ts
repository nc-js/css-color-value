/**
 * Functions for matching the CSS type of either
 * a `CSSNumericValue` or `CSSNumericType`.
 * @module
 */

/**
 * A CSS Typed OM value that can be matched against
 * a specific CSS type.
 */
export type CSSMatchableType = CSSNumericType | CSSNumericValue

/**
 * Dynamically match the base type for a `CSSNumericValue`.
 *
 * The expected base type must be one of either:
 * - `'length'` (CSS `<length>` type)
 * - `'angle'` (CSS `<angle>` type)
 * - `'time'` (CSS `<time>` type)
 * - `'frequency'` (CSS  `<frequency>` type)
 * - `'resolution'` (CSS `<resolution>` type)
 * - `'flex'` (CSS `<flex>` type)
 * - `'percent'` (CSS `<percentage>` type)
 *
 * To match for a `<number>`, call `matchesNumber()` instead.
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 */
export const matchesType = (
	value: CSSMatchableType,
	expectedBaseType: keyof CSSNumericType,
): boolean => {
	const type = value instanceof CSSNumericValue ? value.type() : value
	for (const key in type) {
		const typedKey = key as keyof CSSNumericType
		if (typedKey === expectedBaseType) {
			if (type[typedKey] !== 1) return false
		} else {
			if (type[typedKey] !== 0) return false
		}
	}
	return true
}

/**
 * A `CSSNumericValue` matches for `<number>`
 * when all entries of `CSSNumericType` are non-zero.
 *
 * This can also match against a `CSSNumericType` directly.
 */
export const matchesNumber = (value: CSSMatchableType): boolean => {
	const type = value instanceof CSSNumericValue ? value.type() : value
	return type.length !== 0 &&
		type.angle !== 0 &&
		type.time !== 0 &&
		type.frequency !== 0 &&
		type.resolution !== 0 &&
		type.flex !== 0 &&
		type.percent !== 0
}

/**
 * A `CSSNumericValue` matches for `<length>`
 * when the only non-zero entry of `CSSNumericType` is length of 1.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#length-value}
 */
export const matchesLength = (value: CSSMatchableType): boolean =>
	matchesType(value, 'length')

/**
 * A `CSSNumericValue` matches for `<angle>`
 * when the only non-zero entry of `CSSNumericType` is angle of 1.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#angle-value}
 */
export const matchesAngle = (value: CSSMatchableType): boolean =>
	matchesType(value, 'angle')

/**
 * A `CSSNumericValue` matches for `<time>`
 * when the only non-zero entry of `CSSNumericType` is time of 1.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#time-value}
 */
export const matchesTime = (value: CSSMatchableType): boolean =>
	matchesType(value, 'time')

/**
 * A `CSSNumericValue` matches for `<frequency>`
 * when the only non-zero entry of `CSSNumericType` is frequency of 1.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#frequency-value}
 */
export const matchesFrequency = (value: CSSMatchableType): boolean =>
	matchesType(value, 'frequency')

/**
 * A `CSSNumericValue` matches for `<resolution>`
 * when the only non-zero entry of `CSSNumericType` is resolution of 1.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#resolution-value}
 */
export const matchesResolution = (value: CSSMatchableType): boolean =>
	matchesType(value, 'resolution')

/**
 * A `CSSNumericValue` matches for `<flex>`
 * when the only non-zero entry of `CSSNumericType` is flex of 1.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#flex-value}
 */
export const matchesFlex = (value: CSSMatchableType): boolean =>
	matchesType(value, 'flex')

/**
 * A `CSSNumericValue` matches for `<percentage>`
 * when the only non-zero entry of `CSSNumericType` is percent of 1.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#percentage-value}
 */
export const matchesPercentage = (value: CSSMatchableType): boolean =>
	matchesType(value, 'percent')

/**
 * A `CSSNumericValue` matches for `<length-percentage>`
 * when it matches either `<length>` or `<percentage>`.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-length-percentage}
 */
export const matchesLengthPercentage = (value: CSSMatchableType): boolean =>
	matchesLength(value) || matchesPercentage(value)

/**
 * A `CSSNumericValue` matches for `<frequency-percentage>`
 * when it matches either `<frequency>` or `<percentage>`.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-frequency-percentage}
 */
export const matchesFrequencyPercentage = (value: CSSMatchableType): boolean =>
	matchesFrequency(value) || matchesPercentage(value)

/**
 * A `CSSNumericValue` matches for `<angle-percentage>`
 * when it matches either `<angle>` or `<percentage>`.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-angle-percentage}
 */
export const matchesAnglePercentage = (value: CSSMatchableType): boolean =>
	matchesAngle(value) || matchesPercentage(value)

/**
 * A `CSSNumericValue` matches for `<time-percentage>`
 * when it matches either `<time>` or `<percentage>`.
 *
 * This can also match against a `CSSNumericType` directly.
 *
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-time-percentage}
 */
export const matchesTimePercentage = (value: CSSMatchableType): boolean =>
	matchesTime(value) || matchesPercentage(value)
