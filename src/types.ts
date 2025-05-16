/**
 * Canonically represents a value that is either `<number>`, `<percentage>`, or the keyword `none`.
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#typedefdef-csscolorrgbcomp}
 */
export type CSSColorRGBComp = CSSNumberish | CSSKeywordish

/**
 * Canonically represents a value that is either `<percentage>`, or the keyword `none`.
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#typedefdef-csscolorpercent}
 */
export type CSSColorPercent = CSSNumberish | CSSKeywordish

/**
 * Canonically represents a value that is either `<number>`, or the keyword `none`.
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#typedefdef-csscolornumber}
 */
export type CSSColorNumber = CSSNumberish | CSSKeywordish

/**
 * Canonically represents a value that is either `<angle>`, or the keyword `none`.
 * @see {@link https://drafts.css-houdini.org/css-typed-om/#typedefdef-csscolorangle}
 */
export type CSSColorAngle = CSSNumberish | CSSKeywordish
