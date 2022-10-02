import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./pages/MyNotes/MyNotes";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreateNote from "./pages/CreateNote/CreateNote";
import SingleNote from "./pages/CreateNote/SingleNote";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/createnote" exact>
          <CreateNote />
        </Route>
        <Route path="/notes/:id" exact>
          <SingleNote />
        </Route>
        <Route path="/mynotes">
          <MyNotes search={search} />
        </Route>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
