import React from "react";
import "./diet-form.scss";

const DietForm = () => {
  return (
    <form action="" method="" className="diet-form">
      <fieldset className='fieldset'>
        <legend>Пол</legend>
        <label className='label'>
          <input type="radio" name="gender" />
          мужской
        </label>
        <label className='label'>
          <input type="radio" name="gender" />
          женский
        </label>
      </fieldset>
      <fieldset className='fieldset'>
        <legend></legend>
        <label className='label'>
          <input type="text" name="age" />
          возраст (полных лет)
        </label>
        <label className='label'>
          <input type="text" name="growth" />
          рост в см
        </label>
        <label className='label'>
          <input type="text" name="weight" />
          вес в кг
        </label>
      </fieldset>
      <fieldset className='fieldset'>
        <legend>Активность</legend>
        <label className='label'>
          <input type="radio" name="activity" />
          малоподвижный (сидячий )
        </label>
        <label className='label'>
          <input type="radio" name="activity" />
          легкая нагрузка (1-3 тренировки в неделю)
        </label>
        <label className='label'>
          <input type="radio" name="activity" />
          умеренная нагрузка (3-5 тренировок в неделю)
        </label>
        <label className='label'>
          <input type="radio" name="activity" />
          высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)
        </label>
      </fieldset>
      <button className='btn-primary'>Рассчитать</button>
    </form>
  );
};

export default DietForm;
