import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePostById } from "../shared/hooks/usePostById.jsx";
import { addComment } from "../services/api.jsx";
import "../pages/post/PostPage.css";

export const PostDetails = () => {
    const { id } = useParams();
    const {
        post: publicacion,
        comments,
        cargando,
        error,
        setComments,
    } = usePostById(id);

    const [newComment, setNewComment] = useState({ user: "", content: "" });
    const [formError, setFormError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newComment.user.trim() || !newComment.content.trim()) {
            setFormError("Por favor, completa todos los campos.");
            return;
        }
        setFormError("");

        try {
            const comentario = {
                postId: id,
                user: newComment.user,
                content: newComment.content,
            };

            const nuevoComentario = await addComment(comentario);

            const comentarioParaLista = {
                _id: nuevoComentario._id || Math.random().toString(),
                user: nuevoComentario.user,
                content: nuevoComentario.content,
                createdAt: nuevoComentario.createdAt,
            };

            setComments((prev) => [...prev, comentarioParaLista]);
            setNewComment({ user: "", content: "" });
        } catch (error) {
            setFormError("Error al agregar el comentario.");
            console.error("Error al agregar el comentario:", error);
        }
    };

    if (cargando) return <p>Cargando publicación...</p>;
    if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
    if (!publicacion) return <p style={{ textAlign: "center" }}>No se encontró la publicación.</p>;

    return (
        <div className="publicacion-detalle">
            <div className="publicacion-card detalle-publicacion-card">
                <h2>{publicacion.title}</h2>
                <p>{publicacion.description}</p>
                <div className="detalle-info">
                    <p><strong>Course:</strong> {publicacion.course}</p>
                    <p><strong>Created At:</strong> {new Date(publicacion.createdAt).toLocaleDateString()}</p>
                    <p><strong>Comentarios:</strong></p>
                </div>
            </div>

            <div className="comentarios-grid">
                {comments && comments.length > 0 ? (
                    comments.map((comment) => (
                        <div className="comentario-card" key={comment._id || Math.random()}>
                            <div className="comentario-usuario">{comment.user}</div>
                            {comment.createdAt && (
                                <div className="comentario-fecha">
                                    Fecha: {new Date(comment.createdAt).toLocaleString()}
                                </div>
                            )}
                            <div>{comment.content}</div>
                        </div>
                    ))
                ) : (
                    <p>No hay comentarios aún.</p>
                )}
            </div>

            <div className="comentario-form-card">
                <form className="comentario-form" onSubmit={handleSubmit}>
                    <label>
                        User
                        <input
                            type="text"
                            placeholder="Tu nombre"
                            value={newComment.user}
                            onChange={(e) => setNewComment({ ...newComment, user: e.target.value })}
                            required
                        />
                    </label>
                    <label>
                        ¿Qué quieres comentar?
                        <input
                            type="text"
                            placeholder="Tu comentario"
                            value={newComment.content}
                            onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                            required
                        />
                    </label>
                    <button type="submit">Agregar Comentario</button>
                    {formError && <span className="error">{formError}</span>}
                </form>
            </div>
        </div>
    );
};