import React from 'react';

const Tour = ({ idCategory, strCategory, strCategoryDescription, strCategoryThumb }) => {
  return (
    <article>
      <img src={strCategoryThumb} alt={strCategory} />
      <h3>{strCategory}</h3>
      <h4>{strCategoryDescription}</h4>
    </article>
  )
}

export default Tour;
