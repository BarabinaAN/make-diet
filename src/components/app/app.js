// TODO: создать базовую структуру проекта:
// 1. иммитацию сервера
// 2. обработку ошибок сервера
// 3. обработку ошибок render'a
// 4. загрузку данных
// 5. hoc
// 6. роутинг и передачу данных через контекст
// 7. продублировать проект на redux

// * идея приложения: подсчет каллорий и вывод рекомендованных продуктов питания и блюд

import React from "react";
import { withServiceConsumer, withData } from "../hoc";
import DietForm from "../diet-form";

const App = ({ data }) => {
  const { name } = data[0];
  return (
    <div className='container'>
      <h1>
        <span> {name}</span>
      </h1>
      <DietForm />
    </div>
  );
};

export default withServiceConsumer(withData(App));
