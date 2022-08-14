import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/userType";
import { AuthContext } from "../authContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect(() => {
        const validateToken = async () => {
            const storageData = localStorage.getItem("authToken");
            if (storageData) {
                const data = await api.validateToken(storageData);
                setUser(data.user);
            }
        };
        validateToken();
    }, [api]);

    const singin = async (email: string, password: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any = await api.singin(email, password);
        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    };
    const perfil = async (imagem: string) => {
        const data = await api.perfil(imagem);
        if (data.user) {
            setUser(data.user);
            return true;
        }
        return false;
    };
    const singout = async () => {
        setUser(null);
        setToken("");
    };
    const setToken = (token: string) => {
        localStorage.setItem("authToken", token);
    };
    return (
        <AuthContext.Provider value={{ user, singin, singout }}>
            {children}
        </AuthContext.Provider>
    );
};
