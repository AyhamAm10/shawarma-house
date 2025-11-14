type UtilsType = {
  onToggleFaqItem: (id: number) => void;
};

const store = (): UtilsType => ({
  onToggleFaqItem: () => {},
});

export { store as utilsStore };
export type { UtilsType };
