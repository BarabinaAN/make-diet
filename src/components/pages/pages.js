import React from 'react';
import PageHeader from '../page-header';
import DietForm from "../diet-form";
import DietRecomendation from "../diet-recomendation";
import { Link } from 'react-router-dom';

const CalculationPage = () => {
   return (
      <div className='container'>
         <PageHeader />
         <DietForm />
      </div>
   )
}
const RecomendationPage = () => {
   return (
      <div className='container'>
         <PageHeader />
         <DietRecomendation />
      </div>
   )
}
const Error404Page = () => {
   return (
      <div className='container'>
         <PageHeader />
         <h2>Упс, что-то пошло не так.</h2>
         <p>
            Попробуйте обновить страницу, или перейти 
         </p>
         <Link to='/'>на главную</Link>
      </div>
   )
}

export {
   CalculationPage,
   RecomendationPage,
   Error404Page
};