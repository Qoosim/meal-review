import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <>
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
    </>
  )
}

export default Tours;
