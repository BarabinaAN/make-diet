import React from "react";
import "./diet-form.scss";

const DietForm = () => {
  return (
    <form action="" method="" className="diet-form">
      <fieldset>
        <legend>Пол</legend>
        <label>
          <input type="radio" name="gender" />
          мужской
        </label>
        <label>
          <input type="radio" name="gender" />
          женский
        </label>
      </fieldset>
      <fieldset>
        <legend></legend>
        <label>
          <input type="text" name="age" />
          возраст (полных лет)
        </label>
        <label>
          <input type="text" name="growth" />
          рост в см
        </label>
        <label>
          <input type="text" name="weight" />
          вес в кг
        </label>
      </fieldset>
      <fieldset>
        <legend>Активность</legend>
        <label>
          <input type="radio" name="activity" />
          малоподвижный (сидячий )
        </label>
        <label>
          <input type="radio" name="activity" />
          легкая нагрузка (1-3 тренировки в неделю)
        </label>
        <label>
          <input type="radio" name="activity" />
          умеренная нагрузка (3-5 тренировок в неделю)
        </label>
        <label>
          <input type="radio" name="activity" />
          высокая нагрузка/профисиональный спорт (более 5 тренировок в неделю)
        </label>
      </fieldset>
      <button>Рассчитать</button>
    </form>
  );
};

export default DietForm;
