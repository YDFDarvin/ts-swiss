/**
 * Resolves promise
 * @see https://stackoverflow.com/a/49889856/9412937 
*/
declare type Unpromise<P> = P extends PromiseLike<infer T> ? Unpromise<T> : P

/** @see https://stackoverflow.com/a/50375286/10325032 */
declare type UnionToIntersection<Union> = (
  Union extends any ? (argument: Union) => void : never
) extends (argument: infer Intersection) => void
? Intersection
: never;
