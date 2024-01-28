/// <reference lib="es2019.object" />

interface ObjectConstructor {
  fromEntries<T extends Iterable<[string, unknown]>>(entries: T):
  T extends Iterable<[infer K, infer V]> 
  ? {[k in K & string]: V} 
  : {[k: string]: unknown}

  fromEntries<T extends Iterable<[PropertyKey, unknown]>>(entries: T):
  T extends Iterable<[PropertyKey, infer V]> 
  ? {[k: string]: V} 
  : {[k: string]: unknown}

  fromEntries<T extends Iterable<unknown>>(entries: T):
  T extends Iterable<(infer V)[]> 
  ? {[k: string]: V} 
  : {[k: string]: unknown}
}