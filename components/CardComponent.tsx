import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { StopwatchResult } from "react-timer-hook";
import { useStopwatch } from "react-timer-hook";

interface CardProps {
  title: string;
  description: string;
  onTimeUpdate: () => void;
  onRemove: () => void;
}

export default function CardComponent({
  title,
  description,
  onTimeUpdate,
  onRemove,
}) {
  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    onTimeUpdate(hours, minutes, seconds);
  }, [hours, minutes, seconds]);
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">
          {hours}:{minutes}:{seconds}
        </Typography>
        <Button size="small" onClick={start}>
          Start
        </Button>
        <Button size="small" onClick={pause}>
          Pause
        </Button>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={onRemove}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
