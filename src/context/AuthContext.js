import { createContext, useContext, useState } from "react";

const AuthContext  = createContext();

const AuthContextprovider = ({children}) => {
    const initialValues = { username: "", email: "", password: "" };
    const [user , setUser] = useState(initialValues);
    const logIn = (user) =>{
        setUser(user);
        
    }
    const logOut = () =>{
        setUser(initialValues);
    }
    return (<AuthContext.Provider value = {{user, logIn, logOut}}>{children}</AuthContext.Provider>)
}

export const useAuth = () => {
    return useContext(AuthContext);
}
export default  AuthContextprovider;