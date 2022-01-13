import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [fNameError, setFNameError] = useState("");
    const [lNameError, setLNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        setSubmitted(true);
        }
    
    const checkFirstName = (e) => {
        if(e.target.value.length < 2) {
            setFNameError("First name must be at least 2 characters!");
        } else {
            setFNameError("");
            setFirstName(e.target.value);
        }
    }

    const checkLastName = (e) => {
        if(e.target.value.length < 2) {
            setLNameError("Last name must be at least 2 characters!");
        } else {
            setLNameError("");
            setLastName(e.target.value);
        }
    }

    const checkEmail = (e) => {
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("");
            setEmail(e.target.value);
        }
    }

    const checkPassword = (e) => {
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            setPasswordError("");
            setPassword(e.target.value);
        }
    }

    const checkConfirmPassword = (e) => {
        if(password !== e.target.value) {
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
            setConfirmPassword(e.target.value);
        }
    }


    return (
        <>
            {
                submitted ?
                    <h4>Thank you for submitting!</h4> :
                    <h4>Please fill out and submit the below form.</h4>
            }
            <form onSubmit={(createUser)}>
                <div>
                    <label>First Name</label>
                    <input type="text" onChange={checkFirstName} />
                    { fNameError ?
                            <p style={{ color: 'red' }}>{fNameError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={checkLastName} />
                    { lNameError ?
                            <p style={{ color: 'red' }}>{lNameError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" onChange={checkEmail} />
                    { emailError ?
                            <p style={{ color: 'red' }}>{emailError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" onChange={checkPassword} />
                    { passwordError ?
                            <p style={{ color: 'red' }}>{passwordError}</p> :
                            ""
                    }
                </div>
                <div>
                    <label>Confirm</label>
                    <input type="text" onChange={checkConfirmPassword} />
                    { confirmPasswordError ?
                            <p style={{ color: 'red' }}>{confirmPasswordError}</p> :
                            ""
                    }
                </div>
                <input type="submit" value="Submit" />
            <h5>Your Form Data</h5>
            </form>
            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    )
    }


export default UserForm;
