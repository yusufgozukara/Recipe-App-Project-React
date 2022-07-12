import React from 'react'
import './RecipeCard.css';
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate();



  return (

    <div className="recipeCardLittle">
      <h2>{recipe.label}</h2>
      <img style={{height:'60%'}} src={recipe.image} alt="" />
      <button onClick={() => navigate(`/Details`, {state:recipe})}>View More</button>
      {/* <button onClick={() => navigate(`/Details`, { state: recipe })}>View More</button> */}
    </div>
    // <div className='recipeCardBody'>
    //   <div className="recipeCardDiv">
    //     <div className="recipeHeader">
    //       <h1>??Food Name</h1>
    //       <img src={recipeCardFoto} alt="" />
    //     </div>
    //     <div className="foodDetail">
    //       <h3>??ingredients</h3>
    //       <img src="??food foto" alt="" />
    //       <h3>??food tarif</h3>
    //     </div>
    //   </div>
      
    // </div>
  )
}

export default RecipeCard