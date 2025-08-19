import React, { useState } from 'react';
import cl from '../styles/SignInPage.module.css';
import { useNavigate } from 'react-router-dom';
import { postApi } from '../services/PostService';

import {logIn, setToast} from '../store/reducers/authSlice';
import {useAppDispatch} from "../hooks/redux";

const SignInPage: React.FC = () => {
    const [value, setValue] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [signIn, { isLoading }] = postApi.useLazySignInQuery();

    const handleSignIn = async () => {
        const response = await signIn(value).unwrap();
        if (response && response.length > 0) {
            dispatch(logIn(response[0]));
            dispatch(setToast({ text: `Welcome back, ${value}!`, state: 'success' }));
            navigate('/main');
        } else {
            dispatch(setToast({ text: 'No such username or incorrect', state: 'error' }));
        }
    };

    return (
        <div className={cl.wrap}>
            <div className={cl.window}>
                Sign in
                <div className={cl.buttons}>
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="Enter your name..."
                    />
                    <button onClick={handleSignIn} disabled={isLoading}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
