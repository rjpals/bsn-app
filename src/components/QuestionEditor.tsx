import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  TextField,
  List,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Question, Answer } from "../store/quiz";

import AnswerEditor from "./AnswerEditor";
import { getRandomIntId } from "../util";

type QuizEditorProps = {
  question: Question;
  onQuestionChange: (updatedQuestion: Question) => void;
  onDelete: (id: number) => void;
};
const QuestionEditor: React.FC<QuizEditorProps> = ({
  question,
  onQuestionChange,
  onDelete,
}) => {
  const handleAnswerAdd = () => {
    const newAnswer: Answer = {
      id: getRandomIntId(),
      text: "",
      is_true: false,
    };
    const updatedAnswers = [...question.answers, newAnswer];
    onQuestionChange({ ...question, answers: updatedAnswers });
  };

  const handleAnswerChange = (newAnswer: Answer) => {
    const index = question.answers.findIndex((a) => a.id === newAnswer.id);
    // Only one answer can be true
    const updatedAnswers = newAnswer.is_true
      ? question.answers.map((a) => ({ ...a, is_true: false }))
      : [...question.answers];
    updatedAnswers[index] = newAnswer;
    onQuestionChange({ ...question, answers: updatedAnswers });
  };

  const handleAnswerDelete = (id: number) => {
    const updatedAnswers = question.answers.filter((a) => a.id !== id);
    onQuestionChange({ ...question, answers: updatedAnswers });
  };

  return (
    <Card elevation={5} sx={{ marginBottom: 2 }}>
      <CardContent>
        <TextField
          label="Question Text"
          variant="outlined"
          fullWidth
          margin="normal"
          value={question.text}
          onChange={(e) =>
            onQuestionChange({ ...question, text: e.target.value })
          }
        />
        <List>
          {question.answers.map((answer, index) => (
            <AnswerEditor
              key={answer.id}
              answer={answer}
              onDelete={handleAnswerDelete}
              onAnswerChange={handleAnswerChange}
            />
          ))}
        </List>
        <TextField
          label="Feedback for Correct Answer"
          variant="outlined"
          fullWidth
          margin="normal"
          value={question.feedback_true}
          onChange={(e) =>
            onQuestionChange({ ...question, feedback_true: e.target.value })
          }
        />
        <TextField
          label="Feedback for Incorrect Answer"
          variant="outlined"
          fullWidth
          margin="normal"
          value={question.feedback_false}
          onChange={(e) =>
            onQuestionChange({ ...question, feedback_false: e.target.value })
          }
        />
        <ButtonGroup variant="contained" color="primary" sx={{ marginTop: 2 }}>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={() => onDelete(question.id)}
          >
            Delete Question
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAnswerAdd}
            startIcon={<AddIcon />}
          >
            Add New Answer
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default QuestionEditor;
