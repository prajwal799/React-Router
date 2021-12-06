import axios from "axios";
import React , { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
    const [data , setData] = useState([]);
    useEffect(() => {
      axios(' http://localhost:3001/posts')
      .then((res) => {
          setData(res.data);
      })
      .catch((err)=>{
          console.log(err);
      })
    },[])
    return(
        <div>
            <div>

            {data.map((item) =>(
                <div key={item.id}>
                 <h1>{item.product}</h1>
                <Link to={`/product/${item.id}`}>Show more</Link>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Product