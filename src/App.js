import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

function App() {

  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchFromApi = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setLoading(false);
      setTours(data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFromApi();
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main className="container mx-auto flex place-content-center">
      <Tours 
        tours={tours}
      />
    </main>
  );
}

export default App;
