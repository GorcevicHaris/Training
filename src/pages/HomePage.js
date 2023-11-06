import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./homepage.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function HomePage() {
  const components = [...Array(8).keys()];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          height: "100vh",
          width: "100vw",
          // marginRight: "1px",
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            display: "flex",
            flexWrap: "wrap",
            width: "98.5vw",
            height: "100vh",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
        </Box>
      </Container>
    </React.Fragment>
  );
}
