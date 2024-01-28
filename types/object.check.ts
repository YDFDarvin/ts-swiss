import {
  desc,
  tsIsEqual,
  tsChecks
} from "../check"

desc("`KeyOf`", () => {
  desc("Primitives", () => {
    tsIsEqual<keyof number, never>(false)
    tsIsEqual<PropOf<number>, never>(true)
  })

  desc("`never`", () => {
    tsIsEqual<keyof never, string|number|symbol>(true)
    tsIsEqual<PropOf<never>, never>(true)
  })

  desc("Mix", () => {
    type Mix = never | number | {"a": string}
    tsIsEqual<keyof Mix, never>(true)
    tsIsEqual<PropOf<Mix>, "a">(true)
  })

  desc("Objects union", () => {
    //* @see Check `OneOf` */
    type Union = {"a": "a"} | {"b": "b"}
    tsIsEqual<keyof Union, never>(true)
    tsIsEqual<PropOf<Union>, "a"|"b">(true)
  })

  desc("Array keys", () => {
    tsChecks<keyof string[]>({
      "reduce": "reduce",
      "number": 3,
      //@ts-expect-error
      "0": "0",
      //@ts-expect-error
      "3": "3"
    })
    tsIsEqual<PropOf<string[]>, never>(true)

    tsChecks<keyof [string, string]>({
      "reduce": "reduce",
      "number": 3,
      "0": "0",
      //@ts-expect-error
      "3": "3"
    })
    tsIsEqual<PropOf<[string, string]>, never>(true)
  })
})

desc("`Omitter`", () => {
  tsIsEqual<
    Omit<{"a": string}, "b">,
    {"a": string}
  >(true)
  tsIsEqual<
    Omitter<{"a": string},
      //@ts-expect-error Type '"b"' does not satisfy the constraint '"a"'
      "b"
    >,
    never
  >(true)
})

desc("`Replace`", () => {
  desc("Replace required value", () => {
    type Probe = Replace<
      {"req": 0, "opt"?: 0},
      {"req": 1}
    >
    tsIsEqual<Probe, {"req": 1, "opt"?: 0}>(
      //@ts-expect-error TODO
      true
    )
    tsChecks<Probe>({
      "Req replaced": {"req": 1},
      "Full": {"req": 1, "opt": 0},
      //@ts-expect-error Property '"req"' is missing
      "No req": {
        "opt": 0
      }
    })
  })

  desc("Replace optional value", () => {
    type Probe = Replace<
      {"req": 0, "opt"?: 0},
      {"opt"?: 1}
    >
    tsIsEqual<Probe, {"req": 0, "opt?": 1}>(
      //@ts-expect-error TODO
      true
    )
    tsChecks<Probe>({
      "`opt` changed": {"req": 0, "opt": 1},
      "`opt` is optional": {"req": 0},
      //@ts-expect-error Property '"req"' is missing
      "`req` is required": {
        "opt": 1
      },
    })
  })

  desc("Replace required with optional", () => {
    type Probe = Replace<
      {"req": 0, "opt"?: 0},
      {"req"?: "optional"}
    >
    tsIsEqual<Probe, {"req"?: "optional", "opt"?: 0}>(
      //@ts-expect-error TODO
      true
    )
    tsChecks<Probe>({
      "Empty": {},
      "`req` replaced": {"req": "optional"},
      "Full": {"req": "optional", "opt": 0},
    })
  })

  desc("Replace optional with required", () => {
    type Probe = Replace<
      {"req": 0, "opt"?: 0},
      {"opt": "required"}
    >
    tsIsEqual<Probe, {"req": 0, "opt": "required"}>(
      //@ts-expect-error TODO
      true
    )
    tsChecks<Probe>({
      "`opt` is changed": {"req": 0, "opt": "required"},
      //@ts-expect-error Property '"opt"' is missing
      "opt is required": {
        "req": 0
      },
      //@ts-expect-error Property '"a"' is missing 
      "req is omitted": {
        "opt": "required"
      }
    })
  })
})

desc("`PickByValue`", () => {
  tsIsEqual<PickByValue<
    {"1": 1, "12": 1|2, "13": 1|3, "23": 2|3},
    1|4
  >,
    {"1": 1}
  >(true)
})

desc("`OmitByValue`", () => {
  tsIsEqual<OmitByValue<
    {"1": 1, "12": 1|2, "13": 1|3, "23": 2|3},
    2|4
  >,
    {"1": 1, "13": 1|3}
  >(true)
})
