import React, { useState } from "react";

export default function RegisterProduct({ addProduct }) {
  const [formData, setFormData] = useState({
    nome: "",
    preco: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // Gerando um id único com base no timestamp
      ...formData,
    };
    addProduct(newProduct);
    setFormData({ nome: "", preco: "", image: "" }); // Resetando o formulário
    alert("Produto cadastrado com sucesso!");
  };

  return (
    <div className="register-product-container">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Imagem (URL):</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
} 
