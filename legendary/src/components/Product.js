import { faCartShopping, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({id, image, nome, rate, preco, addToOrders }) => {
    return (
        <div className='product'>
            <img src={image} alt={nome}/>
            <p className='nome'>{nome}</p>
            <p className="rate">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p className='price'>
             <span>R$</span> {preco}
            </p>
            <div className='buttons'>
                <Link to="/products/123/checkout" className='btn-icon'>
                    <span>Comprar agora</span>
                    <FontAwesomeIcon icon={faMoneyBill}/>
                </Link>
                <button 
                className='btn-icon add-to-cart-btn'
                onClick={() => addToOrders({ id, nome, preco })}>
                <span>Adicionar ao carrinho</span>
                <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
        </div>
    );
}

export default Product; 

