import React from "react";
import { useNavigate } from "react-router-dom";

export const PostForm = ({ publicaciones }) => {
    const navigate = useNavigate();

    if (!Array.isArray(publicaciones)) {
        return <p style={{ color: "black" }}>Error: las publicaciones no se pudieron cargar correctamente.</p>;
    }

    if (publicaciones.length === 0) {
        return <p style={{ color: "white" }}>No hay publicaciones disponibles para mostrar.</p>;
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
                        {(Array.isArray(pub.comments) ? pub.comments : []).map((comment, index) => (
                            <li key={comment._id || index}>
                                <strong>{comment.user}:</strong> {comment.content}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PostForm;
