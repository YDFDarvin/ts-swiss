type MyJson = JsonPrimitive | Set<MyJson> | Map<string, MyJson>

describe('json', () => {
  const obj = {"a": [1], "b": {"c": [0]}, "d": "e", "f": null}
  , jsonStr = JSON.stringify(obj)
  , nativeParsed: Json = JSON.parse(jsonStr)
  //@ts-expect-error
  , nativeIsNotMy: MyJson = nativeParsed
  , myParsed: MyJson = JSON.parse(jsonStr, myReviver) 
  //@ts-expect-error
  , myParsedIsNotNative: Json = myParsed
  
  it('native', () => expect(
    nativeIsNotMy
  ).toStrictEqual(
    obj
  ))

  it('native', () => expect(
    myParsedIsNotNative
  ).toStrictEqual(
    //@ts-ignore
    new Map([
      ["a", new Set([1])],
      ["b", new Map([["c", new Set([0])]])],
      ["d", "e"],
      ["f", null]
    ])
  ))
})

function myReviver(_: string, value: JsonStructure<MyJson>) :MyJson {
  if (value === null || typeof value !== 'object')
    return value
  if (Array.isArray(value))
    return new Set(value)
  const e = Object.entries(value)
  return new Map(e)
}