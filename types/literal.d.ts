declare type Split<
  Source extends string,
  Delimiter extends string,
  // TODO Keep extends boolean = false,
  // TODO Append extends boolean = false
>
= Source extends `${infer Chunk}${Delimiter}${infer Etc}`
? [Chunk, ...Split<Etc, Delimiter>]
: [Source]