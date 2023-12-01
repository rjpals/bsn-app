import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../hooks";
import { selectQuizzes } from "../store/quiz";
import { deleteQuiz } from "../store/quiz";

const QuizzesList = () => {
  const dispatch = useAppDispatch();
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
            <ButtonGroup
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  dispatch(dispatch(deleteQuiz(quiz.id)));
                }}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
              <Link to={`/quiz/${quiz.id}`}>
                <Button startIcon={<EditIcon />} variant="contained">
                  Edit Quiz
                </Button>
              </Link>
            </ButtonGroup>
          </CardContent>
        </Card>
      ))}
      <Link to="/quiz/new">
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          startIcon={<AddIcon />}
        >
          Add New Quiz
        </Button>
      </Link>
    </Box>
  );
};

export default QuizzesList;
