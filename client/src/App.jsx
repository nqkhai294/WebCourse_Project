import './App.css';
import Layout from './layout/layout';

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
