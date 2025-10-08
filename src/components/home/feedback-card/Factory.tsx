import { UIFactory } from "./ui";
import type { UIFactoryParams } from "./ui/Factory";

export function Factory(params: UIFactoryParams) {
  const { type } = params;
  return <UIFactory type={type} />;
}
