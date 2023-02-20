import { createContext , useState} from "react"; 
import useAuth from "../pages/Login/hooks/useAuth";


export const context = createContext()

export function AuthProvider ({children}){
   const authContent = useAuth()
    return(
        <context.Provider value={authContent}>
            {children}
        </context.Provider>
    )
}

 AuthProvider