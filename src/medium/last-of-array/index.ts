export type Last<T extends unknown[]> = T extends [...infer X, infer L]
  ? L
  : never;
