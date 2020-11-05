import React from "react";
// import { Link } from "react-router-dom";
import Input from "../input";
import Radio from "../radio";
import { withValidate } from "../hoc";

import "./diet-form.scss";

const DietForm = (props) => {
  const { errors, fields, result, onChangeRadio, onSubmit } = props
  const { age, growth, weight } = fields

  const fieldlist = [
    {
      legend: 'Пол:',
      list: [
        { key: 1, type: "radio", name: "gender", value: "5", label: "мужской" },
        { key: 2, type: "radio", name: "gender", value: "161", label: "женский" },
      ],
    },
    {
      legend: 'Параметры Вашего тела:',
      list: [
        { key: 1, type: "text", name: "age", value: age, label: "возраст (полных лет)", error: errors.age },
        { key: 2, type: "text", name: "growth", value: growth, label: "рост в см", error: errors.growth },
        { key: 3, type: "text", name: "weight", value: weight, label: "вес в кг", error: errors.weight },
      ],
    },
    {
      legend: 'Активность:',
      list: [
        { key: 1, type: "radio", name: "activity", value: "1.2", label: "малоподвижный (сидячий )" },
        { key: 2, type: "radio", name: "activity", value: "1.3", label: "легкая нагрузка (1-3 тренировки в неделю)" },
        { key: 3, type: "radio", name: "activity", value: "1.6", label: "умеренная нагрузка (3-5 тренировок в неделю)" },
        { key: 4, type: "radio", name: "activity", value: "1.7", label: "высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)" },
      ],
    },
  ]

  const renderField = (arr) => {
    return arr.map(({ type, ...other }) => {
      if (type === 'radio') {
        return <Radio {...other} onChange={onChangeRadio} />
      }

      return <Input {...other} onChange={onChangeRadio} />
    })
  }

  const renderFieldset = (arr) => {
    return arr.map(({ legend, list }) => {
      const inputs = renderField(list)
      return (
        <fieldset className='fieldset' key={legend}>
          <legend>{legend}</legend>
          {inputs}
        </fieldset>
      )
    })
  }

  const renderResult = () => {
    const { normal, loss, gain } = result

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

  const fieldset = renderFieldset(fieldlist)
  const calculate = result ? renderResult() : null
  return (
    <form className="diet-form">
      {fieldset}
      <button
        type='submit'
        className='btn-primary'
        onClick={onSubmit}
      >
        Рассчитать
        </button>
      {/* <Link to='/recomendation/' className='btn-primary'>Рассчитать</Link> */}
      {calculate}
    </form>
  );
};

export default withValidate(DietForm);
