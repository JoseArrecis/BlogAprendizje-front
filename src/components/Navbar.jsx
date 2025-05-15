import React, { useState } from "react";
import '../pages/post/Navbar.css';
import { useFiltroPost } from "../shared/hooks/useFiltroPost.jsx";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const {
        limpiarFiltros
    } = useFiltroPost();

    const [course, setCurso] = useState("");
    const [title, setTitulo] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const navigate = useNavigate(); 

    const handleFiltrarCurso = (e) => {
        e.preventDefault();
        if (course.trim()) {
            navigate(`/course/${encodeURIComponent(course)}`); 
        }
    };

    const handleFiltrarTitulo = (e) => {
        e.preventDefault();
        if (title.trim()) {
            navigate(`/title/${encodeURIComponent(title)}`);
        }
    };

    const handleFiltrarFechas = (e) => {
        e.preventDefault();
        if (fechaInicio && fechaFin) {
            navigate(`/fechas/${encodeURIComponent(fechaInicio)}/${encodeURIComponent(fechaFin)}`);
        }
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">Blog de Aprendizaje Frontend</h1>
            <div className="navbar-filtros">
                <form className="filtro-form" onSubmit={handleFiltrarCurso}>
                    <input
                        type="text"
                        placeholder="Por curso"
                        value={course}
                        onChange={(e) => setCurso(e.target.value)}
                    />
                    <button type="submit">Filtrar</button>
                </form>
                <form className="filtro-form" onSubmit={handleFiltrarTitulo}>
                    <input
                        type="text"
                        placeholder="Por título"
                        value={title}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <button type="submit">Filtrar</button>
                </form>
                <form className="filtro-form" onSubmit={handleFiltrarFechas}>
                    <input
                        type="date"
                        value={fechaInicio}
                        onChange={(e) => setFechaInicio(e.target.value)}
                    />
                    <input
                        type="date"
                        value={fechaFin}
                        onChange={(e) => setFechaFin(e.target.value)}
                    />
                    <button type="submit">Fechas</button>
                </form>
            </div>
            <button
                className="volver-btn"
                onClick={() => {
                    limpiarFiltros();
                    navigate("/");
                }}
            >
                Volver a publicaciones
            </button>
        </nav>
    );
};