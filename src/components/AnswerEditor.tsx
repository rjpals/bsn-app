import React from "react";
import { FormControlLabel, ListItem, Radio, TextField } from "@mui/material";
import { Answer } from "../store/quiz";

type AnswerEditorProps = {
  answer: Answer;
  onAnswerChange: (updatedAnswer: Answer) => void;
};
const AnswerEditor: React.FC<AnswerEditorProps> = ({
  answer,
  onAnswerChange,
}) => {
  return (
    <ListItem>
      <FormControlLabel
        control={
          <Radio
            checked={answer.is_true}
            onChange={(e) =>
              onAnswerChange({ ...answer, is_true: e.target.checked })
            }
          />
        }
        label={
          <TextField
            label="Answer Text"
            variant="outlined"
            fullWidth
            margin="normal"
            value={answer.text}
            onChange={(e) =>
              onAnswerChange({ ...answer, text: e.target.value })
            }
          />
        }
      />
    </ListItem>
  );
};

export default AnswerEditor;
