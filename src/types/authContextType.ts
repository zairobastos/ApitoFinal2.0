import { User } from "./userType";

export type AuthContextType = {
    user: User | null;
    singin: (email: string, password: string) => Promise<boolean>;
    singout: () => void;
};
