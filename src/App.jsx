import React, { useState } from 'react';
import ListaDeProductos from './assets/Components/ListaDeProductos';
import Carrito from './assets/Components/Carrito';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FaShoppingCart } from 'react-icons/fa';

import './index.css';

function App() {
  const [page, setPage] = useState('productList');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCartItems = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // Asegúrate de que el producto tenga la propiedad "image" con la URL de la imagen
      setCartItems([...cartItems, { ...product, quantity: 1, image: product.image }]);
    }
  };
  
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const navigateTo = (page) => {
    setPage(page);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Tienda de Chucherías</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link onClick={() => navigateTo('cart')}>
              <FaShoppingCart /> Carrito ({cartItems.length})
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Contenido */}
      <div className="container mt-4">
        {page === 'productList' && (
          <ListaDeProductos
            agregarAlCarrito={addToCart}
            irAlCarrito={() => navigateTo('cart')}
          />
        )}
        {page === 'cart' && (
          <Carrito
            cartItems={cartItems}
            navigateTo={navigateTo}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </div>
  );
}

export default App;
