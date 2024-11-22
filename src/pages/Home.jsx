import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipe } from '../redux/slices/recipeSlice'

const Home = () => {
  const {allRecipe,loading,errorMsg} = useSelector(state=>state.recipeReducer)
  console.log(allRecipe,loading,errorMsg);  
  const dispatch = useDispatch()

  const [currentPage,setCurrentPage] = useState(1)
  const recipePerPage = 8
  const totalPages = Math.ceil(allRecipe?.length/recipePerPage)
  const currentPageRecipeLastIndex = currentPage * recipePerPage
  const currentPageRecipeFirstIndex = currentPageRecipeLastIndex-recipePerPage
  const visibleAllRecipe = allRecipe?.slice(currentPageRecipeFirstIndex,currentPageRecipeLastIndex)


  useEffect(()=>{
    dispatch(fetchRecipe())
  },[])

  const navigateToNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navigateToPrevPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }


  return (
    <>
      <Header insideHome={true}/>
      <div style={{paddingTop:'50px',paddingBottom:'50px'}} className='container'>
        {
          loading?
          <div className="d-flex justify-content-center align-items-center my-5">
          <img width={'70px'} height={'70px'} className='me-3' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="" />
          Loading...
        </div>
        :
        <div className='row'>
          {
            allRecipe?.length>0?
            visibleAllRecipe?.map(recipe=>(
              <div className='col-lg-3 mt-2'>
              <Card style={{ width: '16rem',height:'24rem' }} className='d-flex align-items-center text-center'>
                <Card.Img width={'100%'} height={'200px'} variant="top" src={recipe?.image} />
                <Card.Body>
                  <Card.Title> {recipe?.name} </Card.Title>
                  <Link to={`/${recipe?.id}/view`}><div className='btn btn-outline-primary'>View More Details</div></Link>
                </Card.Body>
              </Card>
          </div>
            ))
          :
          <div className="d-flex justify-content-center align-items-center my-5 text-primary">
            Product Not Found!!!
          </div>
          }
        </div>
        }
      </div>
      <div className="text-center fw-bold mt-20 ">
          <span style={{cursor:'pointer'}} onClick={navigateToPrevPage}> <i class="fa-solid fa-arrow-right-to-bracket fa-flip-horizontal"></i> </span>
          <span> {currentPage} of {totalPages} </span>
          <span style={{cursor:'pointer'}} onClick={navigateToNextPage}> <i class="fa-solid fa-arrow-right-to-bracket"></i> </span>
      </div>
    </>
  )
}

export default Home