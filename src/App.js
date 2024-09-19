import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SideBar from './components/side-bar';
import Experience from './components/pages/Experience';

function App() {
  return (
    <main
      className={`App w-full min-h-screen space-y-20 h-auto py-8 px-8 md:py-20 md:px-16 text-[#748195] bg-[#0f172a]`}
    >
      <Router>
        <div className="main-content grid grid-cols-1 lg:grid-cols-3 gap-12 w-full md:w-[700px] lg:w-[930px] mx-auto">
          <aside className='col-span-1'>
            <SideBar />
          </aside>
          <main className='col-span-2'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/experience' element={<Experience />} />
            </Routes>
          </main>

        </div>
      </Router>
    </main>
  );
}

export default App;
