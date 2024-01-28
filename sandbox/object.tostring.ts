const obj = {"a": "x"}
, objWithStr = {"a": "x", toString: () => "a"}
//weird
, objNotStr: ObjectStringable = {}
//weird
, objStr: ObjectStringable = {"a": "x", toString: () => "a"}

function stringify0(x: Object) : string {
  //@ts-expect-error
  return x.toString()
}

stringify0(obj)
stringify0(objWithStr)
stringify0(objNotStr)
stringify0(objStr)

function stringify1(x: ObjectStringable) : string {
  return x.toString()
}

stringify1(obj)
stringify1(objWithStr)
stringify1(objNotStr)
stringify1(objStr)

function stringify2<T extends ObjectStringable>(x: T) : string {
  return x.toString()
}

stringify2(obj)
stringify2(objWithStr)
stringify2(objNotStr)
stringify2(objStr)
