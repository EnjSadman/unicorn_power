export const dataGetter = async () => {
  const result = await fetch('./data.json');

  return result.json();
};
