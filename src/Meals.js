import React from 'react';
import Meal from './Meal';

const Meals = ({ meals, deleteMeal }) => {
  return (
    <main className="w-2/5">
      <div className="mb-8">
        <h2 className="capitalize text-4xl font-bold text-center my-8 font-mont">our meals</h2>
        <div className="border-2 border-blue-300 w-24 mx-auto -mt-7"></div>
      </div>
      {
        meals.map((meal) => {
          return (
            <Meal 
              key={meal.idCategory}
              {...meal}
              deleteMeal={deleteMeal}
            />
          )
      })
      }
    </main>
  )
}

export default Meals;
