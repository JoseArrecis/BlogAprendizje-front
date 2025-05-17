import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterByCourse } from "../../services/api.jsx";
import PostForm from "../../components/PostForm.jsx";

export const FilterByCourse = () => {
    const { course: curso } = useParams()
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setCargando(true);
            try {
                const pubs = await filterByCourse(curso);
                console.log("Publicaciones recibidas:", pubs);
                setPublicaciones(pubs);
            } catch (err) {
                console.error("Error al filtrar publicaciones por curso:", err);
                setPublicaciones([]);
            }
            setCargando(false);
        };
        fetchData();
    }, [curso]);

    return (
        <div className="dashboard-container">
            <h2>Publicaciones del curso: {curso}</h2>
            {cargando ? (
                <p>Cargando publicaciones...</p>
            ) : (
                <PostForm publicaciones={publicaciones} />
            )}
        </div>
    );
};
