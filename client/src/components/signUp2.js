//Components
import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { string, object } from "yup";
import axios from "axios";
import styled from "styled-components";
import { Form as SemanticForm } from "semantic-ui-react";

//Styled components
const StyledForm = styled.div`
  margin: 0 auto;
  position: relative;
    
  background: #f3f3f3;
  border: 1px solid #fff;
  border-radius: 5px;
    
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
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
            <h2>Correctional facility onboarding</h2>
            <p>
              <strong>Prison name</strong>
            </p>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field
              name="name"
              format="name"
              placeholder="Prison name"
              value={values.name}
            />
          </div>
          <div>
            <p>
              <strong>Phone Number</strong>
            </p>
            {touched.phone && errors.phone && <p>{errors.phone}</p>}
            <Field
              name="phone"
              format="phone-us"
              placeholder="Phone nos(555) 555-1230"
              value={values.tel}
            />
          </div>
          <div>
            <p>
              <strong>City</strong>
            </p>
            {touched.city && errors.city && <p>{errors.city}</p>}
            <Field
              type="text"
              name="city"
              placeholder="City"
              value={values.city}
            />
          </div>
          <div>
            <p>
              <strong>State</strong>
            </p>
            <Field component="select" name="selectOption">
              <option>Select State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Field>
          </div>
        <BTN>Proceed</BTN>
        </StyledForm>
      </Form>
    </SemanticForm>
  );
};

const CreateNew = withFormik({
  mapPropsToValues({ name, phone, city, selectOption }) {
    return {
      name: name || "",
      phone: phone || "",
      city: city || "",
      selectOption: selectOption || ""
    };
  },
  //Validation schema
  validationSchema: object().shape({
    name: string()
      .min(5)
      .required("Full name is required"),
    phone: string()
      .min(5)
      .required("Phone number is required"),
    city: string().required("City is required"),
    state: string().required("State is required")
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
