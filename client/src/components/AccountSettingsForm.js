import React from 'react';
import { Formik, withFormik, Form, Field } from 'formik';
import { Form as SForm, Button, Message } from 'semantic-ui-react';
import * as Yup from 'yup';
import axios from 'axios';
import _ from 'lodash';

const AccountSettings = ({
    errors,
    touched,
    values,
    status,
    userCreated,
    setFieldValue,
}) => {
    return (
        <SForm as={Form} style={{ maxWidth: 450 }}>
            {!_.isEmpty(
                _.intersection(Object.keys(touched), Object.keys(errors))
            ) && (
                <Message
                    icon="warning circle"
                    header="There's some problems with the information below."
                    negative
                    list={_.intersection(
                        Object.keys(touched),
                        Object.keys(errors)
                    ).map(key => errors[key])}
                />
            )}

            <SForm.Field>
                <label>
                    Prison Name
                    <Field type="Text" name="prisonName" />
                </label>
            </SForm.Field>
            <SForm.Group>
                <SForm.Field>
                    <label>
                        Phone Number
                        <Field
                            name="phoneNumber"
                            render={({ field, value, onChange }) => (
                                <input
                                    {...field}
                                    type="tel"
                                    placeholder="(713) 264-1320"
                                    onChange={e => {
                                        let formatted = checkPhone(e);
                                        setFieldValue('phoneNumber', formatted);
                                    }}
                                />
                            )}
                        />
                    </label>
                </SForm.Field>
                <SForm.Field>
                    <label>
                        Email
                        <Field type="email" name="email" />
                    </label>
                </SForm.Field>
            </SForm.Group>
            <SForm.Group>
                <SForm.Field>
                    <label>
                        Your First Name
                        <Field type="text" name="firstName" />
                    </label>
                </SForm.Field>
                <SForm.Field>
                    <label>
                        Your Last Name
                        <Field type="text" name="lastName" />
                    </label>
                </SForm.Field>
            </SForm.Group>
            <SForm.Group
                style={{ display: 'flex', justifyContent: 'space-between' }}
            >
                <Button content="Save Changes" color="green" />
                <Button
                    content="Cancel"
                    color="red"
                    basic
                    onClick={() => {
                        alert('cancelling');
                    }}
                />
            </SForm.Group>
        </SForm>
    );
};

function checkPhone(obj) {
    let str = obj.target.value.replace(/[^0-9]+?/g, '');
    switch (str.length) {
        case 10:
            str =
                '(' +
                str.substr(0, 3) +
                ') ' +
                str.substr(3, 3) +
                '-' +
                str.substr(6, 4);
            break;
        default:
            return;
    }
    return str;
}

const AccountSettingsForm = withFormik({
    mapPropsToValues: ({
        prisonName,
        phoneNumber,
        email,
        firstName,
        lastName,
    }) => {
        return {
            prisonName: prisonName || '',
            phoneNumber: phoneNumber || '',
            email: email || '',
            firstName: firstName || '',
            lastName: lastName || '',
        };
    },

    validationSchema: Yup.object().shape({
        prisonName: Yup.string()
            .required('You must have a Prison Name')
            .min(4, 'Your prison name cannot be less than 3 letters.'),
        phoneNumber: Yup.string()
            .required('You must have a phone number')
            .min(10, 'Your phone must be at least 10 digits'),
        email: Yup.string()
            .email('The email provided is not valid')
            .required('You must provide an email'),
        firstName: Yup.string().required('You must have a First Name'),
        lastName: Yup.string().required('You mush have a Last Name'),
    }),

    handleSubmit: function(values, { props, resetForm }) {
        console.log('Submitting');
        axios
            .put(
                `https://lsbw-liberated-skills.herokuapp.com/api/centers/id/profile`,
                { values }
            )
            .then(res => {
                console.log(res.data);
                props.userCreated(res.data);
                resetForm();
            });
    },
})(AccountSettings);

export default AccountSettingsForm;
