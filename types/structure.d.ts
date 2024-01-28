declare type KeyOf<T extends AnyObject>
= PropOf<T> | IndexOf<Extract<T, any[]>>

/** For Objects and Arrays */ 
declare type ValueOf<
  T extends AnyObject,
  K extends KeyOf<T> = KeyOf<T>
> =
//@ts-expect-error WTF
ObjectOnly<T>[Extract<K, PropOf<T>>]
// (
//   [ObjectOnly<T>] extends [never] ? never 
//   //@ts-expect-error WTF
//   : ObjectOnly<T>[Extract<K, PropOf<T>>]
// )
| Extract<T, any[]>[Extract<K, IndexOf<Extract<T, any[]>>>]
