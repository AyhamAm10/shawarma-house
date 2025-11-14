import { mirrorFactory } from "../../../hooks/use-mirror-factory";
import { stateStore } from "./state";
import { utilsStore } from "./utils";

const { useMirror, useMirrorRegistry } = mirrorFactory({
  ...stateStore(),
  ...utilsStore()
});

export { useMirror, useMirrorRegistry };
