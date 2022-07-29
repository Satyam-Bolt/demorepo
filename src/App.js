import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
      <BrowserRouter>
        <Navbar></Navbar>
        <Alert message="demo alert" type="primary"></Alert>
        <div className="container">
        <Routes>
          <Route exact path="/"element={<Home></Home>}></Route>
          <Route exact path="/about"element={<About></About>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
