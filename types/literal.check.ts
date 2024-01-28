import {
  desc,
  tsIsEqual,
  tsChecks
} from "../check"

desc("Split", () => {
  desc("Simple consts", () => {
    tsIsEqual<
      Split<"a", "/">,
      ["a"]
    >(true)
    tsIsEqual<
      Split<"/a", "/">,
      ["", "a"]
    >(true)
    tsIsEqual<
      Split<"a/", "/">,
      ["a", ""]
    >(true)
    tsIsEqual<
      Split<"/a/", "/">,
      ["", "a", ""]
    >(true)
    tsIsEqual<
      Split<"/", "/">,
      ["", ""]
    >(true)
    tsIsEqual<
      Split<"a/b/c", "/">,
      ["a", "b", "c"]
    >(true)
  })

  desc("Mix", () => {
    tsChecks<Split<"a/b"|"d/e", "/">>({
      "a/b": ["a", "b"],
      "d/e": ["d", "e"],
      //@ts-expect-error Type '"e"' is not assignable to type '"b"'
      "a/e": ["a", "e"],
      //@ts-expect-error Type '"d"' is not assignable to type '"a"'
      "d/b": ["d", "b"]
    })
    tsChecks<Split<"a/b"|"d/e/f", "/">>({
      "a/b": ["a", "b"],
      "d/e/f": ["d", "e", "f"],
      "d/e/a": ["d", "e",
        //@ts-expect-error Type '"a"' is not assignable to type '"f" | undefined'
        "a"
      ],
      //@ts-expect-error Type '"a"' is not assignable to type '"d"'
      "a/b/f": [
        "a", "b", "f"
      ]
    })
  })
})