import data from "../data.json"
import React from "react";
import Item from "./item";

export default class Card extends React.Component{
    render() {
        return(
            <>
              <h3>ITem List:</h3>
              {data.map((item) => (
                  <Item  key={item.id} id={item.id} name={item.product_name} url={item.image_url} price={item.price}/>
              ))}
            </>
           )
    }
}
