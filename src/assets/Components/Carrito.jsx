import React from 'react';

function Carrito({ cartItems, navigateTo, removeFromCart }) {
  const obtenerPrecioTotal = () => {
    return cartItems.reduce((total, producto) => total + producto.price * producto.quantity, 0);
  };

  return (
    <div className="carrito">
      <h1 className="mt-4">Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Agregamos la clase "justify-content-center" para centrar la columna */}
          <div className="row row-cols-1 row-cols-md-3 justify-content-center">
            {cartItems.map(producto => (
              <div key={producto.id} className="col mb-4">
                <div className="card">
                  <img src={producto.image} className="card-img-top" alt={producto.title} />
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">Precio: ${producto.price}</p>
                    <p className="card-text">Cantidad: {producto.quantity}</p>
                    {/* Botón para eliminar el producto del carrito */}
                    <button className="btn btn-danger" onClick={() => removeFromCart(producto.id)}>
                      Eliminar del carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="total mt-4">
            <p>Total: ${obtenerPrecioTotal().toFixed(2)}</p>
          </div>
        </>
      )}
      <button
        className="btn btn-primary mt-4"
        onClick={() => navigateTo('productList')}
      >
        Volver a productos
      </button>
    </div>
  );
}

export default Carrito;