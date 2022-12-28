import React from 'react'
import CartIcon from '../Cart/CartIcon'
import './HeaderCartButton.css';

export default function HeaderCartButton() {
  return (
    <button className='button'>
      <span className='icon'>
        <CartIcon />
      </span>
      <span className=''>Cart Item</span>
      <span className='badge'>3</span>
    </button>
  )
}
