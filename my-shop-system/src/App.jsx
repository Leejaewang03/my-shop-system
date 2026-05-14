import { useState } from "react";
import "./App.css";

const productsData = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
  },
  {
    id: 2,
    name: "Headphones",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 3,
    name: "Smartphone",
    price: 900,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
  },
  {
    id: 4,
    name: "Keyboard",
    price: 80,
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 color="black">AI Shopping Mall</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="products">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              {item.name} - ${item.price}
            </div>
          ))
        )}

        <h3>Total: ${totalPrice}</h3>

        <button className="order-btn">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default App;