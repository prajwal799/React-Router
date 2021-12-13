import { Children, createContext, useEffect, useState } from "react";

export const Price = createContext();

const SetPrice = ({children}) =>  {
    const [totalPrice , setTotalPrice] = useState(0);
    return(
        <Price.Provider value={[totalPrice,setTotalPrice]}>{children}</Price.Provider>
    )
}
export default SetPrice