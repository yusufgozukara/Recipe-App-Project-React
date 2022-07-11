import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeBody">
      <div className="homeContainer">
        <h1>Food App</h1>
        <div className="formDiv">
          <form action="">
            <input type="search" name="" id="" />
            <button type="submit">Search</button>
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
    </div>
  );
};

export default Home;
