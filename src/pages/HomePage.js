import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./homepage.css";

export default function HomePage() {
  const components = [
    <div className="containers">
      <Card>
        <CardMedia
          sx={{ height: 330 }}
          component="img"
          alt="green iguana"
          height="140"
          image="myself.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Haris
          </Typography>
          <Typography variant="body2" color="text.secondary">
            People are good
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>,
  ];
  return (
    <div className="containers">
      {components.map((el) => (
        <div>{el}</div>
      ))}
    </div>
  );
}
