//Components
import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { string, object } from 'yup';
import { axiosWithAuth } from '../hooks';
import styled from 'styled-components';
import { Form as SemanticForm, Dimmer, Loader } from 'semantic-ui-react';
import { withState } from '../state';
import { withRouter } from 'react-router-dom';

import { useStateValue } from '../state';

//Styled components
const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const App = ({
    values,
    errors,
    touched,
    effect,
    isSubmitting,
    handleSubmit,
}) => {
    const [{ preview }, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: 'set_preview',
            payload: { ...values },
        });
    }, [values]);

    return (
        //Profile onboarding adn styling
        <SemanticForm as={Form} onSubmit={handleSubmit}>
            {isSubmitting && (
                <Dimmer active page>
                    <Loader>Editing Profile</Loader>
                </Dimmer>
            )}
            <StyledForm>
                <div>
                    <h2>Edit Profile</h2>
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
                    {touched.description && errors.description && (
                        <p>{errors.description}</p>
                    )}
                    <Field
                        name="description"
                        cols="30"
                        rows="9"
                        placeholder="Enter Message"
                        value={values.description}
                        component="textarea"
                    />
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
                <SemanticForm.Button type="submit" color="green">
                    Save Profile
                </SemanticForm.Button>
            </StyledForm>
        </SemanticForm>
    );
};

const EditProfile = withFormik({
    mapPropsToValues({
        name,
        skills,
        education,
        paroleDate: date,
        description,
        check,
    }) {
        return {
            name: name || '',
            skills: skills || '',
            education: education || '',
            date: date || '',
            description: description || '',
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
        description: string().required('A description is required'),
    }),

    // Submit button handling
    handleSubmit(values, { props, setSubmitting }) {
        console.log('hello!');
        setSubmitting(true);

        axiosWithAuth()
            .put(`/candidates/${props.location.state.candidate.id}`, {
                name: values.name,
                availability: 'today',
                skills: values.skills,
                description: values.description,
                education: values.education,
                paroleDate: values.date,
            })

            .then(response => {
                console.log(response);

                setSubmitting(false);

                props.dispatch({
                    type: 'edit_candidates',
                    payload: response.data,
                });

                props.history.push('/me');
            })

            .catch(error => {
                console.log(error.response);
                setSubmitting(false);
            });
    },
})(App);

export default withState(withRouter(EditProfile));
