import { Variant1 } from "./Variant1";
import { Varient2 } from "./Varient2";
import { Varient3 } from "./Varient3";

type Params = {
  type: "variant1" | "variant2" | "variant3";
};

const UIFactory = (params: Params) => {
  const { type } = params;
  switch (type) {
    case "variant1":
      return <Variant1 />;
    case "variant2":
      return <Varient2 />;
    default:
      return <Varient3 />;
  }
};

export { UIFactory };
export type { Params as UIFactoryParams };
