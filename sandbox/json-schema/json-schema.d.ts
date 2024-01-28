
declare namespace JsonSchema {
  interface Schema<V = any> extends
    StrictSchema<V>,
    HintedSchema<V>,
    StringSchema,
    NumberSchema,
    ArraySchema<Schema>,
    ObjectSchema<Schema>
  {}

  interface HintedSchema<V = any> {
    default?: V
    examples?: V[]
  }
  interface StrictSchema<V = any> {
    const?: V
    enum?: V[]
  }

  interface StringSchema {
    minLength?: number
    maxLength?: number
    pattern?: string
    format?: string
  }

  interface NumberSchema {
    min?: number
    max?: number
    exclusiveMin?: number
    exclusiveMax?: number
    multipleOf?: number
  }

  interface ObjectSchema<S> {
    required?: string[]
    properties?: {
      [p in string]: S
    }
    additionalProperties?: S
    patternProperties?: {
      [p in string]: S
    }
    propertyNames?: S
    minProperties?: number
    maxProperties?: number
  }
  interface ArraySchema<S> {
    items?: S | S[]
    additionalItems?: S
    uniqueItems?: boolean
    minItems?: number
    maxItems?: number
  }

  type StrictValues<T extends Schema> = Ever<ValueOf<T, "const">, ValueOf<ValueOf<T, "enum">, number>>

  type HintValues<T extends AnyObject> =
  | ValueOf<T, "default">
  | ValueOf<ValueOf<T, "examples">, number>

  export type ToTS<Schema extends AnyObject>
  = Ever<
    StrictValues<Schema>,
    HintValues<Schema>
    | Ever<Extract<keyof Schema, keyof StringSchema>, never, string>
    | Ever<Extract<keyof Schema, keyof NumberSchema>, never, number>
  >
}
