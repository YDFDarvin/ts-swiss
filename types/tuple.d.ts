/** Tuple
 * @see based on https://stackoverflow.com/a/52490977/9412937
 */
type _Tuple<
  T,
  Length extends number,
  Optional extends boolean,
  Accumulated extends unknown[]
> = Length extends Accumulated["length"]
  ? Accumulated
  : _Tuple<
    T,
    Length,
    Optional,
    Optional extends true
    ? [...Accumulated, T?]
    : [...Accumulated, T]
  >

// type TR = _Tuple<number, 1, false, []>
// type TO = _Tuple<number, 2, true, _Tuple<number, 1, false, []>>

/** If `MinLength` > `MaxLength` will be loop */
//@ts-expect-error
declare type Tuple<T, MinLength extends number, MaxLength extends number = MinLength> = _Tuple<T, MaxLength, true, _Tuple<T, MinLength, false, []>>

//@ts-expect-error
declare type Range<Start extends number, End extends number> = Tuple<undefined, Start, End>["length"]

declare type OptionalTuple<T extends any[]> = number extends T["length"] ? T
: T extends [...infer Etc, infer TLast]
  ? [...OptionalTuple<Etc>, TLast?]
  : T

declare type IndexOf<T extends any[]> = number extends T["length"] ? number
: T extends [...infer Etc, infer _]
  ? OptionalTuple<Etc>["length"]
  : never

// TODO Check `Pick` from Tuple
