/* eslint-disable indent */
import React from "react";
import { Cards } from "../../components/paginaInternas/cards";
import { Listagem } from "../../components/paginaInternas/listagem/time";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";

import Fluminense from "../../assets/images/paginaInterna/fluminense.svg";

import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const Times = () => {
    const cadastrarTimes = Yup.object().shape({
        nome: Yup.string()
            .min(3, "O nome deve ter no mínimo 3 caracteres")
            .required("O nome é obrigatório"),
        abreviacao: Yup.string()
            .max(3, "A abreviação deve ter no máximo 3 caracteres")
            .required("A abreviação é obrigatória"),
        escudo: Yup.string().required("O escudo é obrigatório"),
    });
    const formik = useFormik({
        initialValues: {
            nome: "",
            abreviacao: "",
            escudo: "",
        },
        validationSchema: cadastrarTimes,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    let [borda, borda1] = "border-borderInput";
    if (formik.errors.nome && formik.values.nome != "") {
        borda = "border-red-500";
    } else if (formik.values.nome != "") {
        borda = "border-green-500";
    }
    if (formik.errors.abreviacao && formik.values.abreviacao != "") {
        borda1 = "border-red-500";
    } else if (formik.values.abreviacao != "") {
        borda1 = "border-green-500";
    }

    let disable = "bg-verdeEscuro";
    const isDisableButton = () => {
        if (
            formik.values.nome == "" ||
            formik.values.abreviacao == "" ||
            formik.values.escudo == "" ||
            !formik.isValid
        ) {
            disable = "bg-verdeEscuro";
            return true;
        } else {
            disable = "bg-verdeClaro";
            return false;
        }
    };
    const cadTime = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            width: 370,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: "success",
            title: "Time cadastrado com sucesso!",
        });
    };
    return (
        <div>
            <Menu ativo2="ativo" />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-full">
                <Title
                    Titulo="Times"
                    Subtitulo="Lista de suas equipes de futebol cadastrados"
                />
                <div className="flex flex-row flex-wrap gap-gapCards mt-8 items-start mb-8">
                    <Cards>
                        <Listagem foto={Fluminense} nome="Fluminense" />
                        <Listagem foto={Fluminense} nome="Fluminense" />
                        <Listagem foto={Fluminense} nome="Fluminense" />
                        <Listagem foto={Fluminense} nome="Fluminense" />
                    </Cards>
                    <div className="flex flex-col w-1/4 border-2 border-solid border-borderForm bg-white shadow-menu rounded-xl pt-8 px-5">
                        <h2 className="font-fontPadrao font-normal text-xl text-preto mb-10">
                            Novo Time
                        </h2>
                        <form
                            method="post"
                            className="flex flex-col flex-wrap gap-8"
                        >
                            <div className="flex flex-col flex-wrap gap-8 w-full">
                                <div className="flex flex-col flex-wrap gap-1.5">
                                    <label
                                        htmlFor="nome"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
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
                                        className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda}`}
                                    />
                                    {formik.touched.nome &&
                                    formik.errors.nome ? (
                                        <p className="text-red-500 font-fontPadrao text-sm">
                                            {formik.errors.nome}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex flex-col flex-wrap gap-1.5">
                                    <label
                                        htmlFor="abreviacao"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Abreviação
                                    </label>
                                    <input
                                        type="text"
                                        name="abreviacao"
                                        id="abreviacao"
                                        placeholder="Abreviação"
                                        maxLength={3}
                                        required
                                        onChange={formik.handleChange}
                                        value={formik.values.abreviacao}
                                        onBlur={formik.handleBlur}
                                        className={`px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid ${borda1}`}
                                    />
                                    {formik.touched.abreviacao &&
                                    formik.errors.abreviacao ? (
                                        <p className="text-red-500 font-fontPadrao text-sm">
                                            {formik.errors.abreviacao}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex flex-col flex-wrap gap-1.5">
                                    <label
                                        htmlFor="escudo"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Escudo
                                    </label>
                                    <input
                                        type="file"
                                        name="escudo"
                                        id="escudo"
                                        required
                                        onChange={formik.handleChange}
                                        value={formik.values.escudo}
                                        onBlur={formik.handleBlur}
                                        className={
                                            "px-2.5 password py-3.5 rounded-inputLogin bg-input border-inputBorder border-solid w-full"
                                        }
                                    />
                                </div>
                                <input
                                    type="hidden"
                                    name="userId"
                                    id="userId"
                                    value={"teste"}
                                />
                                <button
                                    type="submit"
                                    disabled={isDisableButton()}
                                    onClick={cadTime}
                                    className={`rounded text-white font-fontPadrao font-bold text-lg py-2 mb-4 ${disable}`}
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
