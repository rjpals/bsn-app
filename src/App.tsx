import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import QuizEditorPage from "./components/QuizEditorPage";
import QuizzesList from "./components/QuizList";
import QuizCreator from "./components/QuizCreator";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path="/" element={<QuizzesList />} />
            <Route path="/quiz/new" element={<QuizCreator />} />
            <Route path="/quiz/:id" element={<QuizEditorPage />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
