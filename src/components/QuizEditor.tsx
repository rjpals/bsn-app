import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { Question, Quiz } from "../store/quiz";

import { getRandomIntId } from "../util";
import QuestionEditor from "./QuestionEditor";

type QuizEditorProps = {
  quiz: Quiz;
  setQuiz: (quiz: Quiz) => void;
  onSave: () => void;
};
const QuizEditor: React.FC<QuizEditorProps> = ({ quiz, setQuiz, onSave }) => {
  const handleQuestionChange = (updatedQuestion: Question) => {
    const updatedQuestions = [...quiz.questions_answers];
    const questionIndex = updatedQuestions.findIndex(
      (q) => q.id === updatedQuestion.id
    );
    updatedQuestions[questionIndex] = updatedQuestion;
    setQuiz({ ...quiz, questions_answers: updatedQuestions });
  };

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: getRandomIntId(),
      answer_id: null,
      text: "question text",
      answers: [],
      feedback_true: "",
      feedback_false: "",
    };
    setQuiz({
      ...quiz,
      questions_answers: [...quiz.questions_answers, newQuestion],
    });
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
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddQuestion}
            startIcon={<AddIcon />}
          >
            Add New Question
          </Button>
        </CardContent>
      </Card>
      <Box>
        <ButtonGroup variant="contained" color="primary" sx={{ marginTop: 2 }}>
          <Link to="/">
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
            >
              Cancel
            </Button>
          </Link>
          <Button
            variant="contained"
            color="primary"
            onClick={onSave}
            startIcon={<SaveIcon />}
          >
            Save Quiz
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default QuizEditor;
