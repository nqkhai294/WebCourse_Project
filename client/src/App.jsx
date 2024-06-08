import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routers from "./routes/Routers";

function App() {

  
  return (
    <div className="App">'
        <Header />
      <main>
        <Routers />
      </main>
        <Footer/>
      </div>
  );
}

export default App;
