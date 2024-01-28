const obj = {a: 1, b: 2}
, k = Object.keys(obj)
, kv = Object.keys([0, 1, 2])
, v = Object.values(obj)
, e = Object.entries(obj)
, clone = Object.fromEntries(e)
, arrayEntried = Object.fromEntries([[1, 2]])