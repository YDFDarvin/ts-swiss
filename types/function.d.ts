/** Monad function */
declare type Monad<R = unknown, A = unknown> = (parameter: A) => R
/**
 * Pascal terms - no return
 * @todo Consider `=> void|undefined`
*/
declare type Procedure<A extends any[] = []> = (...args: A) => void
/** Function generic */
declare type Fn<R = unknown, A extends any[] = []> = (...args: A) => R

declare type Arg<I extends number, F extends Fn> = Parameters<F>[I]
declare type Arg0<F extends Fn> = Parameters<F>[0]
declare type Arg1<F extends Fn> = Parameters<F>[1]
declare type Arg2<F extends Fn> = Parameters<F>[2]
declare type Arg3<F extends Fn> = Parameters<F>[3]
declare type Arg4<F extends Fn> = Parameters<F>[4]
declare type Arg5<F extends Fn> = Parameters<F>[5]

/**
 * Awaited return of Function
 * @todo Consider `Pick` with second argument
*/
declare type Return<F extends Fn> = Unpromise<ReturnType<F>>

// declare type Monadish<A extends PropertyKey, R> = Monad<A,R> | Record<A, R> 
// declare type Monadic<A extends PropertyKey, R> = Nullable<Monad<A,R> | Record<A, R> | boolean>
