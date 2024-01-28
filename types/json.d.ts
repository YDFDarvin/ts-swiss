declare type JsonFalsy = null|false|0|""
declare type JsonPrimitive = null|boolean|number|string
declare type JsonObject = {[property: string]: Json}
declare type JsonStructure<T = unknown> = T[] | {[key: string]: T}

// Changing here to Structured makes Jsoned Circular
declare type Json = JsonPrimitive | Json[] | {[property: string]: Json} 
