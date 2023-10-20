import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import Youtube from './components/Youtube';
import Tiktok from './components/Tiktok';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/yt' element={<Youtube />} />
          <Route path='/ttk' element={<Tiktok />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
