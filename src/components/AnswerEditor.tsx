import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  ListItem,
  Radio,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Answer } from "../store/quiz";

type AnswerEditorProps = {
  answer: Answer;
  onAnswerChange: (updatedAnswer: Answer) => void;
  onDelete: (id: number) => void;
};
const AnswerEditor: React.FC<AnswerEditorProps> = ({
  answer,
  onAnswerChange,
  onDelete,
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
          <Box display="flex">
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
            <Button
              onClick={() => onDelete(answer.id)}
              startIcon={<DeleteIcon />}
              color="error"
            />
          </Box>
        }
      />
    </ListItem>
  );
};

export default AnswerEditor;
