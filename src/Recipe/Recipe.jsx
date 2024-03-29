import React, { useState } from 'react';
import './Recipe.css';
import { Link, useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import useTitle from '../TitleHooks/useTitle';

const Recipe = () => {
    // dynamic title 
    useTitle('Recipe');
    const getData = useLoaderData();
    // console.log(getData.meals);
    const datas = getData.meals;
    console.log(datas);

    const [modalData, setModalData] = useState();
    const [modalShow, setModalShow] = useState(false);
    
    const handleItemModal = (e) =>{
        // console.log(e.target.id * 1);
        const idFood = e.target.id;
        const getFilterData = datas.filter(function(data){
            if(idFood===data.idMeal){
                return data;
            }
        });
      
        console.log(getFilterData[0]);
        // console.log(getFilterData[0].strInstructions);


        setModalShow(true);
        setModalData(getFilterData[0]);
    }

    const handleModalClose = ()=>{
        setModalShow(false);
    }
    return (
        <div className='main-data'>
             {modalShow && 
             <div className='modal-main'>
                <div className={`modalN fixed mx-5 lg:mx-20`}>
                <div>
                    <img src={modalData.strMealThumb} alt="thumbnail image" />
                    <h1 className='heading text-3xl mt-4'>{modalData.strMeal}</h1>
                    <br />
                    <p><small><b>Items:</b> {modalData.strIngredient1}, {modalData.strIngredient2}, {modalData.strIngredient3}, {modalData.strIngredient4},{modalData.strIngredient5}, {modalData.strIngredient6}, {modalData.strIngredient7}, {modalData.strIngredient8}, {modalData.strIngredient9}, {modalData.strIngredient10},{modalData.strIngredient11}, {modalData.strIngredient12}, {modalData.strIngredient13}</small></p>
                    <br />
                    <p><small><b>Cooking: </b> {modalData.strMeasure1}, {modalData.strMeasure2}, {modalData.strMeasure3}, {modalData.strMeasure4}, {modalData.strMeasure5}, {modalData.strMeasure6}, {modalData.strMeasure7}, {modalData.strMeasure8}, {modalData.strMeasure9},{modalData.strMeasure10}, {modalData.strMeasure11}, {modalData.strMeasure12}</small></p>
                    <br />
                    <p><small>{modalData.strInstructions}</small></p>
                    
                    
                    <div className='grid grid-cols-2 gap-5 mt-4 mb-2'>
                        <Link to={modalData.strYoutube}><button className='w-full'>Youtube</button></Link>

                        <button className='w-full' onClick={handleModalClose}>Close</button>

                    </div>
                </div>
            </div>
             </div>
                }
            <h1 className='heading recipe-heading'>Recipes</h1>
            <div className='right-img' data-aos="fade-left" data-aos-delay='500'>
                                <img src="front_right.png" className='fixed' alt="doodles desh" />
                            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-5 lg:mx-20 gap-5 mb-10' data-aos='fade-left'>
                {
                    datas.map(data=><RecipeDetails
                        key={data.idMeal}
                        data={data}
                        handleItemModal={handleItemModal}
                                              
                    ></RecipeDetails>)
                }
            </div>
        </div>
    );
};

export default Recipe;