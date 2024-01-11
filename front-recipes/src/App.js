import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/home';
import Categorys from './components/categorys';
import Recipes from './components/recipes';
import Recipe from './components/recipe';
import Footer from './components/footer';


function App() {
  

let [id, setWord] = useState(Number(localStorage.getItem('id')) || 0)

useEffect(() => {
  localStorage.setItem('id', JSON.stringify(id));
}, [id]);

let [idRecipe, setRecipe] = useState(Number(localStorage.getItem('idRecipe')) || 0)

useEffect(() => {
  localStorage.setItem('idRecipe', JSON.stringify(idRecipe));
}, [idRecipe]);

const CategoryHome = function(props) {
    // Конструкция "{...props}" нужна, чтобы не потерять
    // параметры, переданные от компонента Route
    return (<Recipes {...props} number1 ={id}/>); 
}

const RecipeGet = function(props) {
  // Конструкция "{...props}" нужна, чтобы не потерять
  // параметры, переданные от компонента Route
  return (<Recipe {...props} number2 ={idRecipe}/>); 
}
  return (
    <div className='container'>
      <br />
       <Categorys changeWord={id => setWord(id)} />
       <BrowserRouter>
   
        <Routes>
       
           <Route path="/" element={<Home />}> </Route>
           <Route path=":category/:index" element={<CategoryHome />}> </Route>
           <Route path="/recipe/:index" element={<RecipeGet changeRecipe={idRecipe => setRecipe(idRecipe)} />}> </Route>
        
      
        </Routes>

      </BrowserRouter>
      
      
      <Footer/>
     </div>
   );

  }
export default App;
  