declare type stringy = string | number

declare type Stringable<T = unknown> = T & (
  {toString(): string}
  | {toString: string}
)
declare type stringish = stringy | Stringable

// Set-Like
declare type SettishObject<V extends string> = {[value in V]: value}
declare type Settish<T> = T[] | Set<T>

// Map-Like
declare type MappishArray<K extends number, V> = Map<K, V> | ArrayLike<V> & Record<K, V>
declare type Mappish<K extends string|symbol, V> = Map<K, V> | Record<K, V>

// Collection helpers

declare type valueOfSet<T extends Set<any>> = Parameters<T["add"]>[0]
declare type keyOfMap<T extends Map<any, any>> = Parameters<T["set"]>[0]
declare type valueOfMap<T extends Map<any, any>> = Parameters<T["set"]>[1]

// Swiss-stuff

declare type Shredded<T, S = undefined | null>
= T extends {}
? {[P in keyof T]?: S | Shredded<T[P], S>}
: S | T  
