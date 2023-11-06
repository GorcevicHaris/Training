import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./homepage.css";

export default function HomePage() {
  const components = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="containers">
      {components.map((el) => (
        <Card sx={{ maxWidth: 345, height: 500 }}>
          <CardMedia
            sx={{ height: 315 }}
            component="img"
            alt="green iguana"
            height="140"
            image="myself.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
