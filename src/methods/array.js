export const addElement = (array = [], elem) => {
  if (hasNull(elem)) return array;

  array.push(elem);
  return array;
};

export const removeElement = (array = [], index) => {
  const afterDelete = array.filter((item, idx) => index !== idx);
  return afterDelete;
};

export const hasNull = (input) => {
  return input == null;
};
