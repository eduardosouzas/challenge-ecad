export const updateState = (data) => {
  const base = {
    state: false,
    data: data.data ? data.data : null,
  };

  return base;
};
