
// Defined properties
type T1 = {
  "a": string
  "b": number
}

type T2 = {
  "b": number
  "c": string
}


function tsIntersection(source: T1 | T2 )  {
  //@ts-expect-error makes `a, c: any`
  const {a, c} = source
  /** `value: any` */
  , value = a ?? c
  /** `value2: any` */
  , value2
  //@ts-expect-error
  = source.a
  //@ts-expect-error
  ?? source.c

  , defaultTsWay = "a" in source ? source.a : source.c
  //@ts-expect-error
  , shorterAttempy = source["a" in source ? "a" : "c"]
  
  return {value, value2, defaultTsWay}
}

function oneOfExample(source: OneOf<[T1,T2]> )  {
  const {a, c} = source
  /** Additional `undefined` because TS lost link with source but in any case much better */
  , value: string|undefined = a ?? c
  /** Or just use `source` and no troubles at all */
  , value2: string = source.a ?? source.c

  return {value, value2}
}

