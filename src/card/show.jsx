import { useContext } from "react"
import { AuthData } from "../context/AuthDataApi"
import { Price } from "../context/AuthPrice";
import Card from "./card";
import CardItemList from "./cardItemList";
import "./module.css"

function Show(){
  const [isPrice,setPrice] = useContext(AuthData);
  const [totalPrice , setTotalPrice] = useContext(Price);
    console.log(totalPrice,'price2');
    return(
        <div> <br /><br />
          <table border="1" style={{margin:"10px auto" , border:"1px solid black",width:"300px"}}>
            <tr>
              <th colSpan="3">Invoice</th>
            </tr>
            <tr>
              <th >Item</th>
              <th >Qty</th>
              <th >Price</th>
              <th >Final Price</th>
            </tr>
            {isPrice.map((item) => (
              <CardItemList key={item.id} name={item.name} price={item.price} quantity={item.quantity} />
            ))}
            <tr>
              <th colspan="3">Total Price</th>
              <th>{totalPrice}</th>
            </tr>
            
          </table>
        </div>
    )
}
export default Show