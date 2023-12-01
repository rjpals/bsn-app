import React from "react";
import { Button, Card, CardContent, TextField, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Question, Answer } from "../store/quiz";

import AnswerEditor from "./AnswerEditor";
import { getRandomIntId } from "../util";

type QuizEditorProps = {
  question: Question;
  onQuestionChange: (updatedQuestion: Question) => void;
};
const QuestionEditor: React.FC<QuizEditorProps> = ({
  question,
  onQuestionChange,
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleAnswerAdd}
          startIcon={<AddIcon />}
        >
          Add New Answer
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuestionEditor;
