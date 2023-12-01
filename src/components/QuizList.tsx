import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useAppSelector } from "../hooks";
import { selectQuizzes } from "../store/quiz";

const QuizzesList = () => {
  const quizzes = useAppSelector(selectQuizzes);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Quizzes
      </Typography>
      {quizzes.map((quiz) => (
        <Card key={quiz.id} sx={{ marginBottom: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {quiz.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {quiz.description}
            </Typography>
            <Link to={`/quiz/${quiz.id}`}>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Edit Quiz
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
      {/* TODO: Add a new quiz creator */}
      <Link to="/quiz/new">
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Add New Quiz
        </Button>
      </Link>
    </Box>
  );
};

export default QuizzesList;
