
function foo<K extends string>(_: SingletonOnly<K>): void {}

declare const singleton: 'foo';
foo(singleton);

declare const union: "foo" | "bar";
//@ts-expect-error
foo(union); // Compile-time error

declare const keysObj: keyof ({"foo": string, "bar": number})
//@ts-expect-error
foo(keysObj)

declare const typeString: string;
//@ts-expect-error
foo(typeString); // Compile-time error