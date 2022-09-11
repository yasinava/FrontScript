import React from "react";
// components
import Card from "./Card";
import { DataCards } from "./DataCard";
// styles
import styles from "../styles/Card.module.css";
const Cards = ({ filter }) => {
  const newData = DataCards.filter((card) => card.price === 0);

  return (
    <div className={styles.cardsContainer}>
      {!filter
        ? DataCards.map((card) => <Card key={card.id} data={card} />)
        : newData.map((card) => <Card key={card.id} data={card} />)}
    </div>
  );
};

export default Cards;
