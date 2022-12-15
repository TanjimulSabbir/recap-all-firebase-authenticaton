import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const useSignUp = () => {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [inputUser, setInputUser] = useState({ email: '', password: '', confirmPassword: '' });
    const [createUserWithEmailAndPassword, SignUpUser, SignUpLoading, SignUpError,] = useCreateUserWithEmailAndPassword(auth);
    const { email, password, confirmPassword } = inputUser;

    const handleBlur = (event) => {
        setInputUser(() => {
            return { ...inputUser, [event.target.name]: event.target.value }
        })
        if (password === confirmPassword) {
            return setError(false)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 7 && confirmPassword.length < 7) {
            return;
        }
        if (password !== confirmPassword) {
            return setError(true)
        }
        setError(false)
        const displayName = "Tanjimul Islam Sabbir"
        createUserWithEmailAndPassword(email, password, displayName);
        console.log(SignUpUser)
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return { error, setError, showPassword, setShowPassword, inputUser, setInputUser, handleBlur, handleSubmit, handleShowPassword, email, password, confirmPassword, SignUpUser, SignUpError, SignUpLoading }
};

export default useSignUp;