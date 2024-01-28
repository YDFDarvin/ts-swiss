{
  //TODO consider `any`
  const empty: Record<string, JsonSchema.ToTS<{}>> = {
    //@ts-expect-error
    "undefined": undefined,
    //@ts-expect-error
    "null": null,
    //@ts-expect-error
    "boolean": false,
    //@ts-expect-error
    "number": 0,
    //@ts-expect-error
    "string": "string",
    //@ts-expect-error
    "array": [],
    //@ts-expect-error
    "object": {}
  }
  , strictConst: Record<string, JsonSchema.ToTS<{
    "const": "a"
  }>> = {
    "a": "a",
    //@ts-expect-error
    "another": "b"
  }
  , strictEnum: Record<string, JsonSchema.ToTS<{
    "enum": ["a", "A"]
  }>> = {
    "a": "a",
    "A": "A",
    //@ts-expect-error
    "another": "b"
  }
  , strictConflict: Record<string, JsonSchema.ToTS<{
    "const": "a",
    "enum": ["b"]
  }>> = {
    //TODO @ts-expect-error
    "a": "a",
    //@ts-expect-error
    "b": "b",
    //@ts-expect-error
    "undefined": undefined,
    "never": undefined as never
  }
  , defined: Record<string, JsonSchema.ToTS<{
    "default": "1"
    "examples": number[]
  } >> = {
    "default": "1",
    "example": 2,
    //@ts-expect-error
    "wrong": "2"
  }

  nop(empty, defined, strictConst, strictEnum, strictConflict)

}

function nop(..._: any[]) {}