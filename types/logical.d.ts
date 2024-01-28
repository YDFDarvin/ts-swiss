/**
 * An instance is valid if is valid against at least one of setted
 * @see https://json-schema.org/understanding-json-schema/reference/combining.html#anyof
*/
declare type AnyOf<T extends [unknown, unknown, unknown?, unknown?, unknown?]> = T[0] | T[1] | T[0]&T[1] | T[2] | T[0]&T[2] | T[1]&T[2] | T[0]&T[1]&T[2] | T[3] | T[0]&T[3] | T[1]&T[3] | T[0]&T[1]&T[3] | T[2]&T[3] | T[0]&T[2]&T[3] | T[1]&T[2]&T[3] | T[0]&T[1]&T[2]&T[3] | T[4] | T[0]&T[4] | T[1]&T[4] | T[0]&T[1]&T[4] | T[2]&T[4] | T[0]&T[2]&T[4] | T[1]&T[2]&T[4] | T[0]&T[1]&T[2]&T[4] | T[3]&T[4] | T[0]&T[3]&T[4] | T[1]&T[3]&T[4] | T[0]&T[1]&T[3]&T[4] | T[2]&T[3]&T[4] | T[0]&T[2]&T[3]&T[4] | T[1]&T[2]&T[3]&T[4] | T[0]&T[1]&T[2]&T[3]&T[4]

/**
 * Easier handle pattern than `T1 | T2` for defined keys
 * @see https://json-schema.org/understanding-json-schema/reference/combining.html#oneof
*/
declare type OneOf<T extends [unknown, unknown]> = (
  T[0] & Omit<{[K in keyof T[1]]?: never}, keyof T[0]>
) | (
  T[1] & Omit<{[K in keyof T[0]]?: never}, keyof T[1]>
)

/**
 * `never` handler
 * @todo Consider `V = Exclude<E, never>`
 * @todo Consider names `forEver`, `ifEver`
 * @todo Consider `isNever` with function check
 */
declare type Ever<E, Then = Exclude<E, never>, Else = never> = [E] extends [never] ? Else : Then

/**
 * Checks two types equality
 * @see https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
 * @see https://github.com/microsoft/TypeScript/issues/27024
 */
 type ifEqual<X, Y, Then = true, Else = false> = (
  <T>() => (T extends X ? 1 : 2)
) extends (
  <T>() => (T extends Y ? 1 : 2)
) 
? Then
: Else
