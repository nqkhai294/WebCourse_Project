import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>

      <div className="app-content">
       <Outlet></Outlet>
      </div>

      <div className="app-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
