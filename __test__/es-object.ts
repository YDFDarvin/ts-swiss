const entries = Object.entries({
  a: 1,
  b: false
})
, checks: typeof entries = [
  ["a", 1],
  ["b", false],

  ["a", 2],
  ["b", true],
  //@ts-expect-error
  ["a", "1"],
  //@ts-expect-error
  ["a", false]
] 

