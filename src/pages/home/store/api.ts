import type { Branch } from "../../../api/types/branches.type";
import type { Section } from "../../../api/types/section.type";

type ApiState = {
  data: Section[];
  loading: boolean;
  error: any;
  branches: Branch[];
};

const store = (): ApiState => ({
  data: [],
  loading: false,
  error: null,
  branches: [],
});

export { store as apiStore };
export type { ApiState };
