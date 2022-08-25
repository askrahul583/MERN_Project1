import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
      </main>

      <Footer />
    </>
  );
}

export default App;
