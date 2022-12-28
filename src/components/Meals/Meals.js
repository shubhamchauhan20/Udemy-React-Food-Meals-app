import React from 'react'
import AvilableMeals from './AvilableMeals'
import MealsSummary from './MealsSummary'
import { Fragment } from 'react'

export default function Meals() {
  return (
    <Fragment>
        <AvilableMeals />
        <MealsSummary />
    </Fragment>
  )
}
