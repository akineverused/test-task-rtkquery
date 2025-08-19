import React, { FC } from 'react';
import cl from './CommentItem.module.css';
import avatar from '../../../Assets/Avatar.svg';
import { IComment } from '../../../models/IComment';

interface CommentItemProps {
    comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
    return (
        <div className={cl.wrap}>
            <img src={avatar} alt="ava" />
            <div className={cl.comment}>
                <p className={cl.email}>{comment.email}</p>
                <p className={cl.commentBody}>{comment.body}</p>
            </div>
        </div>
    );
};

export default CommentItem;