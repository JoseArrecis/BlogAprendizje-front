import React from "react";
import './PostPage.css';
import { PostList } from "../../components";

export const PostPage = () => {
    return (
        <div className="dashboard-container">
            <PostList />
        </div>
    );
};
