import { useState, useEffect } from "react";
import {
    filterByCourse,
    filtrarPublicacionesPorTitulo,
    filtrarPublicacionesPorFechas,
    getAllPosts
} from "../../services";
import { toast } from "react-hot-toast";

export const useFiltroPost = () => {
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const cargarPublicaciones = async () => {
            setCargando(true);
            try {
                const pubs = await getAllPosts();
                setPublicaciones(pubs);
            } catch (err) {
                toast.error("Error al cargar publicaciones: " + err.message);
            }
            setCargando(false);
        };
        cargarPublicaciones();
    }, []);

    const filtrarPorCurso = async (curso) => {
        setCargando(true);
        try {
            const pubs = await filterByCourse(curso);
            setPublicaciones(pubs);
        } catch (err) {
            toast.error("Error al filtrar por curso" + err.message);
        }
        setCargando(false);
    };

    const filtrarPorTitulo = async (titulo) => {
        setCargando(true);
        try {
            const pubs = await filtrarPublicacionesPorTitulo(titulo);
            setPublicaciones(pubs);
        } catch (err) {
            toast.error("Error al filtrar por título" + err.message);
        }
        setCargando(false);
    };

    const filtrarPorFechas = async (fechaInicio, fechaFin) => {
        setCargando(true);
        try {
            const pubs = await filtrarPublicacionesPorFechas(fechaInicio, fechaFin);
            setPublicaciones(pubs);
        } catch (err) {
            toast.error("Error al filtrar por fechas" + err.message);
        }
        setCargando(false);
    };

    const limpiarFiltros = async () => {
        setCargando(true);
        try {
            const pubs = await getAllPosts();
            setPublicaciones(pubs);
        } catch (err) {
            toast.error("Error al cargar publicaciones" + err.message);
        }
        setCargando(false);
    };

    return {
        publicaciones,
        cargando,
        filterByCourse,
        filtrarPorTitulo,
        filtrarPorFechas,
        limpiarFiltros
    };
};