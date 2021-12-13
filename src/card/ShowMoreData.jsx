import { useParams } from "react-router-dom";
import data from "../data.json"
import Item from "./item";

const ShowMoreData = () => {
     const {id} = useParams();
     const showId = id;
    
     
    return(
       <div><br /><br /><br />
        {data.filter(({id,price,product_name,image_url}) => {
            
            if(id == showId[1]){
                return id;
            }
        }).map((item) => (
            <Item  key={item.id} id={item.id} name={item.product_name} url={item.image_url} price={item.price} showmore={item.description}/>
        )) 
}
       </div>
    )
}
export default ShowMoreData;