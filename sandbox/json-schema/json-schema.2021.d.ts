namespace JsonSchema {
  export interface settings {
    // Json or unknown
    any: unknown
    type2ts: {
      "null": null
      "boolean": boolean
      "integer": number
      "number": number
      "string": string
      "array": unknown[]
      "object": SomeObject
    },
    instances: {
      "Date": Date
    }
  }

  type Any = settings["any"]
  type Type2ts = settings["type2ts"]
  type Instances = settings["instances"]

  type values<V extends string[]|string> = V extends string ? V : V[number]

  export type Type<S extends {
    "type"?: string|string[]
    "examples"?: unknown[]
  }> = S extends {"type": string|string[]}
  ? string extends values<S["type"]>
    ? S["examples"][number]
    : Type2ts extends {[V in values<S["type"]>]: unknown}
      ? Type2ts[values<S["type"]>]
      : never
  : S["examples"][number]

  export type InstanceOf<S extends {
    "instanceOf"?: unknown
    "type"?: string|string[]
    "examples"?: unknown[]
  }>
  = S extends {"instanceOf": unknown}
  ? (
    S["instanceOf"] extends string
      ? Instances extends {[K in S["instanceOf"]]: unknown}
        ? Instances[S["instanceOf"]]
        : never
      : S["instanceOf"]
  ) | Extract<Type<S>, null>
  : Any

  export type ConstEnum<S extends {
    "const"?: unknown
    "enum"?: unknown
  }> = (
    S extends {"const": unknown} ? S["const"] : Any
  ) & (
    S extends {"enum": unknown[]} ? S["enum"][number] : Any
  )
}