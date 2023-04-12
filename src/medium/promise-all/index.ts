import { MyAwaited } from "../../easy/awaited";

export declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: MyAwaited<T[P]> }>;
