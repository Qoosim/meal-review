import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <main className="w-2/5 border-2 border-gray">
      <div>
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      {
        tours.map((tour) => {
          return (
            <Tour 
              key={tour.idCategory}
              {...tour}
            />
          )
      })
      }
    </main>
  )
}

export default Tours;
