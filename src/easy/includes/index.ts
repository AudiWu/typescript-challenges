import { Equal } from "../../utils";

export type Includes<T extends unknown[], U> = T extends [
  infer Current,
  ...infer Rest
]
  ? Equal<U, Current> extends true
    ? true
    : Includes<Rest, U>
  : false;
