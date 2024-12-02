import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function Header (){
    return (
    <header>
        <div className="inner-content">
            <div className="left-side">
                <h2>Maior loja de compra e venda de carros do Brasil</h2>
                <p>
                    Os melhores carros com os melhores preços do mercado
                </p>
                <Link to="/products" className="see-more-btn">
                    <span>Ver Agora</span>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div className="right-side">
                <img src="https://blog.paitomotors.com.br/wp-content/uploads/2020/09/CAPA-1920x800.jpg"  alt="Logo Externa"/>
            </div>              
        </div>
    </header> 
    );
}


