import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import RecipeCard from '../pages/home/RecipeCard';



const Home = () => {
  const [foodList, setFoodList] = useState(false);
  console.log(foodList);
  const [food, setFood] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const url = 'https://jsonplaceholder.typicode.com/photos';

  // const {id, title, thumbnailUrl } = data;
  
  const getFood = async () => {
    
    try {
      const {data} = await axios.get(url);
      setFood(data)
    } catch (error) {
      console.log(error);
    } 
  };
  
  useEffect(() => {
    getFood();
  }, [])
  
  console.log(food);

  // if(loading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <div className="homeBody">
      <div className="homeContainer">
        <h1>Food App</h1>
        <div className="formDiv">
          <form action="">
            <input type="search" name="" id="" />
            <button type="submit" onClick={() => setFoodList(!foodList)}>Search</button>
            
            <select id="foods" name="foods">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="teatime">Teatime</option>
            </select>
          </form>
        </div>
      </div>
      <div className="miniFoodCardDiv">
      <div className="miniFoodCard">
        <h2>??food name</h2>
        <img src="" alt="??food img" />
        <button onClick={() => navigate(`recipecard`)}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
