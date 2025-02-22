import React from 'react'

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
     <img src="/ban.jpg" class="img-fluid w-100 pt-1" alt="..."/ >
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
      <Link to="/chinese">
  <div class="col">
    <div class="card">
      <img width="500px" height="500px" src="./Chinese-Dishes-2048x1405.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Chinese Recipes</h5>
        <p class="card-text">Try our new Chinese recipes! These recipes are made with fresh ingredients and are sure to impress your friends and family. Whether you're looking for a quick and easy meal or a more elaborate dinner, we've got you covered.</p>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/south">
  <div class="col">
    <div class="card">
      <img width="500px" height="500px" src="/th.jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">South Indian recipes</h5>
        <p class="card-text">Try our south Indian recipes! These recipes are made with fresh ingredients and are sure to impress your friends and family. Whether you're looking for a quick and easy meal or a more elaborate dinner, we've got you covered.</p>
      </div>
    </div>
  </div>
  </Link>
  <Link to="/mexican">
  <div class="col">
    <div class="card">
      <img  width="500px" height="500px" src="/th (1).jpg" class="card-img-top" alt="..."/ >
      <div class="card-body">
        <h5 class="card-title">Mexican recipes</h5>
        <p class="card-text">Try our maxican recipes! These recipes are made with fresh ingredients and are sure to impress your friends and family. Whether you're looking for a quick and easy meal or a more elaborate dinner, we've got you covered.</p>
      </div>
    </div>
  </div>
  </Link>

  <Link to="/north">
  <div class="col">
    <div class="card">
      <img width="500px" height="500px" src="/th (2).jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">North Indian recipes</h5>
        <p class="card-text">Try our north Indian recipes! These recipes are made with fresh ingredients and are sure to impress your friends and family. Whether you're looking for a quick and easy meal or a more elaborate dinner, we've got you covered.</p>
      </div>
    </div>
  </div>
  </Link>
</div>

    </div>
  )
}

export default Home
