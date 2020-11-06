import React from "react";
import { withServiceConsumer, withData } from "../hoc";
import "./diet-recomendation.scss";

const DietRecomendation = (props) => {

  const renderRecomendation = () => {
    const { normal, loss, gain } = props.result
    return (
      <div>
        <div>
          Общий коллораж с учетом активности: {normal.calories} ккалл
          <ul>
            <li>Белки:<b>{normal.proteins}</b> ккалл</li>
            <li>Жиры:<b>{normal.fats}</b> ккалл</li>
            <li>Углеводы:<b>{normal.carbohydrates}</b> ккалл</li>
          </ul>
        </div>
        <div>Коллораж на уменьшение массы: {loss.calories} ккалл
          <ul>
            <li>Белки:<b>{loss.proteins}</b> ккалл</li>
            <li>Жиры:<b>{loss.fats}</b> ккалл</li>
            <li>Углеводы:<b>{loss.carbohydrates}</b> ккалл</li>
          </ul>
        </div>
        <div>Коллораж на набор массы: {gain.calories} ккалл
          <ul>
            <li>Белки:<b>{gain.proteins}</b> ккалл</li>
            <li>Жиры:<b>{gain.fats}</b> ккалл</li>
            <li>Углеводы:<b>{gain.carbohydrates}</b> ккалл</li>
          </ul>
        </div>
      </div>
    )
  }
  const recomendation = props.result ? renderRecomendation() : null
  return (
    <div className="cell-6">
      <section className="diet-recomendation">
        <h2>Результат:</h2>
        {recomendation}
      </section>
    </div>
  );
};

export default DietRecomendation;
