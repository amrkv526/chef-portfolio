import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/home';
import About from './pages/about';
import Recipes from './pages/recipes';
import Recipe from './components/recipeCard.js';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Header from './components/header';
import Footer from './components/footer';
import 

function App() {
  return (
    <Router>
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
  </Router>
  );
}
export default App;
