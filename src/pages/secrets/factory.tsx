import State from "./state";
import RenderUi from "./ui/render-ui";
import Utils from "./utils/utiles";

export function Factory() {
  return (
    <State>
      <Utils>
        <RenderUi />
      </Utils>
    </State>
  );
}
