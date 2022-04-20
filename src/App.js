import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Hotels from './components/pages/Hotels';
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';
import Nav from './components/navigation/Nav';
import Footer from './components/layouts/Footer';
import { AuthProvider } from './components/context/AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Nav />
          <Routes>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='hotels' element={<Hotels />} />
            <Route path='admin' element={<Admin />} />
            <Route path='login' element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
