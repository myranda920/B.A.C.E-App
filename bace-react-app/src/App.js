import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import "@cloudscape-design/global-styles/index.css"
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Calculator from "./components/pages/MainPage/Calculator";
import MainPage from "./components/pages/MainPage/MainPage";
import ResultsPage from "./components/pages/ResultsPage/ResultsPage";

function App() {

  return (
    <>
   <Header />
   {this.props.children}
   <Footer />
   </>
  )}

export default App;
