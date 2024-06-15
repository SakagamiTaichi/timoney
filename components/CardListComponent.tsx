import React from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";
import { StopwatchResult } from "react-timer-hook";

interface CardData {
  title: string;
  description: string;
  timer: StopwatchResult;
}

interface CardListProps {
  cards: CardData[];
  onRemove: (index: number) => void;
  onTimeUpdate: (
    index: number,
    hours: number,
    minutes: number,
    seconds: number
  ) => void;
}

export default function CardListComponent({ cards, onRemove, onTimeUpdate }) {
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardComponent
            title={card.title}
            description={card.description}
            onRemove={() => onRemove(index)}
            onTimeUpdate={(hours, minutes, seconds) =>
              onTimeUpdate(index, hours, minutes, seconds)
            }
          />
        </Grid>
      ))}
    </Grid>
  );
}
