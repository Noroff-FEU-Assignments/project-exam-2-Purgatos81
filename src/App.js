import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Hotels from './components/pages/Hotels';
import './App.css';
import Nav from './components/navigation/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='hotels' element={<Hotels />} />
      </Routes>
    </Router>
  );
}

export default App;
