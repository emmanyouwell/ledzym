import './App.css';

import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//Pages
import Home from './Routes/Home';
import ContactTemplate from './components/ContactTemplate';


function App() {
  return (
    <>
      <div className='background-gradient'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactTemplate />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
