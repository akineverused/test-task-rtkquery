import React, {useEffect} from 'react';
import cl from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut, setToast} from "../../../store/reducers/authSlice";
import {useAppSelector} from "../../../hooks/redux";
import Toast from "../Toast/Toast";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {isAuth, toastText, toastState} = useAppSelector(state => state.auth);


    const handleLogOut = () => {
        navigate("/main");
        dispatch(logOut());
    };

    useEffect(() => {
        if (toastState !== null) {
            const timer = setTimeout(() => {
                dispatch(setToast({ text: "", state: '' }));
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [dispatch, toastState]);

    return (
        <div className={cl.wrap}>
            <h2
                className={cl.companyLogo}
                onClick={() => navigate('/main')}
            >
                Best Application
            </h2>

            {toastState && <Toast state={toastState} text={toastText}/>}

            {isAuth ? (
                <button
                    className={cl.signInBtn}
                    onClick={handleLogOut}
                >
                    Log out
                </button>
            ) : (
                <button
                    className={cl.signInBtn}
                    onClick={() => navigate('/sign-in')}
                >
                    Sign in
                </button>
            )}
        </div>
    );
};

export default Header;