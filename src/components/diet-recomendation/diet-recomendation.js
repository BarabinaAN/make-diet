import React from "react";
import DietCalories from "../diet-calories";
import "./diet-recomendation.scss";

const DietRecomendation = ({ result }) => {

  const renderRecomendation = () => {
    return result.map(
      (item, indx) => <DietCalories key={indx} {...item}/>
    )
  }
  const recomendation = result ? renderRecomendation() : null
  const message = !result ? 'Введите данные для расчета' : 'Расход калорий в течение дня для:'
  
  return (
    <div className="cell-6">
      <section className="diet-recomendation">
        <h2>{message}</h2>
        <dl>{recomendation}</dl>
      </section>
    </div>
  );
};

export default DietRecomendation;
