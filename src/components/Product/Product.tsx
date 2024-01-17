import './Product.css';

interface ProductProps {
  discount: number;
  price: number;
  image: string;
  title: string;
  id: number;
}

const Product = ({ discount, price, image, title, id }: ProductProps) => {
  return (
    <div id={`product-${id}`} className='product'>
      <img src={image} alt={title} />
      <div className='product__info'>
        <h2>{title}</h2>
        <div className='product__info-price'>
          <p>{discount}% OFF</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
