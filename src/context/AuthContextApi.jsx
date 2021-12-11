import React, { useState } from "react";
export const Authcontext = React.createContext();

function CreateAuth({children}){
    const [isLogin , setLogin] = useState(false);
    const handleSignIn = () => {
        if(!isLogin){
            setLogin(true);
        }
        else{
            return true
        }
    }
    const handleSignOut = () => {
        if(isLogin){
         setLogin(false);
        }
        else{
            return false
        }
    }
    const value = [isLogin,{handleSignIn,handleSignOut}];
    return(
        <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
    )
}
export default CreateAuth;