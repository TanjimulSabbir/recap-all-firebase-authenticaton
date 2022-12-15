import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const useSignIn = () => {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [inputUser, setInputUser] = useState({ email: '', password: '' });
    const [signInWithEmailAndPassword, LoginUser, LoginLoading, LoginError] = useSignInWithEmailAndPassword(auth);
    const { email, password } = inputUser;

    const handleBlur = (event) => {
        setInputUser(() => {
            return { ...inputUser, [event.target.name]: event.target.value }
        })
        if (password.length < 7) {
            return setError(true);
        }
    }
    console.log(LoginUser)
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 7) {
            return setError(true);
        }
        setError(false)
        signInWithEmailAndPassword(email, password)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return { error, setError, showPassword, setShowPassword, inputUser, setInputUser, handleBlur, handleSubmit, handleShowPassword, email, password, LoginUser, LoginError, LoginLoading }
};

export default useSignIn;