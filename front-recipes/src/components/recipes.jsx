import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function Recipes(props) {
  const classes = useStyles();
  const [categorylist, setAppState] = useState([]);
  const number =  props.number1
    useEffect(() => {
      const apiUrl = 'http://127.0.0.1:8000/api/recipes/?category=' + number ;
        axios.get(apiUrl).then((resp) => {
        const category = resp.data;
        setAppState(category);  
      })
      .catch((error) => {
        console.log(error);
      });
    }, [setAppState]);
 
  

  return (
    <recipes className='categorys_container'>
       
        {categorylist.map((list, index) =>  (
            
           
        
     <Card className={classes.root} >
      <CardActionArea href={'http://127.0.0.1:3000/recipe/' + list.id} onClick={() => props.changeRecipe(list.id)}>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"   >
          {categorylist[index].name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
  
      
    </Card> 
  
    ))} 
    </recipes> )
}
