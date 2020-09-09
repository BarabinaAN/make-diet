import React from "react";
import "./diet-form.scss";

const DietForm = () => {
  return (
    <form action="" method="" className="diet-form">
      <fieldset className='fieldset'>
        <legend>Пол:</legend>
        <label className='label-radio'>
          <input type="radio" name="gender" value="men" />
          <span>мужской</span>
        </label>
        <label className='label-radio'>
          <input type="radio" name="gender" />
          <span>женский</span>
        </label>
      </fieldset>
      <fieldset className='fieldset'>
        <legend>Параметры Вашего тела:</legend>
        <label className='label-input'>
          <input type="text" name="age" />
          <span>возраст (полных лет)</span>
        </label>
        <label className='label-input'>
          <input type="text" name="growth" />
          <span>рост в см</span>
        </label>
        <label className='label-input'>
          <input type="text" name="weight" />
          <span>вес в кг</span>
        </label>
      </fieldset>
      <fieldset className='fieldset'>
        <legend>Активность:</legend>
        <label className='label-radio'>
          <input type="radio" name="activity" />
          <span>
            малоподвижный (сидячий )
          </span>
        </label>
        <label className='label-radio'>
          <input type="radio" name="activity" />
          <span>
            легкая нагрузка (1-3 тренировки в неделю)
          </span>
        </label>
        <label className='label-radio'>
          <input type="radio" name="activity" />
          <span>
            умеренная нагрузка (3-5 тренировок в неделю)
          </span>
        </label>
        <label className='label-radio'>
          <input type="radio" name="activity" />
          <span>
            высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)
          </span>
        </label>
      </fieldset>
      <button className='btn-primary'>Рассчитать</button>
    </form>
  );
};

export default DietForm;
