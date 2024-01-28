type Excl1<K extends string, V1, V2> = ({
  [k: string]: V1
} & {
  [k in K]?: never
}) | {
  [k in K]: V2
}


type Excl3<K extends string, V1, V2> = {
  k: V2
  [k: string]: unknown 
}

type Excl2<K extends string, V1, V2> = AnyOf<
  {[k: string]: V1|V2},
  {[k in K]: V2}
>

function check(source: Excl2<"a", number, string> | {a: number}) {
  const {a, b} = source
}

function stringif(x: string) {
  return `${x}`
}

type ToString = {
  toString() :string
}

stringif(stringish())

function stringish<T extends string|ToString = string|ToString>() :T {
  return {
    toString: () => "2"
  } as unknown as T
}

const m = new Map([[0, 1]])
m.has("")

const numarr = [1,2,3] as const
, shr: Shredded<typeof numarr> = [,  ,]