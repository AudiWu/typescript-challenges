export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string,
  Before extends string = ""
> = From extends ""
  ? S
  : S extends `${Before}${infer L}${From}${infer R}`
  ? ReplaceAll<`${Before}${L}${To}${R}`, From, To, `${Before}${L}${To}`>
  : S;
