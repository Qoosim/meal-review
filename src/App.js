import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Meals from './Meals';

function App() {

  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);

  const fetchFromApi = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setLoading(false);
      setMeals(data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFromApi();
  }, [])

  const deleteMeal = (id) => {
    const newMeals = meals.filter((meal) => meal.idCategory !== id);
    setMeals(newMeals);
  }

  if (loading) {
    return (
      <main className="text-center p-5 text-5xl font-bold">
        <Loading />
      </main>
    )
  }

  if (meals.length === 0) {
    return (
      <main className="text-center p-5 text-5xl font-bold">
        <h4>no meal to order</h4>
        <button 
          onClick={() => fetchFromApi()}
          className="text-lg px-2 text-white bg-sky-500 capitalize"
        >
          refresh
        </button>
      </main>
    )
  };

  return (
    <main className="container mx-auto flex place-content-center mt-9">
      <Meals 
        meals={meals}
        deleteMeal={deleteMeal}
      />
    </main>
  );
}

export default App;
