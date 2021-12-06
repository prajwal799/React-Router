import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../Navbar/ProductCard";
function getData(id){
    return axios.get('http://localhost:3001/posts/'+id)
}

const ProductDetalis = () => {
    const {id} = useParams();
    const [datauser , setDataUser] = useState([]);
    const [isLoading , setLoading] = useState(false);
    const [isError , setError] = useState(false);
     useEffect(()=>{
         handleData()
     },[])

     const handleData = async () => {
         try{
             setLoading(true);
             const {data} = await getData(id);
             setDataUser(data);
             setLoading(false);
             setError(false);
         }
         catch{
           setError(true);
         }
     }
     if(isError){
         return <h1>Some Error</h1>
     }
     if(isLoading){
         return <h1>...Loading</h1>
     }
     console.log(datauser);
    return(
        <div>
         
            <div>
                <ProductCard key={datauser.id}  id={datauser.id} name={datauser.product} price={datauser.price} src={datauser.url} />
                </div>    
        </div>
    )
}
export default ProductDetalis