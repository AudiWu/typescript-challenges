type Space = " " | "\n" | "\t";

export type Trim<S> = S extends `${Space}${infer T}` | `${infer T}${Space}`
  ? Trim<T>
  : S;
