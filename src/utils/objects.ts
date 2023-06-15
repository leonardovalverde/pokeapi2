const createArrayFromObject = (obj: any, key: string) => {
  return Object.keys(obj).map((item: string) => obj[item][key]);
};

export { createArrayFromObject };
