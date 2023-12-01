import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { updateQuiz, selectQuizzes } from "../store/quiz";
import { useNavigate } from "react-router-dom";

import QuizEditor from "./QuizEditor";
import QuizNotFound from "./NotFound";

const QuizEditorPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const quizzes = useAppSelector(selectQuizzes);
  const originalQuiz = id && quizzes.find((quiz) => quiz.id === parseInt(id));
  const [quiz, setQuiz] = useState(originalQuiz);

  useEffect(() => {
    setQuiz(originalQuiz);
  }, [id, originalQuiz]);

  if (!quiz) return <QuizNotFound />;

  const handleSave = () => {
    dispatch(updateQuiz(quiz));
    navigate("/");
  };

  return <QuizEditor quiz={quiz} setQuiz={setQuiz} onSave={handleSave} />;
};

export default QuizEditorPage;
