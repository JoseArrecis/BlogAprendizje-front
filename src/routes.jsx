import React from "react";
import { PostPage } from "./pages/post/index.js";
import { PostDetails } from "./components/PostDetails.jsx";
import { FilterByCourse } from "./pages/post/FilterByCourse.jsx"; 
import { FilterByTitle } from "./pages/post/FilterByTitle.jsx"; 
import { FilterByDate } from "./pages/post/FilterByDate.jsx"; 
    
export const routes = [
    { path: "/", element: <PostPage /> },
    { path: "/publicacion/:id", element: <PostDetails /> },
    { path: "/course/:curso", element: <FilterByCourse /> },
    { path: "/title/:titulo", element: <FilterByTitle /> },
    { path: "/date/:fechaInicio/:fechaFin", element: <FilterByDate /> },
];