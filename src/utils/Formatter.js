export const formatter = (test) => {
  let create = test.replace(/"/g, "");
  return eval(create);
};
