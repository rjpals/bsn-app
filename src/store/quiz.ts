import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

import exampleQuiz from '../example.json';

type Answer = {
  id: number;
  is_true: boolean;
  text: string;
};

type Question = {
  answer_id: number | null;
  answers: Answer[];
  feedback_false: string;
  feedback_true: string;
  id: number;
  text: string;
};

type Quiz = {
  created: string;
  description: string;
  id: number;
  modified: string;
  questions_answers: Question[];
  score: number | null;
  title: string;
  url: string;
};

interface QuizState {
  quizes: Quiz[];
}

const initialState: QuizState = { quizes: [exampleQuiz] }

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    createQuiz: (state, action: PayloadAction<Quiz>) => {
      state.quizes.push(action.payload);
    }
  },
})

export const { createQuiz } = quizSlice.actions

export const selectQuizes = (state: RootState) => state.quiz.quizes

export default quizSlice.reducer
