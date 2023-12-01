import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Question } from "../store/quiz";
import { useAppSelector, useAppDispatch } from "../hooks";
import { updateQuiz, selectQuizzes } from "../store/quiz";

import QuestionEditor from "./QuestionEditor";

const QuizEditor = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const quizzes = useAppSelector(selectQuizzes);
  const originalQuiz = id && quizzes.find((quiz) => quiz.id === parseInt(id));
  const [quiz, setQuiz] = useState(originalQuiz);

  useEffect(() => {
    setQuiz(originalQuiz);
  }, [id, originalQuiz]);

  // TODO make this better
  if (!quiz) return <div>Quiz not found</div>;

  const handleSave = () => {
    dispatch(updateQuiz(quiz));
  };

  const handleQuestionChange = (updatedQuestion: Question) => {
    const updatedQuestions = [...quiz.questions_answers];
    const questionIndex = updatedQuestions.findIndex(
      (q) => q.id === updatedQuestion.id
    );
    updatedQuestions[questionIndex] = updatedQuestion;
    setQuiz({ ...quiz, questions_answers: updatedQuestions });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Quiz Editor
      </Typography>
      <Card elevation={5} sx={{ marginBottom: 2 }}>
        <CardContent>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={quiz.title}
            onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            margin="normal"
            value={quiz.description}
            onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
          />
          <TextField
            label="YouTube URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={quiz.url}
            onChange={(e) => setQuiz({ ...quiz, url: e.target.value })}
          />
          {quiz.questions_answers.map((question) => (
            <QuestionEditor
              key={question.id}
              question={question}
              onQuestionChange={handleQuestionChange}
            />
          ))}
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Quiz
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QuizEditor;
