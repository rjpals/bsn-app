import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const QuizNotFound = () => {
  return (
    <Container sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Quiz Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The requested quiz does not exist or has been deleted.
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary">
          Back to Quizzes
        </Button>
      </Link>
    </Container>
  );
};

export default QuizNotFound;
