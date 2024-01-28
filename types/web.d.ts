declare type ExtractParams<Route extends string, Collected extends string = never, Tags extends [string, string] = ["{", "}"]>
= Route extends `${string}${Tags[0]}${infer P}${Tags[1]}${infer Next}`
? ExtractParams<Next, Collected|P, Tags>
: Collected
