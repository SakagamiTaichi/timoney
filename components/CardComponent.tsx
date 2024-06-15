import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";

interface CardProps {
  title: string;
  description: string;
  onRemove: () => void;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  onRemove,
}) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary" onClick={onRemove}>
        Remove
      </Button>
    </CardActions>
  </Card>
);

export default CardComponent;
