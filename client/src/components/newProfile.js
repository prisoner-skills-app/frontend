//Components
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { string, object } from "yup";
import axios from "axios";
import styled from "styled-components";
import { Form as SemanticForm } from "semantic-ui-react";

//Styled components
const StyledForm = styled.div`
  background: #f3f3f3;
  border: 1px solid #fff;
  border-radius: 5px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const BTN = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 10px;
  color: white;
  background-color: green;
  margin: 0 auto;
  position: relative;
`;

//Defining my hooks
const App = ({ values, errors, touched, effect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (effect) {
      setUsers([...users, effect]);
    }
  }, [effect, users]);

  return (
    //Profile onboarding adn styling
    <SemanticForm>
      <Form>
        <StyledForm>
          <div>
            <h2>Create New Profile</h2>
            <p>
              <strong>Prisoner name</strong>
            </p>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field
              name="name"
              format="name"
              placeholder="Franky Nunez"
              value={values.name}
            />
          </div>
          <div>
            <p>
              <strong>Skills(Comma separated)</strong>
            </p>
            {touched.skills && errors.skills && <p>{errors.skills}</p>}
            <Field
              name="skills"
              format="text"
              placeholder="Welding, Gambling, Teaching"
              value={values.skills}
            />
          </div>
          <div>
            <p>
              <strong>Highest Education</strong>
            </p>
            {touched.education && errors.education && <p>{errors.education}</p>}
            <Field
              type="text"
              name="education"
              placeholder="Highest Education"
              value={values.education}
            />
          </div>
          <div>
            <p>
              <strong>Parole Date</strong>
            </p>
            {touched.date && errors.date && <p>{errors.date}</p>}
            <Field
              type="date"
              id="start"
              name="date"
              value=""
              min="2018-01-01"
              max="2025-12-31"
              value={values.date}
            />
          </div>
          <div>
            <p>
              <strong>Description</strong>
            </p>
            {touched.desc && errors.desc && <p>{errors.desc}</p>}
            <textarea
              class="form-control w-100"
              name="message"
              id="message"
              cols="30"
              rows="9"
              placeholder="Enter Message"
              value={values.message}
            ></textarea>
          </div>
          <div>
            <p>
                <strong>Approved for offsite work</strong>
            </p>
            <Field type="checkbox" id="check" name="check" checked={values.terms}/>
          </div>
          <BTN>Create Profile</BTN>
          <BTN>Edit Profile</BTN>
        </StyledForm>
      </Form>
    </SemanticForm>
  );
};

const CreateNew = withFormik({
  mapPropsToValues({ name, skills, education, date, message, check}) {
    return {
      name: name || "",
      skills: skills || "",
      education: education || "",
      date: date || "",
      message: message || "",
      check: check || ""
    };
  },
  //Validation schema
  validationSchema: object().shape({
    name: string() .min(5) .required("Full name is required"),
    skills: string().min(5) .required("Skills is required"),
    education: string().required("Education is required"),
    date: string().required("Parole date is required")
  }),

  // Submit button handling
  handleSubmit(values, { setEffect }) {
    axios
      .post("#", values)

      .then(response => {
        setEffect(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log(error.response);
      });
  }
})(App);

export default CreateNew;
