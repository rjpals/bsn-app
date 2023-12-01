import React from "react";
import { Card, CardContent, TextField, List } from "@mui/material";
import { Question, Answer } from "../store/quiz";

import AnswerEditor from "./AnswerEditor";

type QuizEditorProps = {
  question: Question;
  onQuestionChange: (updatedQuestion: Question) => void;
};
const QuestionEditor: React.FC<QuizEditorProps> = ({
  question,
  onQuestionChange,
}) => {
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
              onAnswerChange={(newAnswer: Answer) => {
                // Only one answer can be true
                const updatedAnswers = newAnswer.is_true
                  ? question.answers.map((a) => ({ ...a, is_true: false }))
                  : [...question.answers];
                updatedAnswers[index] = newAnswer;
                onQuestionChange({ ...question, answers: updatedAnswers });
              }}
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
      </CardContent>
    </Card>
  );
};

export default QuestionEditor;
