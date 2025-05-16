import { useEffect, useState } from "react";
import { getAllPosts as getAllPostsService } from "../../services";
import { toast } from "react-hot-toast"

export const usePost = () => {
    const [posts, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(false);

    const getAllPosts = async () => {
        setCargando(true);
        try {
            const posts = await getAllPostsService();
            setPublicaciones(posts);
            setCargando(false);
        } catch (err) {
            toast.error("Error al cargar las publicaciones" + err.message);
            setCargando(false);
        }
    }

    useEffect(() => {
        getAllPosts();
    }, []);

    return {
        posts,
        cargando,
    }
}