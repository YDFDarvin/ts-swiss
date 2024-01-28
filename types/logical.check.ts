import {
  desc,
  tsIsEqual,
  tsChecks,
  tsCheck
} from "../check"

desc("AnyOf", () => {
  desc("ab0", () => {
    type Probe = AnyOf<["a", "b", 0]>

    tsIsEqual<Probe, "a"|"b"|0>(
      //@ts-expect-error TODO
      true
    )
  
    tsChecks<Probe>({
      "a": "a",
      "b": "b",
      "0": 0,
      //@ts-expect-error
      "string": "string",
      //@ts-expect-error
      "number": 1
    })  
  })
})

desc("OneOf", () => {
  tsIsEqual<OneOf<[string, number]>, string|number>(
    //@ts-expect-error TODO
    true
  )

  desc("Two objects", () => {
    type TwoObjects = OneOf<[{"a": string}, {"b": string}]>

    tsIsEqual<
      TwoObjects,
      {"a": string, "b"?: never}
      | {"b": string, "a"?: never}
    >(
      //@ts-expect-error TODO
      true
    )

    tsChecks<TwoObjects>({
      "a": {"a": "a"},
      "b": {"b": "b"},
      //@ts-expect-error
      "empty": {},
      //@ts-expect-error
      'both': {"a": "a", "b": "b"},
      "extended": { "a": "a",
        //@ts-expect-error
        "c": "c"
      }
    })
  })

  desc("Intersection is excluded", () => {
    desc("Primitives", tsChecks<
      OneOf<["a"|"0", "b"|"0"]>
    >({
      "a": "a",
      "b": "b",
      // TODO @ts-expect-error
      "0": "0"
    }))
    desc("Primitives", tsChecks<
      OneOf<[
        {"a"?: "a", "0"?: "0"},
        {"b"?: "b", "0"?: "0"}
      ]>
    >({
      "a": {"a": "a"},
      "b": {"b": "b"},
      "a-b": {"a": "a", "b": undefined},
      "b-a": {"a": undefined, "b": "b"},
      // TODO @ts-expect-error 
      "empty": {},
      // TODO @ts-expect-error 
      "0": {"0": "0"},
      //@ts-expect-error Type '"a"' is not assignable to type 'undefined'
      "ab": {"a": "a", "b": "b"}
    }))
  })
})

desc("Ever", () => {
  desc("`never`", () => {
    tsIsEqual<Ever<never>, never>(true)
    tsIsEqual<Ever<never, true, false>, false>(true)
    tsIsEqual<Ever<never>, undefined>(false)
  })
  desc("`undefined`", () => {
    tsIsEqual<Ever<undefined>, never>(false)
    tsIsEqual<Ever<undefined>, undefined>(true)
  })
  desc("Primitive mix", () => {
    tsIsEqual<Ever<number|never>, number|never>(true)
    tsIsEqual<Ever<number|never>, number>(true)
  })

  desc("Object usage", tsIsEqual<
    Ever<never|{"a": string}>,
    {"a": string}
    >(true)
  )
})

desc("ifEqual", () => {
  tsCheck<ifEqual<never, never>>(true)
  tsCheck<ifEqual<never, undefined>>(false)
  tsCheck<ifEqual<undefined, never>>(false)

  desc("TODO `never` sensetive", () => {
    tsChecks<ifEqual<number|never, number>>({
      "current": true,
      //@ts-expect-error TODO
      "todo": false
    })
    tsChecks<ifEqual<number, number|never>>({
      "current": true,
      //@ts-expect-error TODO
      "todo": false
    })  
  })
})
