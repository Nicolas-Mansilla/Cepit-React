import React, { useEffect, useState } from 'react';

function ListaDeProductos({ agregarAlCarrito, irAlCarrito }) {
  // Estado para almacenar la lista de productos
  const [productos, setProductos] = useState([]);
  // Estado para almacenar un posible error al obtener los productos
  const [error, setError] = useState(null);  

  useEffect(() => {
    // Realizar la solicitud a la API para obtener los productos
    fetch('https://fakestoreapi.com/products')
      .then(respuesta => respuesta.json())
      .then(data => {
        // Almacenar los productos en el estado
        setProductos(data);
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
        // Almacenar el error en el estado
        setError('Error al obtener los productos. Por favor, inténtalo de nuevo más tarde.');
      });
  }, []);

  return (
    <div className="lista-de-productos row row-cols-1 row-cols-md-4 g-4">
      {error ? (
        // Mostrar mensaje de error si ocurrió un error al obtener los productos
        <p>{error}</p>
      ) : (
        <>
          {/* Iterar sobre la lista de productos */}
          {productos.map(producto => (
            <div key={producto.id} className="col">
              <div className="card">
                {/* Mostrar la imagen del producto */}
                <img
                  src={producto.image}
                  className="card-img-top"
                  alt={producto.title}
                />
                <div className="card-body">
                  {/* Mostrar el titulo y precio del producto */}
                  <h5 className="card-title">{producto.title}</h5>
                  <p className="card-text">Precio: ${producto.price}</p>
                  {/* Boton para agregar el producto al carrito */}
                  <button
                    className="btn btn-primary"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Botón para ir al carrito */}
          <button
            className="btn btn-primary mt-4"
            onClick={irAlCarrito}
          >
            Ir al carrito
          </button>
        </>
      )}
    </div>
  );
}

export default ListaDeProductos;
