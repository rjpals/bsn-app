import React from "react";
import { useAppSelector, useAppDispatch } from "./hooks";

function App() {
  const quizes = useAppSelector((state) => state.quiz.quizes);
  const dispatch = useAppDispatch();

  const formattedQuiz = JSON.stringify(quizes[0], null, 2);
  return (
    <>
      <div className="App">Hell world</div>
      <code>{formattedQuiz}</code>
    </>
  );
}

export default App;
