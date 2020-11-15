import { addElement, removeElement } from "./../../../../methods/array";

test("add elem to array ", () => {
  expect(addElement([], 1)).toStrictEqual([1]);
});

test("add remove elem from array ", () => {
  expect(removeElement([1, 22, 359], 1)).toStrictEqual([1, 359]);
});
