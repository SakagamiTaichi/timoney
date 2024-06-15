"use client";
import React, { useState } from "react";
import CardListComponent from "@/components/CardListComponent";
import AddCardComponent from "@/components/AddCardComponent";
import { useStopwatch } from "react-timer-hook";
import { Button } from "@mui/material";

export default function Home() {
  const [cards, setCards] = useState([
    {
      title: "Card 1",
      description: "This is Card 1",
      timer: { hours: 0, minutes: 0, seconds: 0 },
    },
    {
      title: "Card 2",
      description: "This is Card 2",
      timer: { hours: 0, minutes: 0, seconds: 0 },
    },
    {
      title: "Card 3",
      description: "This is Card 3",
      timer: { hours: 0, minutes: 0, seconds: 0 },
    },
  ]);

  const addCard = () => {
    const newCard = {
      title: `Card ${cards.length + 1}`,
      description: `This is Card ${cards.length + 1}`,
      timer: { hours: 0, minutes: 0, seconds: 0 },
    };
    setCards([...cards, newCard]);
  };

  const removeCard = (index: number) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  const handleTimeUpdate = (index, hours, minutes, seconds) => {
    const newCards = [...cards];
    newCards[index].timer = { hours, minutes, seconds };
    setCards(newCards);
  };

  return (
    <>
      <main>
        <AddCardComponent addCard={addCard} />
        <CardListComponent
          cards={cards}
          onRemove={removeCard}
          onTimeUpdate={handleTimeUpdate}
        />
      </main>
    </>
  );
}
