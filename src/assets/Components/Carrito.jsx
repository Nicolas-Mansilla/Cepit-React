import React from 'react';

function Carrito({ cartItems, navigateTo }) {
  const obtenerPrecioTotal = () => {
    return cartItems.reduce((total, producto) => total + producto.price, 0);
  };

  return (
    <div className="carrito">
      <h1 className="mt-4">Carrito</h1>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map(producto => (
            <div key={producto.id} className="card mt-4">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={producto.image}
                    className="img-fluid imagen-producto"
                    alt={producto.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text">Precio: ${producto.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
