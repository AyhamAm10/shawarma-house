type UtilsType = {
  onChangeTab: (id: number) => void;
};

const store = (): UtilsType => ({
  onChangeTab: () => {},
});

export { store as utilsStore };
export type { UtilsType };
