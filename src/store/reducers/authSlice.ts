import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    isAuth: boolean;
    userData: IUser | null;
    toastText: string;
    toastState: string;
}

const initialState: AuthState = {
    isAuth: localStorage.getItem('isAuth') === 'true',
    userData: null,
    toastText: "",
    toastState: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true;
            state.userData = action.payload;
            localStorage.setItem('isAuth', 'true');
        },
        logOut: (state) => {
            state.isAuth = false;
            state.userData = null;
            localStorage.removeItem('isAuth');
        },
        setToast: (state, action: PayloadAction<{text: string; state: string}>) => {
            state.toastText = action.payload.text;
            state.toastState = action.payload.state;
        }
    }
})

export const { logIn, logOut, setToast } = authSlice.actions;
export default authSlice.reducer;