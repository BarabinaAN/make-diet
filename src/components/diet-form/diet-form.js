import React from "react";
// import { Link } from "react-router-dom";
import Input from "../input";
import Radio from "../radio";
import { withValidate } from "../hoc";

import "./diet-form.scss";

const DietForm = (props) => {
  const { errors, fields, onChangeRadio, onSubmit } = props
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

  const fieldset = renderFieldset(fieldlist)
  return (
    <div className="cell-6">
      <form className="diet-form">
        {fieldset}
        <button
          type='submit'
          className='btn-primary'
          onClick={onSubmit}
        >
          Рассчитать
          </button>
      </form>
    </div>
  );
};

export default DietForm;
