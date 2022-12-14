import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDisplay, faEye, faEyeSlash, faFaceGrinWink, faShower } from '@fortawesome/free-solid-svg-icons'

import './SignUp.css'
import { icon } from '@fortawesome/fontawesome-svg-core';

const SignUp = () => {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [inputUser, setInputUser] = useState({ email: '', password: '', confirmPassword: '' });
    const { email, password, confirmPassword } = inputUser;

    const handleBlur = (event) => {
        setInputUser(() => {
            return { ...inputUser, [event.target.name]: event.target.value }
        })
        if (password === confirmPassword) {
            return setError(false);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            return setError(true)
        }
        setError(false)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            {/* form Input Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' onBlur={handleBlur} />
            </Form.Group>
            {/*Form input Password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='eyeDiv'>
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" name='password' onBlur={handleBlur} className={error ? "text-danger" : "text-success"} />
                    <FontAwesomeIcon className={`passEye ${showPassword ? "text-success" : ""}`} icon={showPassword ? faEye : faEyeSlash} onClick={() => handleShowPassword()} />
                </div>
            </Form.Group>
            {/*Form Input Confirm Password */}
            <Form.Group className="mb-1 password" controlId="formBasicComfirmPassword">
                <Form.Label>Comfirm Password</Form.Label>
                <div className="eyeDiv">
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Comfirm Password" name='confirmPassword' onBlur={handleBlur} className={error ? "text-danger" : "text-success"} />
                    <FontAwesomeIcon className={`passEye ${showPassword ? "text-success" : ""}`} icon={showPassword ? faEye : faEyeSlash} onClick={() => handleShowPassword()} />
                </div>
                {/* Show password Button */}
                <small onClick={() => handleShowPassword()} className={showPassword ? "text-success" : ""}>Show Password</small>
                {/* Password Error Display */}
                {error ? <small className='text-danger'>Passwords aren't not same</small> : ""}
            </Form.Group>
            {/* Input Checkbox  */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <small> <Form.Check type="checkbox" label="Check me out" name='terms' /></small>
            </Form.Group>
            {/* Form Submit Button */}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </form>
    );
};

export default SignUp;