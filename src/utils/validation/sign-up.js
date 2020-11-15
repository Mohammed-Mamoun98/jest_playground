import validator from "validator";
const { isEmail } = validator;

export const validateSignUpData = (data) => {
  let result = false;
  if (!data) return { result, msg: "there is no data registerd!" };

  //validate how the data will look like
  //test how many entries
  const ENTRIES_NUM = 4;
  const actualEntries = Object.values(data);

  if (actualEntries.length !== ENTRIES_NUM)
    return { result, msg: "not enough entries!" };

  //test identical passwords
  if (data.pass_1 !== data.pass_2)
    return { result, msg: "not identical passwords!" };

  //email is valid

  if (!isEmail(data.email)) return { result, msg: "invalid email foramt" };

  return { result: true, msg: "" };
};
