import { Children, createContext, useState } from "react";

export const AuthData = createContext();
 
function ItemListAdd({children}){
    const[isPrice,setPrice] = useState([]);
   
    return(
        <AuthData.Provider value={[isPrice,setPrice]}>{children}</AuthData.Provider>
    )
}
export default ItemListAdd;