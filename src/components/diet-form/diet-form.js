import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../input";
import Radio from "../radio";
import "./diet-form.scss";

class DietForm extends Component {
  state = {
    fields: {
      gender: '',
      age: '',
      growth: '',
      weight: '',
      activity: '',
    },
    errors: {
      gender: '',
      age: '',
      growth: '',
      weight: '',
      activity: '',
    }
  }

  onChangeRadio = (e) => {
    const { name, value } = e.target

    this.setState((state) => {
      return {
        fields: {
          ...state.fields,
          [name]: value
        }
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.validate(this.state);
  }

  validate = (obj) => {
    const {fields, errors} = obj

    const isValidate = Object.entries(fields).forEach(([key, val]) => {
      if(this.checkValue(key, val)) {
        this.setError(key, '')
      }
    })

    const hasError = Object.values(errors).every(error => error.trim() !== '')
    if (!hasError) return console.error('not valide value')
  }

  checkValue = (key, val) => {
    switch (key) {
      case 'gender':
        return this.isEmpty(key, val, 'check your gender')
      case 'age':
        return this.isEmpty(key, val, 'age is empty' ) && this.isNumber(key, val, 'age is not a number')
      case 'weight':
        return this.isEmpty(key, val, 'weight is empty') && this.isNumber(key, val, 'weight is not a number')
      case 'growth':
        return this.isEmpty(key, val, 'growth is empty') && this.isNumber(key, val, 'growth is not a number')
      case 'activity':
        return this.isEmpty(key, val, 'check your activity')
      default:
        return true
    }
  }

  setError = (key, msg) => {
    this.setState((state) => {
      return {
        errors: {
          ...state.errors,
          [key]: msg
        }
      }
    })
  }

  isNumber = (key, val, msg) => {
    if (isNaN(val)) {
      this.setError(key, msg)
      return false
    }
    return true;
  }

  isEmpty = (key, val, msg) => {
    if (val.trim() === '') {
      this.setError(key, msg)
      return false
    }
    return true;
  }

  render() {

    const { age, growth, weight } = this.state.fields
    const { errors } = this.state
    return (
      <form className="diet-form">
        <fieldset className='fieldset'>
          <legend>Пол:</legend>        
          <Radio
            name="gender"
            value="male"
            label="мужской"
            onChange={this.onChangeRadio}
            error={errors.gender}
          />
          <Radio
            name="gender"
            value="famale"
            label="женский"
            onChange={this.onChangeRadio}
            error={errors.gender}
          />
        </fieldset>
        <fieldset className='fieldset'>
          <legend>Параметры Вашего тела:</legend>
          <Input
            name="age"
            label="возраст (полных лет)"
            value={age}
            onChange={this.onChangeRadio}
            error={errors.age}
          />
          <Input
            name="growth"
            label="рост в см"
            value={growth}
            onChange={this.onChangeRadio}
            error={errors.growth}
          />
          <Input
            name="weight"
            label="вес в кг"
            value={weight}
            onChange={this.onChangeRadio}
            error = {errors.weight}
          />
        </fieldset>
        <fieldset className='fieldset'>
          <legend>Активность:</legend>
          <Radio
            name="activity"
            value="light"
            label="малоподвижный (сидячий )"
            onChange={this.onChangeRadio}
            error={errors.activity}
          />
          <Radio
            name="activity"
            value="normal"
            label="легкая нагрузка (1-3 тренировки в неделю)"
            onChange={this.onChangeRadio}
            error={errors.activity}
          />
          <Radio
            name="activity"
            value="hight"
            label="умеренная нагрузка (3-5 тренировок в неделю)"
            onChange={this.onChangeRadio}
            error={errors.activity}
          />
          <Radio
            name="activity"
            value="hard"
            label="высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)"
            onChange={this.onChangeRadio}
            error={errors.activity}
          />
        </fieldset>
        <button
          type='submit'
          className='btn-primary'
          onClick={this.onSubmit}
        >Рассчитать</button>
        {/* <Link to='/recomendation/' className='btn-primary'>Рассчитать</Link> */}
      </form>
    );
  }
};

export default DietForm;
