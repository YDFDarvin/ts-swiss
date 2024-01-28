type I = Iterable<[string, number]>

type Extractor<T> = T extends Iterable<infer T> ? T : any

type y = Extractor<I>


type M = Map<string, number>

type Z = Extractor<M>
