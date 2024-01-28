const schema =  {
  "properties": {
    "a": true,
    "b": false
  }
}
, val: Schema2TS<typeof schema> = {

}, schemaConst =  {
  "properties": {
    "a": true,
    "b": false
  }
} as const
, val2: Schema2TS<typeof schemaConst> = {
  "b": undefined
}

, req1 = ["a", "b"]
, req1_1: scRequired<typeof req1> = ""
, req2 = ["a", "b"] as const
, req2_1: scRequired<typeof req2> = ""