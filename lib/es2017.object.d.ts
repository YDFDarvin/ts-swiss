/// <reference lib="es2017.object" />

interface ObjectConstructor {
  entries<T extends {[k: string]: any}>(o: T): {[P in keyof T]: [P, T[P]]}[keyof T][]
}