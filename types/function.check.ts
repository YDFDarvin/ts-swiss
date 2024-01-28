import {
  desc,
  tsIsEqual
} from "../check"

desc("Return", () => {
  tsIsEqual<
    Return<() => "sync">,
    "sync"
  >(true)
  tsIsEqual<
    Return<() => Promise<"async">>,
    "async"
  >(true)
  tsIsEqual<
    Return<() => Promise<Promise<"asyncer">>>, "asyncer"
  >(true)
})
