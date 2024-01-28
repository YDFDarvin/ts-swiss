/** @see https://stackoverflow.com/a/53955431 */
type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

/** @see https://stackoverflow.com/a/60807986/9412937 */
type SingleKey<T> = IsUnion<keyof T> extends true ? never : {} extends T ? never : T;

type IsSingleton<T>
= symbol extends T
? false
: string extends T
? false
: number extends T
? false
: boolean extends T
? false
/** @see https://stackoverflow.com/questions/53953814/typescript-check-if-a-type-is-a-union/53955431 */
: [T] extends [UnionToIntersection<T>] ? true : false

/** @see https://stackoverflow.com/a/58411963/9412937 */
type SingletonOnly<T> = IsSingleton<T> extends true
? T
: never
