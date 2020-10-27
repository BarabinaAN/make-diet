import React from "react";
// import { Link } from "react-router-dom";
import Input from "../input";
import Radio from "../radio";
import { withValidate } from "../hoc";

import "./diet-form.scss";

const DietForm = (props) => {
    const { errors, fields, onChangeRadio, onSubmit } = props
    const { age, growth, weight } = fields
    return (
      <form className="diet-form">
        <fieldset className='fieldset'>
          <legend>Пол:</legend>
          <Radio
            name="gender"
            value="male"
            label="мужской"
            onChange={onChangeRadio}
            error={errors.gender}
          />
          <Radio
            name="gender"
            value="famale"
            label="женский"
            onChange={onChangeRadio}
            error={errors.gender}
          />
        </fieldset>
        <fieldset className='fieldset'>
          <legend>Параметры Вашего тела:</legend>
          <Input
            name="age"
            label="возраст (полных лет)"
            value={age}
            onChange={onChangeRadio}
            error={errors.age}
          />
          <Input
            name="growth"
            label="рост в см"
            value={growth}
            onChange={onChangeRadio}
            error={errors.growth}
          />
          <Input
            name="weight"
            label="вес в кг"
            value={weight}
            onChange={onChangeRadio}
            error={errors.weight}
          />
        </fieldset>
        <fieldset className='fieldset'>
          <legend>Активность:</legend>
          <Radio
            name="activity"
            value="light"
            label="малоподвижный (сидячий )"
            onChange={onChangeRadio}
            error={errors.activity}
          />
          <Radio
            name="activity"
            value="normal"
            label="легкая нагрузка (1-3 тренировки в неделю)"
            onChange={onChangeRadio}
            error={errors.activity}
          />
          <Radio
            name="activity"
            value="hight"
            label="умеренная нагрузка (3-5 тренировок в неделю)"
            onChange={onChangeRadio}
            error={errors.activity}
          />
          <Radio
            name="activity"
            value="hard"
            label="высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)"
            onChange={onChangeRadio}
            error={errors.activity}
          />
        </fieldset>
        <button
          type='submit'
          className='btn-primary'
          onClick={onSubmit}
        >
          Рассчитать
        </button>
        {/* <Link to='/recomendation/' className='btn-primary'>Рассчитать</Link> */}
      </form>
    );
};

export default withValidate(DietForm);
