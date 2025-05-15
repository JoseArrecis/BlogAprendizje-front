import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filtrarPublicacionesPorTitulo } from "../../services/api.jsx";
import { PostForm } from "../../components/PostForm.jsx";

export const FilterByTitle = () => {
    const { titulo } = useParams();
    const [publicaciones, setPublicaciones] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setCargando(true);
            try {
                const pubs = await filtrarPublicacionesPorTitulo(titulo);
                setPublicaciones(pubs);
            } catch (err) {
                console.error("Error al filtrar publicaciones por título:", err);
                setPublicaciones([]);
            }
            setCargando(false);
        };
        fetchData();
    }, [titulo]);

    return (
        <div className="dashboard-container">
            <h2>Publicaciones con el título: {titulo}</h2>
            {cargando ? (
                <p>Cargando publicaciones...</p>
            ) : (
                <PostForm publicaciones={publicaciones} />
            )}
        </div>
    );
};