import React, { useState, useEffect } from 'react';
import axios from 'axios';



export default function Recipe(props) {

  const [recipe, setAppState] = useState([]);
   const number =  props.number2
    useEffect(() => {
      const apiUrl = 'http://127.0.0.1:8000/api/recipe/' + number + '/';
      axios.get(apiUrl).then((resp) => {
        const category = resp.data;
        setAppState(category);  
      })
      .catch((error) => {
        console.log(error);
      });
    }, [setAppState]);

  

  return (
    <recipe className='recipe_container'>
        <p >Подробнее:</p>

       <p>  Название: {recipe.name}</p>
       <p>  Рецепт: {recipe.recipe}</p>

    </recipe> )
}
