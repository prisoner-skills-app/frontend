//Components
import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { string, object } from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import { Form as SemanticForm } from 'semantic-ui-react';

//Styled components
const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
const BTN2 = styled.button`
    width: 100px;
    height: 40px;
    margin-top: 10px;
    color: red;
    background-color: white;
    margin: 0 auto;
    position: relative;
`;

const App = ({ values, errors, touched, effect, handleSubmit }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (effect) {
            setUsers([...users, effect]);
        }
    }, [effect, users]);

    return (
        //Profile onboarding adn styling
        <SemanticForm as={Form} onSubmit={handleSubmit}>
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
                    {touched.education && errors.education && (
                        <p>{errors.education}</p>
                    )}
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
                    <Field
                        type="checkbox"
                        id="check"
                        name="check"
                        checked={values.terms}
                    />
                </div>
                <SemanticForm.Button type="submit">
                    Create Profile
                </SemanticForm.Button>
                <SemanticForm.Button type="submit">
                    Cancel
                </SemanticForm.Button>
            </StyledForm>
        </SemanticForm>
    );
};

const CreateNew = withFormik({
    mapPropsToValues({ name, skills, education, date, message, check }) {
        return {
            name: name || '',
            skills: skills || '',
            education: education || '',
            date: date || '',
            message: message || '',
            check: check || '',
        };
    },
    //Validation schema
    validationSchema: object().shape({
        name: string()
            .min(5)
            .required('Full name is required'),
        skills: string()
            .min(5)
            .required('Skills is required'),
        education: string().required('Education is required'),
        date: string().required('Parole date is required'),
    }),

    handleSubmit(values, { setEffect }) {
        console.log('hello!');

        // axios
        //     .post('#', values)
        //
        //     .then(response => {
        //         setEffect(response.data);
        //         console.log(response);
        //     })
        //     .catch(error => {
        //         console.log(error.response);
        //     });
    },
})(App);

export default CreateNew;
