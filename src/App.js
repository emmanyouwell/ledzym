import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//Pages
import Home from './Routes/Home';


function App() {
  return (
    <>
      <div className='background-gradient'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
