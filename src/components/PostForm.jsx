import React from "react";
import { useNavigate } from "react-router-dom";

export const PostForm = ({ publicaciones }) => {
    const navigate = useNavigate();

    if (!Array.isArray(publicaciones)) {
        return <p style={{ color: "red" }}>Error: Las publicaciones no son válidas.</p>;
    }

    return (
        <div className="publicaciones-grid">
            {publicaciones.map((pub) => (
                <div
                    key={pub._id}
                    className="publicacion-card"
                    onClick={() => navigate(`/publicacion/${pub._id}`)} 
                    style={{ cursor: "pointer" }}
                >
                    <h3 className="publicacion-title">{pub.title}</h3>
                    <p className="publicacion-content">{pub.description}</p>
                    <p><strong>course:</strong> {pub.course}</p>
                    <p><strong>Fecha:</strong> {new Date(pub.createdAt).toLocaleDateString()}</p>
                    <strong>Comentarios:</strong>

                    <ul>
                        {(Array.isArray(pub.comments) ? pub.comments : []).map((comments, index) => (
                            <li key={comments._id || index}>
                                <strong>{comments.user}:</strong> {comments.content}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PostForm