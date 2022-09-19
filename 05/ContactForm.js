/* eslint-disable consistent-return */
/* eslint-disable indent */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
import React, { useReducer } from 'react';

// import account from './account';

const ContactForm = () => {
    const initMessage = {
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        topic: "",
        message: ""
    }

    const reducer = (state, { name, value }) => {
        return { ...state, [name]: value }
    }

    const [state, dispatch] = useReducer(reducer, initMessage);

    const { firstName, lastName, email, number, topic, message } = state;


    const validateInputContentByLength = (content, minContentLength) => {
        if (content.length >= minContentLength) return true
        return false
    }

    const setError = (stateToUpdate, fieldToUpdate, errorInfo) => {
        return { ...stateToUpdate, [`${fieldToUpdate}Error`]: errorInfo }
    }

    const unsetError = (stateToUpdate, fieldToUpdate) => {
        return { ...stateToUpdate, [`${fieldToUpdate}Error`]: null }
    }

    const validateEmail = (emailAddress) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(emailAddress)
    }

    const validateNumber = (phoneNumber) => {
        const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
        return re.test(phoneNumber)
    }

    const errorReducer = (errorState, { key, stateValue }) => {

        switch (key) {
            case "firstName":
                {
                    const minValueLength = 2;
                    const isValid = validateInputContentByLength(stateValue, minValueLength)
                    if (!isValid) return setError(errorState, key, `Imię musi zawierać minimum ${minValueLength} znaki.`)
                    return unsetError(errorState, key)
                }
            case "lastName":
                {
                    const minValueLength = 2;
                    const isValid = validateInputContentByLength(stateValue, minValueLength)
                    if (!isValid) return setError(errorState, key, `Nazwisko musi zawierać minimum ${minValueLength} znaki.`)
                    return unsetError(errorState, key)
                }
            case "email":
                {
                    const isValid = validateEmail(stateValue);
                    if (!isValid) return setError(errorState, key, "Wpisz poprawny adres email, zawierający @.")
                    return unsetError(errorState, key)
                }
            case "number":
                {
                    const isValid = validateNumber(stateValue);
                    if (!isValid) return setError(errorState, key, "Wpisz poprawny numer telefonu, np: 123123123.")
                    return unsetError(errorState, key)
                }
            case "topic":
                {
                    const minValueLength = 3;
                    const isValid = validateInputContentByLength(stateValue, minValueLength)
                    if (!isValid) return setError(errorState, key, `Temat musi zawierać minimum ${minValueLength} znaki.`)
                    return unsetError(errorState, key)
                }
            case "message":
                {
                    const minValueLength = 4;
                    const isValid = validateInputContentByLength(stateValue, minValueLength)
                    if (!isValid) return setError(errorState, key, `Wiadomość musi zawierać minimum ${minValueLength} znaki.`)
                    return unsetError(errorState, key)
                }
            default:
                break;
        }

    }

    const initMessageError = {
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        numberError: null,
        topicError: null,
        messageError: null
    }

    const [errorState, errorDispatch] = useReducer(errorReducer, initMessageError);

    const { firstNameError, lastNameError, emailError, numberError, topicError, messageError } = errorState;

    const addNewMessage = e => {
        e.preventDefault();
        Object.keys(state).forEach(key => {
            errorDispatch({ key, stateValue: state[key] })
        })
    }
    return (
        <div>
            <h3>Wprowadź dane:</h3>
            <form onSubmit={addNewMessage}>
                <div>
                    <label>Imię:</label>
                    <input type="text" name="firstName"
                        value={firstName}
                        onChange={e => dispatch(e.target)}
                    />
                </div>
                <div>
                    <label>Nazwisko:</label>
                    <input type="text" name="lastName"
                        value={lastName}
                        onChange={e => dispatch(e.target)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email"
                        value={email}
                        onChange={e => dispatch(e.target)}
                    />
                </div>
                <div>
                    <label>Numer telefonu:</label>
                    <input type="text" name="number"
                        value={number}
                        onChange={e => dispatch(e.target)}
                    />
                </div>
                <div>
                    <label>Temat:</label>
                    <input type="text" name="topic"
                        value={topic}
                        onChange={e => dispatch(e.target)}
                    />
                </div>
                <div>
                    <label>Wiadomość:</label>
                    <textarea type="text" name="message"
                        value={message}
                        onChange={e => dispatch(e.target)}
                    />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>

            <ul style={{ listStyle: "none", color: "red" }}>
                <li>{firstNameError}</li>
                <li>{lastNameError}</li>
                <li>{emailError}</li>
                <li>{numberError}</li>
                <li>{topicError}</li>
                <li>{messageError}</li>
            </ul>
        </div>


    )


};

export default ContactForm;
