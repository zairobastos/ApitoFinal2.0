import { api } from "../server/api";

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post("/auth/verifyToken", { token });
        return response.data;
    },
    singin: async (email: string, senha: string) => {
        const response = await api.post("/usuario/login", { email, senha });
        return response.data;
    },
    singout: async () => {
        const response = await api.post("/usuario/logout");
        return response.data;
    },
    perfil: async (imagem: string) => {
        const response = await api.post("/usuario/perfil", { imagem });
        return response.data;
    },
});
