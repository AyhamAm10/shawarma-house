import { mirrorFactory } from "../../../hooks/use-mirror-factory";
import { apiStore } from "./api";

const { useMirror, useMirrorRegistry } = mirrorFactory({
  ...apiStore(),
});

export { useMirror, useMirrorRegistry };
