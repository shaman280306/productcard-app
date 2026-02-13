import "./ProductCard.css";

function ProductCard(props) {

  return (
    <div className="card">

      <img 
        src={props.image} 
        alt={props.name}
        className="product-image"
      />

      <h2>{props.name}</h2>

      <p className="price">{props.price}</p>

      {props.inStock ? (
        <p className="stock in">In Stock</p>
      ) : (
        <p className="stock out">Out of Stock</p>
      )}

    </div>
  );
}

export default ProductCard;
