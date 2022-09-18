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
        // number: "",
        // topic: "",
        // message: ""
    }

    const reducer = (state, { name, value }) => {
        // console.log(state);
        return { ...state, [name]: value }
    }

    const [state, dispatch] = useReducer(reducer, initMessage);

    // const { firstName, lastName, email, number, topic, message } = state;
    const { firstName, lastName, email } = state;

    const initMessageError = {
        firstNameError: null,
        lastNameError: null,
        emailError: null,
        // numberError: null,
        // topicError: null,
        // messageError: null
    }

    const validateEmail = (emailAddress) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(emailAddress)
    }

    // const validateNumber = (phoneNumber) =>{
    //     const re = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/
    //     return re.test(phoneNumber)
    // }

    const errorReducer = (errorState, { key, stateValue }) => {
        console.log(errorState);
        console.log({ key });
        // return { ...errorState, [`${field}Error`]: "dupa" }
        switch (key) {
            case "firstName":
                if (stateValue.length < 2) return { ...errorState, [`${key}Error`]: "Imię musi zawierać minimum 2 znaki." }
                return { ...errorState, [`${key}Error`]: null }
            case "lastName":
                if (stateValue.length < 2) return { ...errorState, [`${key}Error`]: "Nazwisko musi zawierać minimum 2 znaki." }
                return { ...errorState, [`${key}Error`]: null }
            case "email":
                {
                    const isValidEmail = validateEmail(stateValue);
                    if (!isValidEmail) return { ...errorState, [`${key}Error`]: "Wpisz poprawny adres email, zawierający @." }
                    return { ...errorState, [`${key}Error`]: null }
                }
            default:
                break;
        }

    }

    const [errorState, errorDispatch] = useReducer(errorReducer, initMessageError);

    // const { firstNameError, lastNameError, emailError, numberError, topicError, messageError } = errorState;
    const { firstNameError, lastNameError, emailError } = errorState;



    const addNewMessage = e => {
        e.preventDefault();
        console.log(state);
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
                {/* <div>
                    <label>Numer telefonu:</label>
                    <input type="number" name="number"
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
                </div> */}
                <div>
                    <input type="submit" />
                </div>
            </form>

            <div>
                <h4>{firstNameError}</h4>
                <h4>{lastNameError}</h4>
                <h4>{emailError}</h4>
                {/* <h4>{numberError}</h4>
                <h4>{topicError}</h4>
                <p>{messageError}</p> */}
            </div>
        </div>


    )


};

export default ContactForm;
