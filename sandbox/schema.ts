declare type JsonSchemaStrictObject = {
  // type: string|readonly string[]
  // enum: Json[]
  required: string[]
  // propertyNames: JsonSchemaStrict
  properties: {
    [property: string]: JsonSchemaStrict
  }
  // additionalProperties: JsonSchemaStrict
  // patternProperties: JsonSchemaStrict
  // minItems: number
  // maxItems: number
  // items: JsonSchemaStrict | JsonSchemaStrict[]
  // additionalItems: JsonSchemaStrict
}


declare type JsonSchemaStrict = boolean | JsonSchemaStrictObject

type BooleanSchema2TS<S extends JsonSchemaStrict> = S extends false
? never
: S extends true
? any
: S extends boolean
? never | any
: unknown

declare type Schema2TS<S extends JsonSchemaStrict> = S extends object
? {
  [
    K in keyof S["properties"]
  ]?: Schema2TS<S["properties"][K]>
}
: BooleanSchema2TS<S>


type scRequired<R extends undefined|readonly string[]>
= R extends undefined
? never
: (
  string extends R[keyof R]
  ? unknown
  : R[keyof R]
)

type Requiring<T extends {[k: string]: any}, R extends string> = {
  [P in (keyof T )]-?: T[P];
} & {
  [P in Exclude<keyof T, R>]: T[P]
}