import React, { createContext, useReducer } from "react";
import "/config/config";
import { prefix } from "../config/config";

export interface globalValue {
    prefix: string;
}

export const PortfolioContext = createContext<globalValue>({
    prefix: "",
});

export const PortfolioConsumer = PortfolioContext.Consumer;

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
    return (
        <PortfolioContext.Provider value={{ prefix: prefix }}>
            {children}
        </PortfolioContext.Provider>
    );
}


export default PortfolioContext;