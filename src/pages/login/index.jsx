import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import "./index.css";
import { validateSignUpData } from "./../../utils/validation/sign-up";
const Login = () => {
  const [creds, setCreds] = useState({});

  const validate = () => {
    const validationResult = validateSignUpData(creds);
    alert(JSON.stringify(validationResult));
  };

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    const data = {
      [name]: value,
    };
    setCreds({ ...creds, ...data });
  };

  console.log({ creds });

  return (
    <div className="login-container">
      <TextField
        fullWidth
        placeholder="Enter you fullname"
        name="fullName"
        onChange={handleChange}
      />
      <TextField
        fullWidth
        placeholder="Enter you email, please"
        name="email"
        onChange={handleChange}
      />
      <TextField
        fullWidth
        placeholder="Enter you password, please"
        type="password"
        name="pass_1"
        onChange={handleChange}
        error={creds.pass_1 && creds.pass_2 && creds?.pass_1 !== creds.pass_2}
      />
      <TextField
        fullWidth
        placeholder="Repeat you password, please"
        type="password"
        name="pass_2"
        onChange={handleChange}
        error={creds.pass_1 && creds.pass_2 && creds?.pass_1 !== creds.pass_2}
      />
      <div className="flex center">
        <Button
          variant="contained"
          style={{ margin: "1rem 0", minWidth: "100%", minHeight: "2rem" }}
          onClick={validate}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Login;
