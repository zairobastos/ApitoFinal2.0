/* eslint-disable indent */
import React from "react";

import { Listagem } from "../../components/paginaInternas/listagem/jogador";
import { Menu } from "../../components/paginaInternas/menu";
import { Title } from "../../components/paginaInternas/title";
import { Cards } from "../../components/paginaInternas/cards";

import CANO from "../../assets/images/paginaInterna/CANO.png";

import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export const Jogadores = () => {
    const cadastrarJogadores = Yup.object().shape({
        nome: Yup.string()
            .min(3, "O nome deve ter no mínimo 3 caracteres")
            .required("O nome é obrigatório"),
        numero: Yup.number()
            .min(1, "O número deve ser maior que 0")
            .required("O número é obrigatório"),
    });
    const formik = useFormik({
        initialValues: {
            nome: "",
            numero: "",
            imagem: "",
        },
        validationSchema: cadastrarJogadores,
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
    if (formik.errors.numero && formik.values.numero != "") {
        borda1 = "border-red-500";
    } else if (formik.values.numero != "") {
        borda1 = "border-green-500";
    }

    const cadJoagador = () => {
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
            title: "Jogador cadastrado com sucesso!",
        });
    };
    return (
        <div>
            <Menu ativo3="ativo" />
            <section className="flex flex-col px-10 pt-32 w-full bg-input h-full">
                <Title
                    Titulo="Jogadores"
                    Subtitulo="Lista de seus jogadores de futebol cadastrados"
                />
                <div className="flex flex-row flex-wrap gap-gapCards mt-8 items-start mb-8">
                    <Cards>
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                        <Listagem nome="German Cano" foto={CANO} />
                    </Cards>

                    <div className="flex flex-col w-1/4 border-2 border-solid border-borderForm bg-white shadow-menu rounded-xl pt-8 px-5">
                        <h2 className="font-fontPadrao font-normal text-xl text-preto mb-10">
                            Novo Jogador
                        </h2>
                        <form
                            action=""
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
                                        className={`px-2.5 py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid ${borda}`}
                                    />
                                    {formik.errors.nome &&
                                    formik.touched.nome ? (
                                        <p className="text-red-500 text-sm font-fontPadrao">
                                            {formik.errors.nome}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex flex-col flex-wrap gap-1.5">
                                    <label
                                        htmlFor="posicao"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Posicao
                                    </label>
                                    <select
                                        name="posicao"
                                        id="posicao"
                                        required
                                        className={
                                            "px-2.5 py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid"
                                        }
                                    >
                                        <optgroup label="Posições">
                                            <option value="Goleiro">
                                                Goleiro
                                            </option>
                                            <option value="Zagueiro">
                                                Zagueiro
                                            </option>
                                            <option value="Lateral">
                                                Lateral
                                            </option>
                                            <option value="Meio">Meio</option>
                                            <option value="Atacante">
                                                Atacante
                                            </option>
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="flex flex-col flex-wrap gap-1 5">
                                    <label
                                        htmlFor="timeId"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Time
                                    </label>
                                    <select
                                        name="timeId"
                                        id="timeId"
                                        required
                                        className={
                                            "px-2.5 py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid"
                                        }
                                    >
                                        <optgroup label="Times"></optgroup>
                                    </select>
                                </div>
                                <div className="flex flex-col flex-wrap gap-1.5">
                                    <label
                                        htmlFor="numero"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Número da camisa
                                    </label>
                                    <input
                                        type="number"
                                        name="numero"
                                        id="numero"
                                        placeholder="Número da camisa"
                                        required
                                        min={1}
                                        onChange={formik.handleChange}
                                        value={formik.values.numero}
                                        onBlur={formik.handleBlur}
                                        className={`px-2.5 py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid ${borda1}`}
                                    />
                                    {formik.touched.numero &&
                                    formik.errors.numero ? (
                                        <p className="text-red-500 font-fontPadrao text-sm">
                                            {formik.errors.numero}
                                        </p>
                                    ) : null}
                                </div>
                                <div className="flex flex-col flex-wrap gap-1.5">
                                    <label
                                        htmlFor="Foto"
                                        className="text-base font-fontPadrao font-semibold leading-4 text-label"
                                    >
                                        Foto do Jogador
                                    </label>
                                    <input
                                        type="file"
                                        name="imagem"
                                        id="Foto"
                                        required
                                        onChange={formik.handleChange}
                                        value={formik.values.imagem}
                                        onBlur={formik.handleBlur}
                                        className={
                                            "px-2.5 password py-3.5 rounded-input focus:border-0 bg-input border-inputBorder border-solid w-full"
                                        }
                                    />
                                </div>
                                <input
                                    type="hidden"
                                    name="userId"
                                    id="userId"
                                    value={""}
                                />
                                <button
                                    type="submit"
                                    onClick={cadJoagador}
                                    className={
                                        "rounded text-white font-fontPadrao font-bold text-lg py-2 mb-4 bg-verdeEscuro"
                                    }
                                >
                                    Cadastrar Jogador
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
