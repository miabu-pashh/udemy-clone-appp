import './App.css';
import{
  BrowserRouter, Routes, Route
} from 'react-router-dom';

import {Home, SingleCoursePage, cart, Courses, Cart} from './Pages';
import Video from './Components/Video';
import Audio from './Components/Audio';
import Book from './Components/BookToOthers/Book';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Mvideo from './Components/VideoToOthers/Mvideo';
import Maudio from './Components/AudioToOthers/Maudio';
import Avideo from './Components/AudioToOthers/Avideo';
import VAudio from './Components/VideoToOthers/VAudio';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses/:id" element={<SingleCoursePage/>}/>

      <Route path="/category/:category" element={<Courses/>}/>

      <Route path="/cart" element={<Cart/>}/>

      <Route path="/" element={<Home/>}/>
      <Route path="/Video" element={<Video/>}/>
      <Route path="/Audio" element={<Audio/>}/>
      <Route path="/Book" element={<Book/>}/>

      <Route path="/Mvideo" element={<Mvideo/>}/>
      <Route path="/Vaudio" element={<VAudio/>}/>
      <Route path="/Maudio" element={<Maudio/>}/>
      <Route path="/Avideo" element={<Avideo/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
