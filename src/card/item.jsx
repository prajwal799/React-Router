import { useContext, useState } from "react";
import { AuthData } from "../context/AuthDataApi";
import { Price } from "../context/AuthPrice";

import "./module.css"

const Item = ({id,name,url,price}) => {
    const [iscount,setCount] = useState(0);
     const[isPrice,setPrice] = useContext(AuthData); 
     const [totalPrice , setTotalPrice] = useContext(Price);
     
     const handleAddItem = ({id,price}) => {
         setPrice([...isPrice,{
             id:id,
             quantity:iscount,
             price:price
         }]);
         setTotalPrice(0);

     }
    
    return(
        <>
        <div style={{margin:"10px auto" , border:"1px solid black",borderRadius:"10px",width:"400px",height:"200px"}}>
            <div style={{display:"flex",marginTop:"50px",marginLeft:"20px"}}>
            <img src={url} width="100px" height="100px"/>
            <div style={{marginLeft:"1rem"}}>
                <h4>{name}</h4>
                <h4>{price}</h4>
            </div>
            <div style={{display:"flex",height:"30px",justifyContent:"right"}}>
                <button onClick={() => setCount(iscount+1)} className="btn_add_minus">+</button>
                <h4 style={{marginTop:"0px"}}>{iscount}</h4>
                <button onClick={() => setCount(iscount-1)}  className="btn_add_minus">-</button>
            </div>
            </div>
            <button className="add_btn" onClick={() => handleAddItem({id,price})}>Add Item</button>
        </div>
        </>
    )
}
export default Item;