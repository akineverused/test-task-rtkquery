import React, {FC} from 'react';
import { useParams } from 'react-router-dom';
import cl from '../styles/PostIdPage.module.css';
import { postApi } from '../services/PostService';
import CommentItem from '../components/UI/CommentItem/CommentItem';
import { IComment } from '../models/IComment';
import { IPost } from '../models/IPost';

const PostIdPage: FC = () => {
    const { postId } = useParams<{ postId: string }>();

    const {data: post, isLoading: postLoading, error: postError} = postApi.useFetchPostByIdQuery(Number(postId));

    const {data: comments, isLoading: commentsLoading, error: commentsError} = postApi.useFetchCommentsByPostIdQuery(Number(postId));

    if (postLoading || commentsLoading) return <h2>Loading...</h2>;
    if (postError || commentsError) return <h2>Error loading data</h2>;

    return (
        <div className={cl.wrap}>
            <div className={cl.upperPart}>
                <div className={cl.image}></div>
                <div className={cl.text}>
                    <p className={cl.title}>{post?.title}</p>
                    <p className={cl.body}>{post?.body}</p>
                </div>
            </div>

            {comments && comments.map((comment: IComment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default PostIdPage;
