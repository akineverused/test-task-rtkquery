import React, {FC} from 'react';
import {postApi} from "../services/PostService";
import cl from '../styles/MainPage.module.css'
import {IPost} from "../models/IPost";
import PostItem from "../components/UI/PostItem/PostItem";

const MainPage: FC = () => {
    const { data: posts, isLoading, error } = postApi.useFetchAllPostsQuery();
    if (posts) console.log(posts);

    if (isLoading) return <h2>Loading...</h2>;
    if (error) return <h2>Error loading posts</h2>;


    return (
        <div>
            <div className={cl.wrap}>
                <div className={cl.postsGrid}>
                    {posts && posts.map((post: IPost) => (
                        <PostItem
                            key={post.id}
                            post={post}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;