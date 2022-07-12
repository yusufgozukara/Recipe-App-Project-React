import React from 'react'
import './RecipeCard.css';
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate();

  const {
    label,
    images
  } = recipe;



  return (
    <>

    <div className="recipeCardLittle">
      <h2>{recipe.label}</h2>
      <img style={{height:'60%'}} src={recipe.image} alt="" />
      <button onClick={() => navigate(`/Details`, {state:recipe})}>View More</button>
    </div>
    </>

  )
}

export default RecipeCard