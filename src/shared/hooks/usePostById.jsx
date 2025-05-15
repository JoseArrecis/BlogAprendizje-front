import { useEffect, useState } from "react";
import { getPostById } from "../../services/api";
import { toast } from "react-hot-toast";

export const usePostById = (id) => {
    const [post, setPost] = useState(null);
    const [comment, setComment] = useState([]);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    const obtenerPublicacion = async () => {
        setCargando(true);
        try {
            const publicacionData = await getPostById(id);
            setPost(publicacionData);
            setComment(publicacionData.comment);
            setCargando(false);
        } catch (error) {
            setCargando(false);
            if (error.response && error.response.status === 404) {
                setError("La publicación no fue encontrada.");
            } else {
                setError("Ocurrió un error al cargar la publicación.");
            }
            toast.error("Error al cargar la publicación.");
        }
    };

    useEffect(() => {
        if (id) {
            obtenerPublicacion();
        }
    }, [id]);

    return {
        post,
        comment,
        cargando,
        error,
        setComentarios,
    };
};