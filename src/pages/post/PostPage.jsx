import React from "react";
import './PostPage.css';
import { PublicacionesLista } from "../../components";

export const PostPage = () => {
    return (
        <div className="dashboard-container">
            <PublicacionesLista />
        </div>
    );
};
