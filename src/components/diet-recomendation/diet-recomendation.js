import React from "react";
import { withServiceConsumer, withData } from "../hoc";
import "./diet-recomendation.scss";

const DietRecomendation = ({ data }) => {
  const { name } = data[0];
  return (
    <section className="diet-recomendation">
      <h2>Результат:</h2>
      <p>{ name }</p>
    </section>
  );
};

export default withServiceConsumer(
  withData(DietRecomendation)
);
