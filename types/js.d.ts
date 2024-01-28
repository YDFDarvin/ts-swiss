declare type JsonReviver<T> = (this: JsonStructure<T>, key: string, value: JsonStructure<T>) => T

/** NB! Without `NaN` https://developer.mozilla.org/en-US/docs/Glossary/Falsy */
declare type falsy = false | 0 | -0 | 0n | "" | null | undefined // | NaN

/** @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive */
declare type primitive = undefined | null | boolean | number | string | bigint | symbol

declare type stringed = "null" | "undefined" | "false" | "true" | "[object Object]"
