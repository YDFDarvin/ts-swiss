/// <reference lib="es5" />


interface Object {
  // toString(): any
}

// TODO try with native function
// TODO try without lib
interface Object {
  toString(): unknown
}

type _ObjectStringable = Omit<Object, "toString"> & {
  toString(): string
}

interface ObjectStringable extends Object {
  toString(): string
}

type tstr = ObjectStringable["toString"]
