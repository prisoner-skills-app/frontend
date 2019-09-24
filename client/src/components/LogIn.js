import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";
import { Form as SemanticForm } from "semantic-ui-react";
import * as Yup from "yup";
import axios from "axios";

const Stretch = styled.div`
  display: flex;
  flex-direction: column;
  width: 345px;
  margin:5px
  p{
    margin:15px;
  }
`;

const BTN = styled.button`
  width: 92px;
  height: 38px;
  color: white;
  background-color: royalblue;
  margin:5px;
`;

const Login = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status, users]);
  return (
    <SemanticForm>
      <Form>
        <Stretch>
          <div>
            <h2>Login</h2>
            <strong>
              <p>Email</p>
            </strong>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field
              type="email"
              name="email"
              placeholder="email@.com"
              value={values.email}
            />
          </div>

          <div>
            <strong>
              <p>Password</p>
            </strong>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              autoComplete="password"
            />
          </div>
        </Stretch>
        <BTN>Login</BTN>
      </Form>
    </SemanticForm>
  );
};

//Initial values, Handle validation, Submission
//HOC created to conect to our App component
const LogIn = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required()
  }),

  handleSubmit(values, { resetForm, setStatus, setErrors, setSubmitting }) {
    axios
      .post("#", values)

      .then(response => {
        setStatus(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });

    setTimeout(() => {
      if (values.email === "luisocasio03@gmail.com") {
        setErrors({ email: "Email already in use" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
    console.log(values);
  }
})(Login);

export default LogIn;
