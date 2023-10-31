import { createContext } from "react";

export const SomeContext = createContext();

export const SomeContextProvider = ({children}) => {
    const valor = "Testando o contexto";


    return (
        <SomeContext.Provider value={{valor}} >
            {children}   
        </SomeContext.Provider>
    )
}