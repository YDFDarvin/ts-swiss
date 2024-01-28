/// <reference lib="es2015.core" />
/// <reference lib="es5" />

interface ObjectConstructor {
  keys<T extends ArrayLike<any>>(o: T): string[]
  keys<T extends {}>(o: T): (string & keyof T)[]
}