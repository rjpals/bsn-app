import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

import exampleQuiz from '../example.json';
import { getFormattedDate } from '../util';

export type Answer = {
  id: number;
  is_true: boolean;
  text: string;
};

export type Question = {
  answer_id: number | null;
  answers: Answer[];
  feedback_false: string;
  feedback_true: string;
  id: number;
  text: string;
};

export type Quiz = {
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
  quizzes: Quiz[];
}

const initialState: QuizState = { quizzes: [exampleQuiz] }

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    createQuiz: (state, action: PayloadAction<Quiz>) => {
      state.quizzes.push(action.payload);
    },
    updateQuiz: (state, action: PayloadAction<Quiz>) => {
      const index = state.quizzes.findIndex((quiz) => quiz.id === action.payload.id);
      state.quizzes[index] = {
        ...action.payload,
        modified: getFormattedDate(),
      };
    },
    deleteQuiz: (state, action: PayloadAction<number>) => {
      const index = state.quizzes.findIndex((quiz) => quiz.id === action.payload);
      state.quizzes.splice(index, 1);
    },
  },
})

export const { createQuiz, updateQuiz, deleteQuiz } = quizSlice.actions

export const selectQuizzes = (state: RootState) => state.quiz.quizzes

export default quizSlice.reducer
