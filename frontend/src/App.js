import './App.css';
import Compatibility from './pages/compatibilty';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/compatibility' element={<Compatibility/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
