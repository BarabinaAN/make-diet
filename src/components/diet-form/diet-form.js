import React, {Component} from "react";
import {Link} from "react-router-dom";
import Input from "../input";
import Radio from "../radio";
import "./diet-form.scss";

class DietForm extends Component {
  state = {
    gender: '',
    age: '',
    growth: '',
    weight: '',
    activity: '',
  }

  onChangeRadio = (e) => {
    const { name, value} = e.target

    this.setState((state) => {
      return {
        [name]: value
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.validate(this.state);
  }

  validate = (obj) => {
    const isValidate = Object.values(obj).every(val => val !== '')
    if (!isValidate) return console.error('not valide value')
    console.log(isValidate);
  }


  render() {
    const {age, growth, weight} = this.state
    return (
      <form className="diet-form">
        <fieldset className='fieldset'>
          <legend>Пол:</legend>
          <Radio 
            name="gender"
            value="male"
            label="мужской"
            onChange={this.onChangeRadio}
          />
          <Radio 
            name="gender"
            value="famale"
            label="женский"
            onChange={this.onChangeRadio}
          />
        </fieldset>
        <fieldset className='fieldset'>
          <legend>Параметры Вашего тела:</legend>
          <Input 
            name="age"
            label="возраст (полных лет)"
            value={age}
            onChange={this.onChangeRadio}
          />
          <Input 
            name="growth"
            label="рост в см"
            value={growth}
            onChange={this.onChangeRadio}
          />
          <Input 
            name="weight"
            label="вес в кг"
            value={weight}
            onChange={this.onChangeRadio}
          />
        </fieldset>
        <fieldset className='fieldset'>
          <legend>Активность:</legend>
          <Radio 
            name="activity"
            value="light"
            label="малоподвижный (сидячий )"
            onChange={this.onChangeRadio}
          />
          <Radio 
            name="activity"
            value="normal"
            label="легкая нагрузка (1-3 тренировки в неделю)"
            onChange={this.onChangeRadio}
          />
          <Radio 
            name="activity"
            value="hight"
            label="умеренная нагрузка (3-5 тренировок в неделю)"
            onChange={this.onChangeRadio}
          />
          <Radio 
            name="activity"
            value="hard"
            label="высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)"
            onChange={this.onChangeRadio}
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
