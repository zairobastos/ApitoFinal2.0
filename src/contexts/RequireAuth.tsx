import { useContext } from "react";
import { AuthContext } from "./authContext";
import { Login } from "../views/login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Login />;
    }
    return children;
};
