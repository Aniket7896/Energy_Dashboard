import './App.css';
import Boxes from './components/Boxes';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <div className="content-container">
          <Navbar />
          <div className="page">
            <Boxes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
