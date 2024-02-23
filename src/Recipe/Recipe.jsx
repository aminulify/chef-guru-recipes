import React from 'react';
import './Recipe.css';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

const Recipe = () => {
    const getData = useLoaderData();
    console.log(getData.meals);
    const datas = getData.meals;
    return (
        <div>
            <h1 className='heading recipe-heading'>Recipes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-20 gap-5'>
                {
                    datas.map(data=><RecipeDetails
                        key={data.idMeal}
                        data={data}
                    ></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default Recipe;