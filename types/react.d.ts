/// Doesn't work <reference types="react"/>
import type {
  JSXElementConstructor
} from "react"

/** React */
declare type GetProps<Component>
= Component extends JSXElementConstructor<infer Props>
? Props
: never
