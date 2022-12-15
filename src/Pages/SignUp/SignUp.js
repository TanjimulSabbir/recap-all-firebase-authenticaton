import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './SignUp.css'
import useSignUp from '../../Hooks/useSignUp';

const SignUp = (props) => {
    const { error, showPassword, handleBlur, handleSubmit, handleShowPassword, password, confirmPassword, SignUpUser, SignUpLoading, SignUpError } = useSignUp();

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
                    {/*Eye Icon */}
                    <FontAwesomeIcon className={`passEye ${showPassword ? "text-success" : ""}`} icon={showPassword ? faEye : faEyeSlash} onClick={handleShowPassword} />
                </div>
            </Form.Group>
            {/*Form Input Confirm Password */}
            <Form.Group className="mb-1 password" controlId="formBasicComfirmPassword">
                <Form.Label>Comfirm Password</Form.Label>
                <div className="eyeDiv">
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Comfirm Password" name='confirmPassword' onBlur={handleBlur}
                        className={error ? "text-danger" : "text-success"} />
                    <FontAwesomeIcon className={`passEye ${showPassword ? "text-success" : ""}`} icon={showPassword ? faEye : faEyeSlash} onClick={handleShowPassword} />
                </div>
                {/* Password Error Display */}
                {(password?.length > 7 ? (confirmPassword?.length > 7 ? (<small>
                    {error ? <span className='text-danger'>Passwords aren't not same </span> : ""} </small>) : <small><i>Password must have atleast 8 character</i></small>) : (<small><i>Password must have atleast 8 character</i></small>))
                }
                {(SignUpLoading ? "loading..." : SignUpError ? <small className='text-danger'>{SignUpError?.message}</small> : SignUpUser && <small className='text-success'>Sign-Up Successful</small>)}
            </Form.Group>
            {/* Form Submit Button */}
            <Button variant="primary" type="submit" className='submit-btn'>
                Submit
            </Button>
        </form>
    );
};

export default SignUp;