import React from 'react';
import './RecipeDetails.css';
import { Link } from 'react-router-dom';

const RecipeDetails = ({data}) => {
    const {strMeal, strInstructions, strMealThumb, idMeal} = data;
    return (
        <div className='p-4 border rounded-md flex gap-4 items-center'>
            <div className="img-section">
                <img src={strMealThumb} alt="food-img" className='rounded-sm' />
            </div>
            <div className='text-section'>
                <h1 className='heading text-3xl py-1'>{(strMeal.length < 20) ? strMeal : (`${strMeal.slice(0,19)}...`)}</h1>
                <p><small>
                {strInstructions.length < 250 ? strInstructions : strInstructions.slice(0,150)+"..."}
                </small></p>
                <Link to={`/recipe/${idMeal}`}><button className='my-4'>View More</button></Link>
            </div>
        </div>
    );
};

export default RecipeDetails;