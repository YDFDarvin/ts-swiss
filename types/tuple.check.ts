import {
  desc,
  tsIsEqual
} from "../check"

desc("`OptionalTuple`", () => {
  tsIsEqual<
    OptionalTuple<[0, 1, 2]>,
    [0?, 1?, 2?]
  >(true)
  tsIsEqual<
    OptionalTuple<[0?, 1?, 2?]>,
    [0?, 1?, 2?]
  >(true)
  tsIsEqual<
    OptionalTuple<number[]>,
    number[]
  >(true)
  tsIsEqual<
    OptionalTuple<[]>,
    []
  >(true)
})

desc("`IndexOf`", () => {
  tsIsEqual<
    IndexOf<[]>,
    never
  >(true)

  tsIsEqual<
    IndexOf<[1]>,
    0
  >(true)  

  tsIsEqual<
    IndexOf<[1, 2, 3]>,
    0|1|2
  >(true)  

  tsIsEqual<
    IndexOf<number[]>,
    number
  >(true)  
})