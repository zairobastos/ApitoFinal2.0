import React from "react";
import { Carde } from "./style";
type Props = {
    children: React.ReactNode;
};
export const Cards = ({ children }: Props) => {
    return <Carde>{children}</Carde>;
};
