function ProductCard({id,name,price,src}){
    return(
        <div>
            <h1>User id : {id}</h1>
            <h3>{name}</h3>
            <h5>{price}</h5>
            <img src={src} width="200px" height="200px" />
        </div>
    )
}
export default ProductCard