/// <reference lib="es5" />
/// <reference path="../types/js.d.ts"/>

interface JSON {
  parse(source: string) :Json
  parse<R extends JsonReviver<any>>(text: string, reviver: R): ReturnType<R>;
}
