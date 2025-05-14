export class CssColorValue extends CSSStyleValue {
	static override parse(_value: string): CssColorValue | CSSStyleValue {
		throw new Error()
	}
}
