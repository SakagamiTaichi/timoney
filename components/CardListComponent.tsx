import React from "react";
import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";

interface CardData {
  title: string;
  description: string;
}

interface CardListProps {
  cards: CardData[];
  onRemove: (index: number) => void;
}

const CardListComponent: React.FC<CardListProps> = ({ cards, onRemove }) => (
  <Grid container spacing={3}>
    {cards.map((card, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <CardComponent
          title={card.title}
          description={card.description}
          onRemove={() => onRemove(index)}
        />
      </Grid>
    ))}
  </Grid>
);

export default CardListComponent;
