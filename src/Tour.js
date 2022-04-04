import React from 'react';

const Tour = ({ idCategory, strCategory, strCategoryDescription, strCategoryThumb }) => {
  const [readMore, setReadMore] = React.useState(false);

  return (
    <article>
      <img src={strCategoryThumb} alt={strCategory} />
      <footer>
        <h3>{strCategory}</h3>
        <p>
          {
            readMore ?
              strCategoryDescription 
              : 
              `${strCategoryDescription.slice(0, 200)}... `
          }
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button>not interested</button>
      </footer>
    </article>
  )
}

export default Tour;
