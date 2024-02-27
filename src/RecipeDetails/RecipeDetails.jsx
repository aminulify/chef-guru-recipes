import React, { useState } from 'react';
import './RecipeDetails.css';

const RecipeDetails = ({data,handleItemModal}) => {
    const {strMeal, strInstructions, strMealThumb, idMeal} = data;
    

    

    return (
        <div className='p-4 border rounded-md lg:flex gap-4 z-50'>
            <div className="img-section">
                <img src={strMealThumb} alt="food-img" className='rounded-sm' />
            </div>
            <div className='text-section'>
                <h1 className='heading text-3xl py-1'>{(strMeal.length < 20) ? strMeal : (`${strMeal.slice(0,19)}...`)}</h1>
                <p><small>
                {strInstructions.length < 250 ? strInstructions : strInstructions.slice(0,150)+"..."}
                </small></p>
                <button id={idMeal} className='my-4' onClick={handleItemModal}>View More</button>
            </div>
            
           
        </div>
    );
};

export default RecipeDetails;