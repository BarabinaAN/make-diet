import React from 'react';
import PageHeader from '../page-header';
import DietForm from "../diet-form";
import DietRecomendation from "../diet-recomendation";

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

export {
   CalculationPage,
   RecomendationPage
};