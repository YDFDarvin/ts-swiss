const undefined_NOT_extends_never: undefined extends never     ? true : false = false
const null_NOT_extends_never     : null      extends never     ? true : false = false
const never_extends_undefined    : never     extends undefined ? true : false = true
const never_extends_null         : never     extends null      ? true : false = true
