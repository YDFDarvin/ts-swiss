export {
  desc,
  tsCheck,
  tsChecks,
  tsIsEqual
}

function desc(_: string, _1: unknown) {}

function tsChecks<T>(suites: Record<string, T>) {return suites}
function tsCheck<T>(suite: T) {return suite}

function tsIsEqual<X, Y, Then = true, Else = false>(_: ifEqual<X, Y, Then, Else>) {}
