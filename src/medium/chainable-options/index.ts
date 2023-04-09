export type Chainable<O = {}> = {
  option<K extends string, V>(
    key: K extends keyof O ? (V extends O[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<O, K> & { [P in K]: V }>;
  get(): O;
};
