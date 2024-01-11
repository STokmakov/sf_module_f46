import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Categorys(props) {

    const [category, setAppState] = useState([]);
      
    useEffect(() => {
      const apiUrl = 'http://127.0.0.1:8000/api/categories/';
      axios.get(apiUrl).then((resp) => {
        const allCategory = resp.data;
        setAppState(allCategory);  
      })
      .catch((error) => {
        console.log(error);
      });
    }, [setAppState]);
    console.log(setAppState)

    return <categorys className='categorys_container'>
       
        {category.map((list) => ( 
            <ul key={list.id}>
                <a className="btn btn-primary"href={'http://127.0.0.1:3000/category/' + list.id} onClick={() => props.changeWord(list.id)} > {list.name} </a> 
            </ul>
         ))} 

    </categorys>
}

