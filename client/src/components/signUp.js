import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { Button } from "semantic-ui-react";
import { string, object } from "yup";
import axios from "axios";



const App = ({ values, errors, touched, isSubmitting, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status, users]);

  return (
    //"name" is used by Formik as unique identifier for field values

    <Form>
      
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}

        <Field
          type="email"
          name="email"
          placeholder="email@.com"
          value={values.email}
        />
      </div>

      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field
          type="password"
          name="password"
          placeholder="password"
          value={values.password}
          autoComplete="password"
        />
      </div>

      <Field component="select" name="selectChoice">
        <option value="Yes to terms">Agree</option>
        <option value="No to terms">Disagree</option>
      </Field>

      <label>
        <Field type="checkbox" name="terms" checked={values.terms} />
      </label>

      <Button
        class="ui button active"
        class="ui button active"
        disabled={isSubmitting}
        type="signup"
      >
        Sign up
      </Button>
    </Form>
  );
};

//Initial values, Handle validation, Submission 
//HOC created to conect to our App component
const SignUp = withFormik({
  mapPropsToValues({email, password, terms, selectChoice }) {
    return {      
      email: email || "",
      password: password || "",
      terms: terms || false,
      selectChoice: selectChoice || "Agree"
    };
  },

  validationSchema: object().shape({
    email: string()
      .email()
      .required(),
    password: string()
      .min(7)
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
})(App);

export default SignUp;
