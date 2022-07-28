import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
        
        <div>
          <Router>
            <div>
              <Navbar></Navbar>
            </div>
            <Routes>
              <Route path='/about'  element={<About/>}/>
              <Route exact path= '/'  element={<Home/>}/>
            </Routes>
          </Router>
        </div>
    </div>
  );
}

export default App;
