import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RecipeCard from "./RecipeCard";
// import RecipeCard from '../pages/home/RecipeCard';



const Home = () => {
  const [foodList, setFoodList] = useState(false);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);
  const [meal, setMeal] = useState('breakfast');
  const [query, setQuery] = useState('');
  // const navigate = useNavigate();

  const APP_KEY = process.env.REACT_APP_KEY;
  const APP_ID = process.env.REACT_APP_ID;


  const url = `https://api.edamam.com/search?q=${query}&app_id=dd81734d&app_key=b8a952198128b93d1604257ef80f6172&mealType=${meal}`;
  console.log(url);

  // const {id, title, thumbnailUrl } = data;
  
  const getFood = async () => {
    
    try {
      const {data} = await axios.get(url);
      setFood(data.hits)
      setLoading(false)
    } catch (error) {
      console.log(error);
    } 
  };
  
  useEffect(() => {
    getFood();
  }, [])
  


  if(loading){
    return <h1>Loading...</h1>
  }

  const handleSubmit = (e) => {
    e.preventdefault();
    getFood();
    setQuery('');
    console.log(query);
  };

  return (
    <div className="homeBody">
      <div className="homeContainer">
        <h1>Food App</h1>
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <input className="input" type="search" name="query" id="query" placeholder="Please write you want" value={query} onChange={(e) => setQuery(e.target.value)} />
            

            <button type="submit" className="searchButton" >Search</button>
            
            <select name="mealtype" id="meal" onChange={(e) => setMeal(e.target.value)}>
              console.log(meal);
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
        {food?.map((food,id) => {
          return (<RecipeCard key = {id} recipe={food.recipe}/>)}
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
