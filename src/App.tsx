import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import {Album} from './screens/Album';
import {Activities} from './screens/Activities';
import {About} from './screens/About';
import { Contact } from './screens/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
          <Route  path="/"  element={<Home/>} />
          <Route  path="/album" element={<Album/>} />
          <Route  path="/activities" element={<Activities/>} />
          <Route  path="/Contact" element={<Contact/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/blog"  element={<Home/>} />
       </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
