import {
  desc,
  tsIsEqual,
} from "../check"

desc("`KeyOf`", () => {
  tsIsEqual<KeyOf<{"a": "a"}|[0]>, "a"|0>(true)
})

desc("`ValueOf`", () => {
  desc("Object", () => {
    tsIsEqual<
      ValueOf<{"a": "a", "b": "b"}>,
      "a"|"b"
    >(true)
    tsIsEqual<
      ValueOf<{"a": "a", "b": "b"}, "a">,
      "a"
    >(true)
  })

  desc("Array", () => {
    tsIsEqual<
      ValueOf<[1, 2]>,
      1|2
    >(true)
    tsIsEqual<
      ValueOf<[1, 2], 0>,
      1
    >(true)
  })

  desc("Union", () => {
    tsIsEqual<
      ValueOf<[1, 2]|{"a": "a", "b": "b"}>,
      1|2|"a"|"b"
    >(true)

    tsIsEqual<
      ValueOf<[1, 4]|[2, 5]|{0: "a", 1: 6}|{"0": "b", 1: 7}, 0>,
      1|2|"a"|"b"
    >(true)

    tsIsEqual<
      ValueOf<[1, 4]|[2, 5]|{0: "a", 1: 6}|{"0": "b", 1: 7}, "0">,
      // WTF
      1|2|"a"|"b"|4|5
    >(true)
  })
})
