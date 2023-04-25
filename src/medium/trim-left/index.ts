type Space = " " | "\n" | "\t";

export type TrimLeft<S> = S extends `${Space}${infer T}` ? TrimLeft<T> : S;

