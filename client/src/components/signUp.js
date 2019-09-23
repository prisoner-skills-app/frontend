import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components"
import { Form as SemanticForm, Button } from "semantic-ui-react";
import { string, object } from "yup";
import axios from "axios";

const Stretch = styled.div`
display:flex;
flex-direction:column;
width:345px;
`;

const BTN = styled.button`
width:92px;
height:38px;
margin-top:10px;
color:white;
background-color:green;
`;

const App = ({ values, errors, touched, isSubmitting, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status, users]);

  return (
    //"name" is used by Formik as unique identifier for field values
    
      
  
    <SemanticForm>         
    <Form>
      <Stretch>
      <div>
        {touched.email && errors.email && <p>
              {errors.email}</p>}
            <h2>Sign Up</h2>
       <strong><p>Email</p></strong>
        <Field
          type="email"
          name="email"
          placeholder="email@.com"
          value={values.email}
            />
    
      </div>
        

      <div> 
            
            {touched.password && errors.password && <p>{errors.password}</p>}
            
        <strong><p>Password</p></strong>
        <Field
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          autoComplete="password"
        />
      </div>
          
      <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            
        <strong><p>Confirm Password</p></strong>
        <Field
          type="password"
          name="password"
          placeholder="Confirm password"
          value={values.password}
          autoComplete="Confirm password"
        />
      </div>             
      </Stretch>
        <BTN>
          Sign Up
        </BTN>      
    </Form>
    </SemanticForm>
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
})(App);

export default SignUp;
