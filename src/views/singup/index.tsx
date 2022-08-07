import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FooterImg } from "../../components/login/footer";
import { HeaderForm } from "../../components/login/headerForm";
import { HeaderLogo } from "../../components/login/logo";
import { CadContainer } from "./style";
import "./estilo.css";

import {
    AiFillEye,
    AiFillEyeInvisible,
    AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Inputi } from "../login/style";
import Swal from "sweetalert2";

import { api } from "../../server/api";

export const Singup = () => {
    const SingupSchema = Yup.object().shape({
        nome: Yup.string()
            .min(3, "O nome deve ter no mínimo 3 caracteres")
            .required("O nome é obrigatório"),
        email: Yup.string()
            .email("Insira um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: Yup.string()
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .required("A senha é obrigatória"),
        senha: Yup.string()
            .oneOf([Yup.ref("password"), null], "As senhas não conferem")
            .required("A confirmação de senha é obrigatória")
            .min(6, "A senha deve ter no mínimo 6 caracteres"),
    });
    const formik = useFormik({
        initialValues: {
            nome: "",
            email: "",
            password: "",
            senha: "",
        },
        validationSchema: SingupSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    let [borda, borda1, borda2, borda3, borda4, borda5] = "border-borderInput";
    if (formik.errors.nome && formik.values.nome != "") {
        borda = "border-red-500";
    } else if (formik.values.nome != "") {
        borda = "border-green-500";
    }
    if (formik.errors.email && formik.values.email != "") {
        borda1 = "border-red-500";
    } else if (formik.values.email != "") {
        borda1 = "border-green-500";
    }
    if (formik.errors.password && formik.values.password != "") {
        borda2 = "border-red-500";
        borda3 = "border-red-500";
    } else if (formik.values.password != "") {
        borda2 = "border-green-500";
        borda3 = "border-green-500";
    }
    if (formik.errors.senha && formik.values.senha != "") {
        borda4 = "border-red-500";
        borda5 = "border-red-500";
    } else if (formik.values.senha != "") {
        borda4 = "border-green-500";
        borda5 = "border-green-500";
    }

    const [tipo, setTipo] = useState("password");
    const [tipo2, setTipo2] = useState("password");

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClick = () => {
        setShow(!show);
        setTipo(show ? "password" : "text");
    };

    const handleClick2 = () => {
        setShow2(!show2);
        setTipo2(show2 ? "password" : "text");
    };

    const [focusSenha, setFocusSenha] = useState("");
    const [focusSenha2, setFocusSenha2] = useState("");
    const handleFocusSenha = () => {
        setFocusSenha("border-borderFocus");
    };
    const handleBlurSenha = () => {
        setFocusSenha("");
    };
    const handleFocusSenha2 = () => {
        setFocusSenha2("border-borderFocus");
    };
    const handleBlurSenha2 = () => {
        setFocusSenha2("");
    };
    let disable = "bg-buttonCard";
    const isDisableButton = () => {
        if (
            formik.values.nome == "" ||
            formik.values.email == "" ||
            formik.values.password == "" ||
            formik.values.senha == "" ||
            !formik.isValid
        ) {
            disable = "bg-verdeEscuro";
            return true;
        } else {
            disable = "bg-verdeClaro";
            return false;
        }
    };
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmitCadastro = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
        setTimeout(() => {
            api.post("/usuario/cadastrar", {
                nome: formik.values.nome,
                email: formik.values.email,
                senha: formik.values.senha,
            })
                .then((res) => {
                    Toast.fire({
                        icon: "success",
                        title: `${res.data.message}`,
                    });
                    setTimeout(() => {
                        navigate("/login");
                    }, 3000);
                })
                .catch((err) => {
                    Toast.fire({
                        icon: "error",
                        title: `${err.response.data.message}`,
                    });
                });
        });
        setLoading(false);
    };
    return (
        <CadContainer>
            <section className="flex flex-col px-8 w-1/2 items-start">
                <Link to={"/"}>
                    <HeaderLogo />
                </Link>
                <form action="" method="post" className="flex flex-col w-full">
                    <HeaderForm
                        title="Cadastre-se no Apito Final"
                        subtitle="Faça sua conta para acessar o Apito Final."
                    />
                    <div className="flex flex-col flex-wrap gap-1.5">
                        <label
                            htmlFor="nome"
                            className="text-base font-fontPadrao font-normal leading-4 text-label"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            name="nome"
                            id="nome"
                            placeholder="Nome"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.nome}
                            onBlur={formik.handleBlur}
                            className={`w-full px-2.5 py-3.5 focus:border-0 border-borderInput bg-input border-inputBorder rounded-input border-solid font-fontPadrao font-normal text-preto text-base ${borda}`}
                        />
                        {formik.touched.nome && formik.errors.nome ? (
                            <p className="text-red-500 font-fontPadrao text-base">
                                {formik.errors.nome}
                            </p>
                        ) : null}
                    </div>
                    <div className="flex flex-col flex-wrap gap-1.5 mt-7">
                        <label
                            htmlFor="email"
                            className="text-base font-fontPadrao font-normal leading-4 text-label"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="@email.com"
                            required
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            className={`w-full px-2.5 py-3.5 focus:border-0 border-borderInput bg-input border-inputBorder rounded-input border-solid font-fontPadrao font-normal text-preto text-base ${borda1}`}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <p className="text-red-500 font-fontPadrao text-base">
                                {formik.errors.email}
                            </p>
                        ) : null}
                    </div>
                    <div className="flex flex-col flex-wrap gap-1.5 mt-7">
                        <label
                            htmlFor="password"
                            className="text-base font-fontPadrao font-normal leading-4 text-label"
                        >
                            Senha
                        </label>
                        <div>
                            <Inputi>
                                <input
                                    type={tipo}
                                    name="password"
                                    id="password"
                                    placeholder="Senha"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    onFocus={handleFocusSenha}
                                    onBlur={
                                        (formik.handleBlur, handleBlurSenha)
                                    }
                                    required
                                    minLength={6}
                                    className={`px-2.5 password py-3.5 focus:border-0 rounded-input border-borderInput text-base font-fontPadrao bg-input border-inputBorder border-solid ${borda2}`}
                                />
                                {show ? (
                                    <AiFillEye
                                        className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${borda3} ${focusSenha}`}
                                        onClick={handleClick}
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${borda3} ${focusSenha}`}
                                        onClick={handleClick}
                                    />
                                )}
                            </Inputi>
                        </div>
                        {formik.touched.password && formik.errors.password ? (
                            <p className="text-red-500 font-fontPadrao text-base">
                                {formik.errors.password}
                            </p>
                        ) : null}
                    </div>
                    <div className="flex flex-col flex-wrap gap-1.5 mt-7">
                        <label
                            htmlFor="confirmPassword"
                            className="text-base font-fontPadrao font-normal leading-4 text-label"
                        >
                            Confirmar Senha
                        </label>
                        <div>
                            <Inputi>
                                <input
                                    type={tipo2}
                                    name="senha"
                                    id="confirmPassword"
                                    placeholder="Confirmar Senha"
                                    onChange={formik.handleChange}
                                    value={formik.values.senha}
                                    onBlur={
                                        (formik.handleBlur, handleBlurSenha2)
                                    }
                                    onFocus={handleFocusSenha2}
                                    required
                                    minLength={6}
                                    className={`px-2.5 password py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid text-base font-fontPadrao border-borderInput ${borda4}`}
                                />
                                {show2 ? (
                                    <AiFillEye
                                        className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${borda5} ${focusSenha2}`}
                                        onClick={handleClick2}
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${borda5} ${focusSenha2}`}
                                        onClick={handleClick2}
                                    />
                                )}
                            </Inputi>
                        </div>
                        {formik.touched.senha && formik.errors.senha ? (
                            <p className="text-red-500 font-fontPadrao text-base">
                                {formik.errors.senha}
                            </p>
                        ) : null}
                    </div>
                    <button
                        type="submit"
                        disabled={isDisableButton()}
                        onClick={handleSubmitCadastro}
                        className={` text-white mt-6 mb-3 rounded-input py-2.5 text-lg font-fontPadrao font-semibold ${disable}`}
                    >
                        {loading ? (
                            <div className="h-6 flex justify-center items-center">
                                <AiOutlineLoading3Quarters
                                    size={30}
                                    className="animate-spin"
                                />
                            </div>
                        ) : (
                            "Cadastre-se"
                        )}
                    </button>
                </form>
            </section>
            <FooterImg />
        </CadContainer>
    );
};
