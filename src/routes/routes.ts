import React from "react";
import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import PostIdPage from "../pages/PostIdPage";

interface RouteType {
    path: string;
    element: React.FC;
}

export const routes: RouteType[] = [
    { path: '/main', element: MainPage },
    { path: '/sign-in', element: SignInPage },
    { path: '/posts/:postId', element: PostIdPage },
];
