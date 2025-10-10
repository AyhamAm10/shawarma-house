import type { Section } from "../../../api/types/section.type";

type ApiState = {
  data: Section[];
  loading: boolean;
  error: any;
};

const store = (): ApiState => ({
  data: [],
  loading: false,
  error: null,
});

export { store as apiStore };
export type { ApiState };
