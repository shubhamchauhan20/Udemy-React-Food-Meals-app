import { Fragment } from 'react';

import mealsImage from '../../assets/meals3.jpg';
import './Header.modules.css';
import HeaderCartButton from './HeaderCartButton';



const Header = (props) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;