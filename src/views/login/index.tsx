import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FooterImg } from "../../components/login/footer";
import { HeaderForm } from "../../components/login/headerForm";
import { HeaderLogo } from "../../components/login/logo";
import { LoginContainer, Inputi } from "./style";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [tipo, setTipo] = useState("password");
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
        setTipo(showPassword ? "password" : "text");
    };
    const [focusSenha, setFocusSenha] = useState("");
    const handleFocusSenha = () => {
        setFocusSenha("border-borderFocus");
    };
    const handleBlurSenha = () => {
        setFocusSenha("");
    };

    const SinginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Insira um e-mail válido")
            .required("O e-mail é obrigatório"),
        senha: Yup.string()
            .min(6, "A senha deve ter no mínimo 6 caracteres")
            .required("A senha é obrigatória"),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            senha: "",
        },
        validationSchema: SinginSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });
    let borda = "border-borderInput";
    if (formik.errors.email && formik.values.email != "") {
        borda = "border-red-500";
    } else if (formik.values.email != "") {
        borda = "border-green-500";
    }
    let borda2 = "border-borderInput";
    let border3 = "border-borderInput";
    if (formik.errors.senha && formik.values.senha != "") {
        borda2 = "border-red-500";
        border3 = "border-red-500";
    } else if (formik.values.senha != "") {
        borda2 = "border-green-500";
        border3 = "border-green-500";
    }
    let disable = "bg-verdeEscuro";
    const isDisableButton = () => {
        if (
            formik.values.email == "" ||
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
    return (
        <LoginContainer>
            <section className="flex flex-col px-8 w-1/2 items-start">
                <Link to="/">
                    <HeaderLogo />
                </Link>
                <form action="" method="post" className="flex flex-col w-full">
                    <HeaderForm
                        title="Bem-vindo ao Apito Final"
                        subtitle="Faça o login para acessar sua conta."
                    />
                    <div className="flex flex-col flex-wrap gap-1.5">
                        <label
                            htmlFor="email"
                            className="text-base font-padrao font-normal leading-4 text-label"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="@email.com"
                            name="email"
                            id="email"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`w-full px-2.5 py-3.5 focus:border-0 border-borderInput bg-input border-inputBorder rounded-input border-solid font-fontPadrao font-normal text-preto text-base ${borda}`}
                        />
                        <p>
                            {formik.errors.email && formik.touched.email ? (
                                <span className="text-red-500 text-base font-fontPadrao">
                                    {formik.errors.email}
                                </span>
                            ) : null}
                        </p>
                    </div>
                    <div className="flex flex-col flex-wrap gap-1.5 mt-6">
                        <label
                            htmlFor="password"
                            className="text-base font-padrao font-normal leading-4 text-label"
                        >
                            Senha
                        </label>
                        <div>
                            <Inputi>
                                <input
                                    type={tipo}
                                    placeholder="Senha"
                                    name="senha"
                                    id="senha"
                                    required
                                    min={6}
                                    value={formik.values.senha}
                                    onChange={formik.handleChange}
                                    onBlur={
                                        (formik.handleBlur, handleBlurSenha)
                                    }
                                    onFocus={handleFocusSenha}
                                    className={`px-2.5 password py-3.5 focus:border-0 border-borderInput  bg-input border-inputBorder rounded-input border-solid font-fontPadrao font-normal text-preto text-base ${borda2}`}
                                />
                                {showPassword ? (
                                    <AiFillEye
                                        className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${focusSenha} ${border3}`}
                                        onClick={handleClickShowPassword}
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        className={`h-13 w-8 bg-input olho border-solid border-inputBorder ${focusSenha} ${border3}`}
                                        onClick={handleClickShowPassword}
                                    />
                                )}
                            </Inputi>
                            <p>
                                {formik.errors.senha && formik.touched.senha ? (
                                    <span className="text-red-500 text-base font-fontPadrao">
                                        {formik.errors.senha}
                                    </span>
                                ) : null}
                            </p>
                        </div>
                    </div>
                    <Link
                        to={"/recuperarSenha"}
                        className="text-verdeClaro font-fontPadrao font-semibold text-right mt-7 text-base"
                    >
                        Esqueceu a senha?
                    </Link>
                    <button
                        type="submit"
                        disabled={isDisableButton()}
                        className={`${disable} text-white mt-6 rounded-input py-2.5 text-base font-sans font-semibold `}
                    >
                        Entrar
                    </button>
                    <p className="mt-6 font-fontPadrao font-semibold text-base text-labelLogin">
                        Ainda não tem uma conta?{" "}
                        <Link to={"/singup"} className="text-verdeClaro">
                            Criar Conta
                        </Link>
                    </p>
                </form>
            </section>
            <FooterImg />
        </LoginContainer>
    );
};
