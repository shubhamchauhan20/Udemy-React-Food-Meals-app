import React from 'react'
import './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealIteam(props) {
    // var currancy = <span>&#8377;</span>
    const price= props.price.toFixed(2) 
    var price1 = `$${price}`
    return (
        <li>
            <div><h3 className='meal'>{props.name}</h3></div>
            <div className='discription'>{props.description}</div>
            <div className='price'>{price1}</div>
            <div>
                <MealItemForm />
            </div>
        </li>
    )
}
