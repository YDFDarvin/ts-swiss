type Nullable<T> = T | null
type Maybe<T> = T | undefined
type Part<T> = Nullable<T> | Maybe<T>

export default omap

omap({a: 1, b: "2"}, {"x": "a", "y": "b"})

type oomap<
T extends {}, M extends {[k: string]: keyof T}
>= {[P in keyof M]: T[M[P]]}
function omap<
  T extends {}, M extends {[k: string]: keyof T}
>(
  source: T, map: M
) :oomap<T,M> {
  const $result: Partial<oomap<T,M>> = {}
  for (let key in map) {
    $result[key] = source[map[key]]
  }
  return $result as oomap<T,M>
}