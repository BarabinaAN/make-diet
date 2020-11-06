import React from "react";

const DietCalories = ({ 
  balance,
  calories,
  proteins,
  fats,
  carbohydrates
}) => {

  const title = balance === 'normal' ? <span className="mark-green">Поддержания веса: </span> :
    balance === 'loss' ? <span className="mark-blue">Снижения веса: </span> :
      <span className="mark-red">Набора веса: </span>

  return <>
    <dt> {title} {calories}<small>кКалл</small> </dt>
    <dd> <b>Белки:</b> {proteins} <small>кКалл</small> </dd>
    <dd> <b>Жиры:</b> {fats} <small>кКалл</small> </dd>
    <dd> <b>Углеводы:</b> {carbohydrates} <small>кКалл</small> </dd>
  </>
};

export default DietCalories;