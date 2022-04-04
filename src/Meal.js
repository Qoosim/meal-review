import React from 'react';

const Meal = ({ idCategory, strCategory, strCategoryDescription, strCategoryThumb, deleteMeal }) => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <article className="shadow-xl my-8 p-2 rounded-md bg-white">
      <img 
        src={strCategoryThumb}
        alt={strCategory} 
        className="mx-auto my-5"
      />
      <footer>
        <h3 className="text-3xl font-bold mb-4 font-roboSlab">{strCategory}</h3>
        <p className="font-inter">
          {
            readMore ?
              strCategoryDescription 
              : 
              `${strCategoryDescription.slice(0, 200)}... `
          }
          <button 
            onClick={() => setReadMore(!readMore)}
            className="text-blue-400"
          >
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button 
          onClick={() => deleteMeal(idCategory)}
          className="capitalize border border-amber-600 mx-auto px-3 my-8 text-red-600 block rounded-md">
          not interested
        </button>
      </footer>
    </article>
  )
}

export default Meal;
