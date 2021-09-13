import logo from "./logo.svg";
import "./App.css";
import Header from "../header/Header.js";
import Footer from "../footer/Footer";
import Card from "../card/Card";
import Main from "../main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
