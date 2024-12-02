import React from "react";
import Product from "./Product";

export default function ProductsLists({ products, addToOrders }) {
    return (
        <div className="product-list">
            {products.map((product) => ( 
                <Product key={product.id} {...product} addToOrders={addToOrders}  />
            ))}
        </div>
    )

} 