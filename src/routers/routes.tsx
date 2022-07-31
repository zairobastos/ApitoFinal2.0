import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Campeonatos } from "../views/campeonatos";
import { Home } from "../views/home";
import { Jogadores } from "../views/jogadores";
import { Login } from "../views/login";
import { PaginaInicial } from "../views/paginaInicial";
import { Profile } from "../views/profile";
import { RecuperarSenha } from "../views/recuperarSenha";
import { Singup } from "../views/singup";
import { Times } from "../views/times";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/login" element={<Login />} />
                <Route path="/singup" element={<Singup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/campeonato" element={<Campeonatos />} />
                <Route path="/times" element={<Times />} />
                <Route path="/jogadores" element={<Jogadores />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/recuperarSenha" element={<RecuperarSenha />} />
            </Routes>
        </BrowserRouter>
    );
};
