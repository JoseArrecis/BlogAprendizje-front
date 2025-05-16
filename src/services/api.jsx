import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2656/v1",
    timeout: 5000,
});

export { api };

export const getAllPosts = async () => {
    const res = await api.get("/post/getAll");
    return res.data.posts;
};

export const getPostById = async (id) => {
    const res = await api.get(`/post/${id}`); 
    return res.data.post;
};

export const addComment = async (comentario) => {
    const res = await api.post('/comment', comentario); 
    return res.data.comment;
};

export const filtrarPublicacionesPorCurso = async (curso) => {
    const res = await api.get(`/Publicacion/filtrarPorCurso?curso=${encodeURIComponent(curso)}`);
    return res.data.publicaciones;
};

export const filtrarPublicacionesPorTitulo = async (titulo) => {
    const res = await api.get(`/Publicacion/filtrarPorTitulo?titulo=${encodeURIComponent(titulo)}`);
    return res.data.publicaciones;
};

export const filtrarPublicacionesPorFechas = async (fechaInicio, fechaFin) => {
    const res = await api.get(`/Publicacion/filtrarPorFechas?fechaInicio=${encodeURIComponent(fechaInicio)}&fechaFin=${encodeURIComponent(fechaFin)}`);
    return res.data.publicaciones.sort(
        (a, b) => new Date(b.fechaPublicacion) - new Date(a.fechaPublicacion)
    );
};
