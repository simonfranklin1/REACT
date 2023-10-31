import { useContext } from "react";
import { TitleColorContext } from "../context/TltleColorContext";


export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if(!context) {
        console.log("Contexto não encontrado!")
    }

    return context;
}