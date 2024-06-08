import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import Routers from "./routes/Routers";

function App() {

  
  return (
    <div className="App">'
      <div className="app-header">
        <Header />
      </div>

      <main>
        <Routers />
      </main>

      <div className="app-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
