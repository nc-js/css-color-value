/**
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#cssnumericvalue-match}
 */
const matchesSingleType = (
	value: CSSNumericValue,
	productionKey: keyof CSSNumericType,
	expected: number = 1,
): boolean => {
	const type = value.type()
	for (const key in type) {
		const typedKey = key as keyof CSSNumericType
		if (typedKey === productionKey) {
			if (type[typedKey] !== expected) return false
		} else {
			if (type[typedKey] !== 0) return false
		}
	}
	return true
}

/**
 * A CSSNumericValue matches for `<number>`
 * when all entries of `CSSNumericType` are non-zero
 */
export const matchesNumber = (value: CSSNumericValue): boolean => {
	const type = value.type()
	return type.length !== 0 &&
		type.angle !== 0 &&
		type.time !== 0 &&
		type.frequency !== 0 &&
		type.resolution !== 0 &&
		type.flex !== 0 &&
		type.percent !== 0
}

/**
 * A CSSNumericValue matches for `<length>`
 * when the only non-zero entry of `CSSNumericType` is length of 1
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#length-value}
 */
export const matchesLength = (value: CSSNumericValue): boolean =>
	matchesSingleType(value, 'length', 1)

/**
 * A CSSNumericValue matches for `<angle>`
 * when the only non-zero entry of `CSSNumericType` is angle of 1
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#angle-value}
 */
export const matchesAngle = (value: CSSNumericValue): boolean =>
	matchesSingleType(value, 'angle', 1)

/**
 * A CSSNumericValue matches for `<time>`
 * when the only non-zero entry of `CSSNumericType` is time of 1
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#time-value}
 */
export const matchesTime = (value: CSSNumericValue): boolean =>
	matchesSingleType(value, 'time', 1)

/**
 * A CSSNumericValue matches for `<frequency>`
 * when the only non-zero entry of `CSSNumericType` is frequency of 1
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#frequency-value}
 */
export const matchesFrequency = (value: CSSNumericValue): boolean =>
	matchesSingleType(value, 'frequency', 1)

/**
 * A CSSNumericValue matches for `<resolution>`
 * when the only non-zero entry of `CSSNumericType` is resolution of 1
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#resolution-value}
 */
export const matchesResolution = (value: CSSNumericValue): boolean =>
	matchesSingleType(value, 'resolution', 1)

/**
 * A CSSNumericValue matches for `<flex>`
 * when the only non-zero entry of `CSSNumericType` is flex of 1
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#flex-value}
 */
export const matchesFlex = (value: CSSNumericValue): boolean =>
	matchesSingleType(value, 'flex', 1)

/**
 * A CSSNumericValue matches for `<percentage>`
 * when the only non-zero entry of `CSSNumericType` is percent of 1
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#percentage-value}
 */
export const matchesPercentage = (value: CSSNumericValue): boolean =>
	matchesSingleType(value, 'percent', 1)

/**
 * A CSSNumericValue matches for `<length-percentage>`
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-length-percentage}
 */
export const matchesLengthPercentage = (value: CSSNumericValue): boolean =>
	matchesLength(value) || matchesPercentage(value)

/**
 * A CSSNumericValue matches for `<frequency-percentage>`
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-frequency-percentage}
 */
export const matchesFrequencyPercentage = (value: CSSNumericValue): boolean =>
	matchesFrequency(value) || matchesPercentage(value)

/**
 * A CSSNumericValue matches for `<angle-percentage>`
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-angle-percentage}
 */
export const matchesAnglePercentage = (value: CSSNumericValue): boolean =>
	matchesAngle(value) || matchesPercentage(value)

/**
 * A CSSNumericValue matches for `<time-percentage>`
 *
 * @see {@link https://drafts.csswg.org/css-values-4/#typedef-time-percentage}
 */
export const matchesTimePercentage = (value: CSSNumericValue): boolean =>
	matchesTime(value) || matchesPercentage(value)
