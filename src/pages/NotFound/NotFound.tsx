import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className='notfound'>
      <div className='notfound__img'>
        <img src='/not-found/notfound.png' alt='confused person' />
      </div>
      <div className='notfound__text'>
        <h2>The page you were looking for could not be found.</h2>
        <Link className='notfound__text-link' to='/'>
          Go back to the home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
