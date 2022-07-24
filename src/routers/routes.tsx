import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PaginaInicial } from "../views/paginaInicial";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
            </Routes>
        </BrowserRouter>
    );
};
