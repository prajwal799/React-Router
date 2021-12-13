import { useContext, useEffect } from "react";
import { AuthData } from "../context/AuthDataApi";
import { Price } from "../context/AuthPrice";
import "./module.css"

const CardItemList = ({price,quantity}) => {
    const [totalPrice , setTotalPrice] = useContext(Price)
    let final_Price = price*quantity;
     useEffect(() => {
      setTotalPrice((totalPrice) => {
          console.log(totalPrice,"total");
          console.log(final_Price,"final");
          console.log(totalPrice+final_Price,"hgghjgj");
           return totalPrice+final_Price;
      });
     },[])
    return(
       <>
       <tr>
            <td >Item:</td>
            <td >{price}</td>
             <td >{quantity}</td>
             <td >{final_Price}</td>
        </tr>
       </>
       
    )
    
}
export default CardItemList