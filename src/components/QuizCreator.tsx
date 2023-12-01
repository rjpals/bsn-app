import React, { useState } from "react";
import QuizEditor from "./QuizEditor"; // Assume you have a QuizEditor component
import { Quiz, createQuiz } from "../store/quiz";
import { getRandomIntId } from "../util";
import { getFormattedDate } from "../util";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";

const QuizCreator = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [newQuiz, setNewQuiz] = useState<Quiz>({
    id: getRandomIntId(),
    created: getFormattedDate(),
    modified: getFormattedDate(),
    score: null,
    description: "",
    title: "new quiz",
    url: "",
    questions_answers: [],
  });

  const handleSave = () => {
    dispatch(createQuiz(newQuiz));
    // Redirect to quizzes list or other appropriate route
    navigate("/");
  };

  return <QuizEditor quiz={newQuiz} setQuiz={setNewQuiz} onSave={handleSave} />;
};

export default QuizCreator;
