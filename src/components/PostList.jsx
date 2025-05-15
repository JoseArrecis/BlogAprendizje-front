import React from "react";
import { useFiltroPublicaciones } from "../shared/hooks/useFiltroPublicaciones.jsx";
import { PostForm } from "./PostForm.jsx";
import "../pages/post/PostPage.css";

export const PostList = () => {
    const { publicaciones, cargando } = useFiltroPublicaciones();

    return (
        <div className="publicaciones-container">
            <h2 className="publicaciones-title">Lista de Publicaciones</h2>
            {cargando ? (
                <p style={{ color: "white", textAlign: "center" }}>Cargando publicaciones...</p>
            ) : (
                <PostForm publicaciones={publicaciones} />
            )}
        </div>
    );
};