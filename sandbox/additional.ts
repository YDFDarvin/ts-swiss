type AntiRecord<R extends string, T, Strict extends boolean, E = never>
= Record<string, T> & (
  Strict extends true
  ? {[k in R]: E }
  : {[k in R]?: E }
)

type _A1 = AntiRecord<"a"|"b", string, false>
type _A2 = AntiRecord<"a"|"b", string, false, undefined>
type AR1 = AntiRecord<"a"|"b", string, true>
type AR2 = AntiRecord<"a"|"b", string, true, undefined>
type A_Return = {a: undefined, b: undefined, c: string}

function anti_a1(source: _A1) {
  const {a, b, c} = source
  , $return: A_Return = {a, b, c}
  return $return
}

function anti_a2(source: _A2) {
  const {a, b, c} = source
  , $return: A_Return = {a, b, c}
  return $return
}

function anti_ar1(source: AR1) {
  const {a, b, c} = source
  , $return: A_Return = {a, b, c}
  return $return
}

function anti_ar2(source: AR2) {
  const {a, b, c} = source
  , $return: A_Return = {a, b, c}
  return $return
}

type Additinioze<A, T0, E = never> = {
  [P in keyof A]: A[P] extends E ? T0 : A[P] 
}
type Additional<K extends string, T1, T2, E = never> = Additinioze<AntiRecord<K, T2, true, E>, T1, E>

type Add2Source = {items: number[], id: string}
type Add2_Additional = Additional<keyof Add2Source, Add2Source[keyof Add2Source], number>

type Additinioze2<A, S, E = never> = {
  [P in keyof A]: A[P] extends E ? S extends {[K in P]: infer X} ? X : A[P] : A[P] 
}
type Add22 = Additinioze2<AntiRecord<keyof Add2Source, number, true>, Add2Source>

function add2__2(source: Add22) {
  const {items, id, additional, additional2} = source
  return items[0] * additional * additional2 * id[0].length
}


function add2__1(source: Add2_Additional) {
  const {items, id, additional} = source
  //@ts-expect-error
  return items[0] + additional
}


type check0 = Additinioze<AntiRecord<"a", number, never>, string, never>
type check1 = Additional<"a", string, number>

function fn(source: check1) {
  const a: string = source.a
  //@ts-expect-error
  , a2: number = source.a
  , b: number = source.b
  //@ts-expect-error
  , b2: string = source.b
  , c: number = source.c
  return {a, a2, b, c}
} 

type check2 = Additional<"a"|"b", string, number>

function fn2(source: check2) {
  const a: string = source.a
  //@ts-expect-error
  , a2: number = source.a
  , b: string = source.b
  //@ts-expect-error
  , b2: number = source.b
  , c: number = source.c
  return {a, a2, b, b2, c}
} 
