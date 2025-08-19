import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import {IUser} from "../models/IUser";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints:(build) => ({
        fetchAllPosts: build.query<IPost[], void>({
            query: () => ({
                url: '/posts'
            }),
        }),
        fetchPostById: build.query<IPost, number>({
            query: (id:number) => ({
                url: `/posts/${id}`
            }),
        }),
        signIn: build.query<IUser[] | [], string>({
            query: (username: string) => ({
                url: `/users?username=${username}`
            }),
        }),
        fetchCommentsByPostId: build.query<IComment[], number>({
            query: (postId: number) => ({
                url: `/comments?postId=${postId}`
            }),
        }),
    })
})