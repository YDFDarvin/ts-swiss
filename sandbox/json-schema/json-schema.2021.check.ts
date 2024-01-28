import { desc, tsIsEqual } from "../../check"

desc("type", () => {
  desc("strictly defined", () => {
    tsIsEqual<JsonSchema.Type<{"type": "number"}>, number>(true)
    tsIsEqual<JsonSchema.Type<{"type": ["number"]}>, number>(true)
    tsIsEqual<JsonSchema.Type<{"type": ["number", "string"]}>, number|string>(true)
  })

  desc("invalid type", () => {
    tsIsEqual<JsonSchema.Type<{"type": []}>, never>(true)
    tsIsEqual<JsonSchema.Type<{"type": ""}>, never>(true)
    tsIsEqual<JsonSchema.Type<{"type": [""]}>, never>(true)  
  })

  desc("unknown value", () => {
    tsIsEqual<JsonSchema.Type<{}>, unknown>(true)
    tsIsEqual<JsonSchema.Type<{"type": string}>, unknown>(true)
    tsIsEqual<JsonSchema.Type<{"type": [string]}>, unknown>(true)
    tsIsEqual<JsonSchema.Type<{"type": string[]}>, unknown>(true)  
  })

  desc("from examples", () => {
    tsIsEqual<JsonSchema.Type<{"examples": ["a", "b"]}>, "a"|"b">(true)
  })
  
})

desc("instanceOf", () => {
  desc("Just instanceOf", () => {
    tsIsEqual<JsonSchema.InstanceOf<{"instanceOf": "Date"}>, Date>(true)
    tsIsEqual<JsonSchema.InstanceOf<{}>, unknown>(true)
    tsIsEqual<JsonSchema.InstanceOf<{"instanceOf": Date}>, Date>(true)
    tsIsEqual<JsonSchema.InstanceOf<{"instanceOf": "Whatever"}>, never>(true)  
  })

  desc("Nullable", () => {
    tsIsEqual<JsonSchema.InstanceOf<{
      "instanceOf": "Date",
      "type": ["string", "null"]
    }>, null|Date>(true)
  })
})

desc("const or enum", () => {
  tsIsEqual<JsonSchema.ConstEnum<{"const": "0"}>, "0">(true)
  tsIsEqual<JsonSchema.ConstEnum<{"enum": ["0", "1"]}>, "0"|"1">(true)
  tsIsEqual<JsonSchema.ConstEnum<{"const": "0", "enum": ["0", "1"]}>, "0">(true)
})
