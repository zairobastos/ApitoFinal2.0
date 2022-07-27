import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../views/home";
import { Login } from "../views/login";
import { PaginaInicial } from "../views/paginaInicial";
import { Singup } from "../views/singup";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<Singup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
