import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";
import QuizEditor from "./components/QuizEditor";
import QuizzesList from "./components/QuizList";

function App() {
  return (
    <>
      <Router>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path="/" element={<QuizzesList />} />
            <Route path="/quiz" />
            <Route path="/quiz/:id" element={<QuizEditor />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
