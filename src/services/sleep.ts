export const sleep = async (ms: number = 500): Promise<number> => {
  return new Promise((resolve) => setTimeout(() => resolve(ms), ms));
};
