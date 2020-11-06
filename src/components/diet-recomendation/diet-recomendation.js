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
        <h2>Расход калорий в течение дня для:</h2>
        {recomendation}
        <dl>
          <dt><span className="mark-green">Поддержания веса:</span> 1500 <small>кКалл</small></dt>
            <dd><b>Белки:</b> 1000 <small>кКалл</small></dd>
            <dd><b>Жиры:</b> 1000 <small>кКалл</small></dd>
            <dd><b>Углеводы:</b> 1000 <small>кКалл</small></dd>
          <dt><span className="mark-blue">Снижения веса: </span>1200 <small>кКалл</small></dt>
            <dd><b>Белки:</b> 1000 <small>кКалл</small></dd>
            <dd><b>Жиры:</b> 1000 <small>кКалл</small></dd>
            <dd><b>Углеводы:</b> 1000 <small>кКалл</small></dd>
          <dt><span className="mark-red">Набора веса:</span> 1700 <small>кКалл</small></dt>
            <dd><b>Белки:</b> 1000 <small>кКалл</small></dd>
            <dd><b>Жиры:</b> 1000 <small>кКалл</small></dd>
            <dd><b>Углеводы:</b> 1000 <small>кКалл</small></dd>
        </dl>
      </section>
    </div>
  );
};

export default DietRecomendation;
