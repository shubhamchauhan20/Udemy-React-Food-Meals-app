import React from 'react'
import './AvilableMeals.css';
import MealIteam from './MealItem/MealIteam';
import Card from '../UI/Card';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
export default function AvilableMeals() {
    const mealsList= DUMMY_MEALS.map(meals => <MealIteam key={meals.id} name={meals.name} description={meals.description} price={meals.price}/>)
  return (
    <section>
        <Card>
        <ul className='meals'>{mealsList}</ul>
        </Card>
    </section>
  )
}
