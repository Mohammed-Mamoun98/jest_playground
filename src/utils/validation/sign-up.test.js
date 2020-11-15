const { validateSignUpData } = require("./sign-up");

test("enter data prperly ", () => {
  const data = {
    fullName: "Moahmmed",
    email: "test@gmail.com",
    pass_1: "123456",
    pass_2: "123456",
  };

  const { result, msg } = validateSignUpData(data);
  expect(result).toBe(true);
});

test("enter empty data", () => {
  const data = {};
  const { result, msg } = validateSignUpData(data);
  expect(msg).toBe("not enough entries!");
});

test("enter diffrent passwords", () => {
  const data = {
    fullName: "Moahmmed",
    email: "test@gmail.com",
    pass_1: "123456",
    pass_2: "1234566516",
  };
  const { result, msg } = validateSignUpData(data);
  expect(msg).toBe("not identical passwords!");
});

test("enter invalid email format", () => {
  const data = {
    fullName: "Moahmmed",
    email: "testgmail.com",
    pass_1: "123456",
    pass_2: "123456",
  };
  const { result, msg } = validateSignUpData(data);
  expect(msg).toBe("invalid email foramt");
});
