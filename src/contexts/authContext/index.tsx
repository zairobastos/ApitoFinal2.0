/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from "react";
import { AuthContextType } from "../../types/authContextType";

export const AuthContext = createContext<AuthContextType>(null!);
