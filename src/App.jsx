import React, { useState } from 'react';
import ListaDeProductos from './assets/Components/ListaDeProductos';
import Carrito from './assets/Components/Carrito';

import './index.css';

function App() {
  // Estado para controlar la página actual
  const [page, setPage] = useState('productList');
  // Estado para almacenar los elementos del carrito
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Función para navegar a una página 
  const navigateTo = (page) => {
    setPage(page);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Tienda de Chucherías</h1>
      {page === 'productList' && (
        // Componente de la lista de productos
        <ListaDeProductos agregarAlCarrito={addToCart} irAlCarrito={() => navigateTo('cart')} />
      )}
      {page === 'cart' && (
        // Componente del carrito
        <Carrito cartItems={cartItems} navigateTo={navigateTo} />
      )}
    </div>
  );
}

export default App;
