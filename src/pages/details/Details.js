import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import recipeCardFoto from '../../assets/diet.svg';
import './Details.css';
import Navbar from "../../components/navbar/Navbar";



const Details = () => {
  
  // const navigate = useNavigate();
  const location = useLocation();
  const {
    calories,
    totalWeight,
    label: mainlabel,
    totalNutrients: {
      CA: { label: calabelinho, quantity: caquantity },
      CHOCDF: { label: cholabel, quantity: choquantity },
      CHOLE: { label: chlabel, quantity: chquantity },
      ENERC_KCAL: { label: enlabel, quantity: enquantity },
    },
    digest,
    image,
    ingredientLines,
  } = location.state;
  console.log(location.state);

  return (
    <div>
      <Navbar/>
      <div className='recipeCardBody'>
      <div className="recipeCardDiv">
        <div className="recipeHeader">
          <h1>{mainlabel}</h1>
          <img style={{height:'80px'}} src={recipeCardFoto} alt="recipeCardFoto" />
        </div>
        <div className="foodDetail">
          <div className="nutrientsDiv">
          <h3>Nutrients</h3>
          <p>{calabelinho} : {Math.floor(caquantity)} g</p>
          <p>{cholabel} : {Math.floor(choquantity)} g</p>
          <p>{chlabel} : {Math.floor(chquantity)} mg</p>
          <p>{enlabel} : {Math.floor(enquantity)} kcal</p>
          <p>Total Weights: {Math.floor(totalWeight)}</p>
          <p>Calories: {Math.floor(calories)}</p>
          <p>{digest[0].label} : {Math.floor(digest[0].total)}</p>
          <p>{cholabel} : {Math.floor(choquantity)} g</p>
          <p>{digest[2].label} : {Math.floor(digest[2].total)}</p>
          <p>{chlabel} : {Math.floor(chquantity)} mg</p>
          </div>
          <div className="nutrientsImgDiv">
          <img src={image} alt="" />
          </div>
          <div className="ingre">
            <ol>
             
                {ingredientLines.map((item) => {
                  return(
                    <li>{item}</li>
                  )
                })}
             
            </ol>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Details