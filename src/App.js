import './App.scss';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='experience' element={<Experience />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
