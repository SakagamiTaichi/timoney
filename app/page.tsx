"use client";
import React, { useState } from "react";
import CardListComponent from "@/components/CardListComponent";
import AddCardComponent from "@/components/AddCardComponent";

export default function Home() {
  const [cards, setCards] = useState([
    { title: "Card 1", description: "This is Card 1" },
    { title: "Card 2", description: "This is Card 2" },
    { title: "Card 3", description: "This is Card 3" },
  ]);

  const addCard = () => {
    const newCard = {
      title: `Card ${cards.length + 1}`,
      description: `This is Card ${cards.length + 1}`,
    };
    setCards([...cards, newCard]);
  };

  const removeCard = (index: number) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <>
      <main>
        <AddCardComponent addCard={addCard} />
        <CardListComponent cards={cards} onRemove={removeCard} />
      </main>
    </>
  );
}
