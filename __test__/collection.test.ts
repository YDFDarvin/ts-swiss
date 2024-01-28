/** Issue https://www.typescriptlang.org/play/#code/MYewdgzgLgBAtgTwMoFNYF4ZhQdxqqAHmgCcBLMAcwD4AKASgCgZGAzAVzGCjPBgAsAhhFoAPAFwxSFSjAA+WdnABGKEvRgBvZjF0k07EmHjI0AOiEjRTAL5A */

//@ts-ignore
describe("collection/Set<string|undefined>", () => {
  const mySet = new Set<string|undefined>(["1"])

  describe('number', () => {
    const mySet_Input_number = 1

    it('has', () => {
      const mySet_O1_1: false = mySet.has(mySet_Input_number)

      return expect(
        mySet_O1_1
      ).toBe(
        false
      )}
    )

    it('delete', () => expect(
      //@ts-expect-error
      mySet.delete(mySet_Input_number)
    ).toBe(
      false
    ))

  })
  describe('unknown', () => {
    const mySet_Input_unknown: unknown = 1
  
    it('has', () => {
      const mySet_O2_1: boolean = mySet.has(mySet_Input_unknown)
      //@ts-expect-error
      , mySet_O2_2: false = mySet.has(mySet_Input_unknown)
      //@ts-expect-error
      , mySet_O2_3: true = mySet.has(mySet_Input_unknown)

      return expect(
        mySet_O2_1 || mySet_O2_2 || mySet_O2_3
      ).toBe(
        false
      )
    })

    it('delete', () => expect(
        mySet.delete(mySet_Input_unknown)
    ).toBe(
      false
    ))
  })
}) 


describe("collections/Map", () => {
  const myMap = new Map([[-1, false], [0, undefined], [1, true]] as const)
  it("get not of key", () => {
    const anotherNumber = -2 as const
    return expect(
      //@ts-expect-error
      myMap.get(anotherNumber)
    ).toBe(
      undefined
    )
  })

  it("get upset", () => {
    const justNumber = -2
    return expect(
      myMap.get(justNumber)
    ).toBe(
      undefined
    )
  })
})
