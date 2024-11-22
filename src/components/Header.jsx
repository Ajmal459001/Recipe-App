import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../redux/slices/recipeSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  return (
    <div style={{width:'100%',zIndex:'1'}} className='d-flex bg-primary-emphasis align-items-center justify-content-center shadow  '>
      <nav  className='container d-flex justify-content-between align-items-center w-100'>
        <Link to={'/'} className=' btn fs-4 fw-bold'><i class="fa-brands fa-slack me-1"></i>RECIPE APP</Link>
        <div>
        {
          insideHome && <input onChange={e=>dispatch(searchRecipe(e.target.value.toLowerCase()))} style={{textDecoration:'none',width:'300px'}} type="search" className='p-1 border border-secondary rounded  text-black' placeholder='Search Cusine Here...' />
        }
        </div>
      </nav>
    </div>
  )
}

export default Header