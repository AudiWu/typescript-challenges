import { HelloWorld } from ".";
import { Equal, Expect } from "../../utils";

type test = Expect<Equal<HelloWorld, string>>
