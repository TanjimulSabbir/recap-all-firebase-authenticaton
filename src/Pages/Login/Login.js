import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useLogin from '../../Hooks/useSignIn';
import "./Login.css"

const Login = () => {
    const { error, showPassword, inputUser, handleBlur, handleSubmit, handleShowPassword, password, LoginUser, LoginError, LoginLoading } = useLogin();
    console.log(inputUser)
    return (
        <form className='form' onSubmit={handleSubmit}>
            {/* form Input Email */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' onBlur={handleBlur} />
            </Form.Group>
            {/*Form input Password */}
            <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='eyeDiv'>
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Password" name='password' onBlur={handleBlur} className={error ? "text-danger" : "text-success"} />
                    {/*Eye Icon */}
                    <FontAwesomeIcon className={`passEye ${showPassword ? "text-success" : ""}`} icon={showPassword ? faEye : faEyeSlash} onClick={handleShowPassword} />
                </div>
            </Form.Group>
            {/* Password Error Display */}
            {
                password.length < 7 ? <small className='text-danger'>Password must have atleast 8 character</small> : <small>{LoginLoading ? "Loading..." : LoginError ? LoginError?.message : "Login Successful"}</small>
            }

            {/* Form Submit Button */}
            <Button variant="primary" type="submit" className='submit-btn'>
                Submit
            </Button>
        </form >
    );
};

export default Login;