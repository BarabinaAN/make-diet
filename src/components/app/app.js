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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  CalculationPage,
  RecomendationPage,
  Error404Page
} from '../pages'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={CalculationPage} />
        <Route path='/recomendation/' component={RecomendationPage} />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default App;
