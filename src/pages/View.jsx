import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';

const View = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()
  console.log(id);
  console.log(recipe);

  useEffect(()=>{
    if(sessionStorage.getItem("allRecipe")){
      const allRecipe = JSON.parse(sessionStorage.getItem("allRecipe"))
      setRecipe(allRecipe.find(item=>item.id==id))
    }
  },[])
  return (
    <>
      <Header/>
      <div style={{minHeight:'90vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
            <div className='shadow border rounded p-2 align-items-center'>
            <h1 style={{fontSize:'35px'}} className='text-primary'>  <i class="fa-solid fa-utensils "></i> {recipe?.name} </h1>

              <h3>
                USER ID : <span className='text-warning'>{recipe?.userId}</span> <br />
                MEAL TYPE : <span className='text-warning'>{recipe?.mealType}</span>
              </h3>
              <p>
                Cuisine : {recipe?.cuisine} <br />
                Prep Time(min) : {recipe?.prepTimeMinutes} <br />
                Cook Time(min) : {recipe?.cookTimeMinutes} <br />
                Servings : {recipe?.servings} <br />
                Difficulty : {recipe?.difficulty} <br />
                Calories Per Serving : {recipe?.caloriesPerServing} 
              </p>
              <h3 className='mt-3'>Client Reviews</h3>
                
                <p>Rating : <span className='text-success fw-bolder'>{recipe?.rating}</span> <i className="fa-solid fa-star text-primary"></i> <i className="fa-solid fa-star text-primary"></i> <i className="fa-solid fa-star text-primary"></i> <i className="fa-solid fa-star text-primary"></i> <i className="fa-solid fa-star text-primary"></i> </p>
                <p>Review Count : <span className='text-success fw-bolder'>{recipe?.reviewCount} </span></p>
                
            </div>
            </div>
            <div className="col-lg-6">
              <img className='me-40 rounded shadow' width={"550px"} height={"350px"} src={recipe?.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View