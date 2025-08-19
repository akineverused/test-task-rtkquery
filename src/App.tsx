import React from 'react';
import cl from './styles/App.module.css'
import AppRouter from "./components/AppRouter";
import Header from "./components/UI/Header/Header";
import {BrowserRouter} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className={cl.appWrapper}>
                <Header />
                <AppRouter />
            </div>
        </BrowserRouter>
    );
};

export default App;