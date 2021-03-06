import React, {Component} from "react";
import Input from "../input";
import Radio from "../radio";
import { withValidate } from "../hoc";
import { calculate } from '../../utils'

import "./diet-form.scss";

// вынести список полей формы в отдельный файл - diet-form.data.js
// вынести в отдельные компоненты: поля, fieldset, так понятнее


const fieldlist = [
  {
    legend: 'Пол:',
    list: [
      { key: 1, type: "radio", name: "gender", defaultValue: "5", label: "мужской" },
      { key: 2, type: "radio", name: "gender", defaultValue: "161", label: "женский" },
    ],
  },
  {
    legend: 'Параметры Вашего тела:',
    list: [
      { key: 1, type: "text", name: "age", defaultValue: "", label: "возраст (полных лет)", isRequeried: true },
      { key: 2, type: "text", name: "growth", defaultValue: "", label: "рост в см", isRequeried: true  },
      { key: 3, type: "text", name: "weight", defaultValue: "", label: "вес в кг", isRequeried: true  },
    ],
  },
  {
    legend: 'Активность:',
    list: [
      { key: 1, type: "radio", name: "activity", defaultValue: "1.2", label: "малоподвижный (сидячий )" },
      { key: 2, type: "radio", name: "activity", defaultValue: "1.3", label: "легкая нагрузка (1-3 тренировки в неделю)" },
      { key: 3, type: "radio", name: "activity", defaultValue: "1.6", label: "умеренная нагрузка (3-5 тренировок в неделю)" },
      { key: 4, type: "radio", name: "activity", defaultValue: "1.7", label: "высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)" },
    ],
  },
]


class DietForm extends Component {

  onCalculate = (e) => {
    e.preventDefault();
    const { onCheckValidate, updateResult, fields } = this.props
    const isValidate = onCheckValidate();

    if (!isValidate) {
      return
    }
    updateResult(calculate(fields))
  }

  renderField = (arr) => {
    const { onChangeField, fields, errors } = this.props

    return arr.map(({ type, defaultValue, name, ...other }) => {
      const value = !defaultValue === true && fields ? fields[name] : defaultValue
      const error = !defaultValue === true && errors ? errors[name] : defaultValue
      const allProps = {...other, name, value, onChange: onChangeField}

      if (type === 'radio') {
        return <Radio {...allProps} />
      }
      return <Input {...allProps} error={error}/>
    })
  }

  renderFieldset = (arr) => {
    return arr.map(({ legend, list }) => {
      const inputs = this.renderField(list)
      return (
        <fieldset className='fieldset' key={legend}>
          <legend>{legend}</legend>
          {inputs}
        </fieldset>
      )
    })
  }


  render() {   
    const fieldset = this.renderFieldset(fieldlist)

    return (
      <div className="cell-6">
        <form className="diet-form">
          {fieldset}
          <button
            type='submit'
            className='btn-primary'
            onClick={this.onCalculate}
          >
            Рассчитать
            </button>
        </form>
      </div>
    );
  }
};

export default withValidate(DietForm, fieldlist);
