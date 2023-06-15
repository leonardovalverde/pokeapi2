const getId = (url: string) => {
  const id = url.split("/")[6];
  return id;
};

export { getId };
