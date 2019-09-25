import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import styled from 'styled-components';
import { Form as SemanticForm, Dimmer, Loader } from 'semantic-ui-react';
import * as Yup from 'yup';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { ComponentWithState, withState } from '../state';

const Stretch = styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;
    margin-bottom: 5px;
    p {
        margin-top: 15px;
    }
`;

const Login = ({
    values,
    errors,
    touched,
    status,
    handleSubmit,
    isSubmitting,
}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status) {
            setUsers([...users, status]);
        }
    }, [status, users]);
    return (
        <SemanticForm as={Form} onSubmit={handleSubmit}>
            {isSubmitting && (
                <Dimmer active page>
                    <Loader>Logging In</Loader>
                </Dimmer>
            )}
            {errors.global && <p>{errors.global}</p>}
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
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                    <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        autoComplete="password"
                    />
                </div>
            </Stretch>
            <SemanticForm.Button
                content="Login"
                color="blue"
                style={{ marginTop: 5 }}
            />
        </SemanticForm>
    );
};

//Initial values, Handle validation, Submission
//HOC created to conect to our App component
const LogIn = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || '',
            password: password || '',
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(8)
            .required(),
    }),

    handleSubmit(
        values,
        { props, resetForm, setStatus, setErrors, setSubmitting }
    ) {
        setSubmitting(true);
        console.log(props);
        axios
            .post(
                'https://cors-anywhere.herokuapp.com/https://lsbw-liberated-skills.herokuapp.com/api/auth/login',
                { email: values.email, password: values.password }
            )
            .then(response => {
                if (response.status == 200) {
                    window.localStorage.setItem('token', response.data.token);
                    props.dispatch({
                        type: 'set_user',
                        payload: response.data,
                    });
                    props.history.push('/me');
                }
            })
            .catch(error => {
                setErrors({
                    global:
                        'Either your username or password was incorrect or you need to create an account. Please try again',
                });
                console.log(error);
                setSubmitting(false);
            });

        // setTimeout(() => {
        //     if (values.email === 'luisocasio03@gmail.com') {
        //         setErrors({ email: 'Email already in use' });
        //     } else {
        //         resetForm();
        //     }
        //     setSubmitting(false);
        // }, 2000);
        console.log(values);
    },
})(Login);

export default withState(withRouter(LogIn));
