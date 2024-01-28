
/**
 * Empty array
 * @todo vs `[]`
*/
declare type EmptyArray = never[]

declare type Maybe<T> = undefined | T

/** Include `null` and `undefined` to T */
declare type Nullable<T> = null | undefined | T

declare type AreEqualE<T1, T2> = Exclude<T1, T2> extends never ? Exclude<T2, T1> extends never ? true : false : false
declare type AreEqualD<T1, T2> = T1 extends T1&T2 ? T2 extends T1&T2 ? true : false : false
declare type AreEqualC<T1, T2> = T1|T2 extends T1 ? T1|T2 extends T2 ? true : false : false

//declare type Keyof<T> = T extends Record<infer K, unknown> ? K : never

// Magic
declare type IsTupleL<T extends readonly unknown[]> = number extends T["length"] ? false : true
declare type IsTupleI<T extends readonly unknown[]> = string extends Indexes<T> ? false : true


// TODO Proto = Array
declare type Indexes<T extends readonly unknown[], Proto = EmptyArray> = Exclude<keyof T, keyof Proto>
declare type OwnTypes<T extends readonly unknown[], Proto = Object> = Exclude<keyof T, keyof Proto>
