import { 
  faBars, 
  faSearch, 
  faShoppingCart, 
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useState } from "react"
import React from "react"

export default function Navbar({ orders }) {
  const [show, setShow] = useState(false);

  return (
    <div className="nav">
        <div className="inner-content">
          <h1 className="logo">
            Legendary<span> Motosport</span>
          </h1>
          <nav className={`${show && "show"}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/produtos">Produtos</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
              <li>
                <Link  to="/register">Cadastro</Link>
              </li>
              <li>
                <Link to="/register-product">Cadastrar Produto </Link>
             </li>
            </ul>
          </nav>
          <div className="navs-icon-container">
            <div className="search-input-container">
              <input type="search" placeholder="Procurar" />
              <FontAwesomeIcon icon={ faSearch } />
            </div>  
            <button className="shopping-cart">
              <FontAwesomeIcon icon={ faShoppingCart } />
              <div className="products-count">{orders.length}</div>
            </button>   
            <button className="menu-button" onClick={() => setShow(!show)}>  
              <FontAwesomeIcon icon={faBars} />  
            </button>    
          </div>
      </div>    
    </div>
  )
}
