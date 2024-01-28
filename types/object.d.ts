/**
 * Dictionary with `string` keys
 * @see https://www.typescriptlang.org/play?#code/C4TwDgpgBAIglgY2AJQDwGkoQB7AgOwBMBnKABQCcB7SC0dCEAGigBUoBeKAV3wGt8VAO74AfJyjIICKhUIYWrUQCgZ+YsCiFEKAPoaKcfAHMAXFD6MqAM1g60Bo8fE48RUo5NQA-FGAVuaHNrAEMAG2JoLn9A1Sp1TW0kZF18bgBbACMICnNLEBs7ZNQ0rJyXXAISKFLsih8-AKCoUIioxti1DS17VOI8q1t4Ys9jAB9a8qxK9yhRiYy6hpjm1siJFeVlUEgi4ABJfAxpt2rKGhz6RkUJXgFhMQkAbwBtPigjKHQAXXNWAF84gkekhDvp-E4BgUhjpDqhRhVTh4IV5fCsoMFwutok0gd0kgd8KlFjkoYVhoSSiSKIiqqRJvU0U0MS0se1Nl1ErCiepzPMGSc6RZBns4fzqeImYEWWt2bjtuBoBSAMqodhcO6CETiLivPh8lHGX5sQGckHAZV9A2GEwLMr1VxC-LknTK5bMzFtDa4nZKnQAOTVt34Wseure5gZxoBeK5SH9VrmhrtS0ds2dMKQbqlqzZ3tiQA
*/
declare type Dict<V = unknown, K extends string = string> = Record<K, V>

/** Empty object */ //TODO <never, never> vs <never, unknown>
declare type EmptyObject = Record<never, never>
declare type AnyObject = Dict<any>
declare type SomeObject = Dict<unknown>

declare type ObjectOnly<T> = Exclude<T, never|primitive|any[]>

/**
 * More predictible substitution of TS's `keyof`
 * @see https://github.com/microsoft/TypeScript/issues/33025
 * @see [tsconfig: `keyofStringsOnly`](https://www.typescriptlang.org/tsconfig#keyofStringsOnly)
 * */
declare type PropOf<T> = Ever<
  ObjectOnly<T>,
  keyof UnionToIntersection<
    ObjectOnly<T>
  >
>

/** `Part` subsitution. Keeps shape of `T` and alternates value with @default undefined */
declare type Part<T, Alt = undefined> = { [P in keyof T]: Alt | T[P] }

/** Keeps literal shape of `T` and alternate  all primitive and array leaves @default undefined */
declare type PartDeep<T, Alt = undefined> = T | (
  // TODO Replace with `ObjectOnly`
  T extends Dict
  ? { [P in keyof T]: PartDeep<T[P]>}
  : Alt
)

/**
 * `Omit` substitution. Stricts keys to omitting to be in operated type
 */
declare type Omitter<T, K extends keyof T> = Ever<Exclude<K, keyof T>, never, Omit<T, K>>

declare type Replace<T, R extends {[K in keyof T]?: unknown}> = Ever<
  Exclude<keyof R, keyof T>,
  never,
  Omit<T, keyof R> & R
>

declare type PickByValue<T, V> = Pick<T, {
  [K in keyof T]: [T[K]] extends [V] ? K : never
}[keyof T]>

declare type OmitByValue<T, V> = Omit<T, {
  [K in keyof T]: Ever<Extract<T[K], V>, K>
}[keyof T]>

/** @see https://stackoverflow.com/a/49579497/9412937 */
declare type RequiredKeys<T> = { [K in keyof T]-?:
  ({} extends { [P in K]: T[K] } ? never : K)
}[keyof T]

/** @see https://stackoverflow.com/a/49579497/9412937 */
type OptionalKeys<T> = { [K in keyof T]-?:
  ({} extends { [P in K]: T[K] } ? K : never)
}[keyof T]

/** @see https://stackoverflow.com/a/49579497/9412937 */
type WritableKeys<T> = {
  [P in keyof T]-?: ifEqual<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P>
}[keyof T];

/** @see https://stackoverflow.com/a/49579497/9412937 */
type ReadonlyKeys<T> = {
  [P in keyof T]-?: ifEqual<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>
}[keyof T];

/** @see https://github.com/microsoft/TypeScript/issues/31153#issuecomment-487872268 */
declare type KnownKeys<T> = {
  [K in keyof T]: string extends K ? never : number extends K ? never : K
} extends {[_ in keyof T]: infer U} ? U : never;

// TODO NeverKeys

// TODO Lens
// TODO Point
// TODO Pointers
