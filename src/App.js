import ProductCard from "./ProductCard";

function App() {

  const products = [

    {
      name: "iPhone 15",
      price: "₹79,999",
      image: "https://via.placeholder.com/200",
      inStock: true
    },

    {
      name: "Samsung Galaxy S24",
      price: "₹74,999",
      image: "https://via.placeholder.com/200",
      inStock: false
    },

    {
      name: "OnePlus 12",
      price: "₹64,999",
      image: "https://via.placeholder.com/200",
      inStock: true
    },

    {
      name: "Google Pixel 8",
      price: "₹75,999",
      image: "https://via.placeholder.com/200",
      inStock: true
    },

    {
      name: "Xiaomi 14",
      price: "₹59,999",
      image: "https://via.placeholder.com/200",
      inStock: false
    },

    {
      name: "Realme GT 6",
      price: "₹35,999",
      image: "https://via.placeholder.com/200",
      inStock: true
    },

    {
      name: "Nothing Phone 2",
      price: "₹44,999",
      image: "https://via.placeholder.com/200",
      inStock: true
    }

  ];

  return (

    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>

      {products.map((product, index) => (

        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          inStock={product.inStock}
        />

      ))}

    </div>

  );

}

export default App;
