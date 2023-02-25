import React, { useCallback } from "react";

import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./login.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(3).required(),
});

const handleOnSubmit = (values) => {
  const fullName = Object.keys(values)
    .map((key) => values[key])
    .join(" ");
  alert(`Hello ${fullName}!`);
};

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <Container maxWidth="sm" className="login">
      <form onSubmit={formik.handleSubmit} className="login-form">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <h1>Welcome Back</h1>
          <TextField
            id="outlined-basic-email"
            label="E-mail"
            variant="outlined"
            type="email"
            autoComplete="true"
            value={formik.values.email}
            onChange={(e) => setInputValue("email", e.target.value)}
          />
          <small>{formik.errors.email}</small>

          <TextField
            id="outlined-basic-pass"
            label="Password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            onChange={(e) => setInputValue("password", e.target.value)}
          />
          <small>{formik.errors.password}</small>
          {!!formik.errors.password && <br />}
          <Button variant="contained" type="submit" disabled={!formik.isValid}>
            Login
          </Button>
          <div>
            don’t have account?{" "}
            <Link to={"/signup"}>
              <Button>sign up</Button>
            </Link>
          </div>
          <Divider style={{ width: "100%" }} color="#363759">
            OR
          </Divider>
          <Stack
            width={"100%"}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <GoogleIcon className="logins-icons" htmlColor="#fff" />
            <AppleIcon className="logins-icons" htmlColor="#fff" />
            <FacebookIcon className="logins-icons" htmlColor="#fff" />
          </Stack>
        </Stack>
      </form>
    </Container>
  );
}

export default Login;
