import React from "react";
import { PublicacionPage } from "./pages/post/index.js";
import { PublicacionDetalle } from "./components/PublicacionDetalle.jsx";
import { FilterByCourse } from "./pages/post/FilterByCourse.jsx"; 
import { FilterByTitle } from "./pages/post/FilterByTitle.jsx"; 
import { FilterByDate } from "./pages/post/FilterByDate.jsx"; 

export const routes = [
    { path: "/", element: <PublicacionPage /> },
    { path: "/publicacion/:id", element: <PublicacionDetalle /> },
    { path: "/curso/:curso", element: <FilterByCourse /> },
    { path: "/titulo/:titulo", element: <FilterByTitle /> },
    { path: "/fechas/:fechaInicio/:fechaFin", element: <FilterByDate /> },
];