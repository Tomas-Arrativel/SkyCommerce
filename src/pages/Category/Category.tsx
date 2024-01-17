import { useParams } from 'react-router-dom';
import './Category.css';

const Category = () => {
  const { cat } = useParams();
  return <div>Category {cat}</div>;
};

export default Category;
