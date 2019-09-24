import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import styled from 'styled-components';
import { Form as SemanticForm, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import axios from 'axios';

const Stretch = styled.div`
    display: flex;
    flex-direction: column;
    width: 345px;
`;

const BTN = styled.button`
    width: 92px;
    height: 38px;
    margin-top: 10px;
    color: white;
    background-color: green;
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
                        <h2>Sign Up</h2>
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

                    <div>
                        <strong>
                            <p>Confirm Password</p>
                        </strong>
                        {touched.passwordConfirm && errors.passwordConfirm && (
                            <p>{errors.passwordConfirm}</p>
                        )}
                        <Field
                            type="password"
                            name="passwordConfirm"
                            placeholder="Confirm password"
                            value={values.passwordConfirm}
                            autoComplete="Confirm password"
                        />
                    </div>
                </Stretch>
                <BTN>Sign Up</BTN>
            </Form>
        </SemanticForm>
    );
};

function equalTo(ref: any, msg: any) {
    return Yup.mixed().test({
        name: 'equalTo',
        exclusive: false,
        message: msg || '${path} must be the same as ${reference}',
        params: {
            reference: ref.path,
        },
        test: function(value: any) {
            return value === this.resolve(ref);
        },
    });
}
Yup.addMethod(Yup.string, 'equalTo', equalTo);

//Initial values, Handle validation, Submission
//HOC created to conect to our App component
const SignUp = withFormik({
    mapPropsToValues({ email, password, passwordConfirm }) {
        return {
            email: email || '',
            password: password || '',
            passwordConfirm: passwordConfirm || '',
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email()
            .required(),
        password: Yup.string()
            .min(8)
            .required(),
        passwordConfirm: Yup.string()
            .equalTo(Yup.ref('password'), 'Passwords must match')
            .required('Required'),
    }),

    handleSubmit(values, { resetForm, setStatus, setErrors, setSubmitting }) {
        axios
            .post('#', values)

            .then(response => {
                setStatus(response.data);
                console.log(response);
            })
            .catch(error => {
                console.log(error.response);
            });

        setTimeout(() => {
            if (values.email === 'luisocasio03@gmail.com') {
                setErrors({ email: 'Email already in use' });
            } else {
                resetForm();
            }
            setSubmitting(false);
        }, 2000);
        console.log(values);
    },
})(App);

export default SignUp;
