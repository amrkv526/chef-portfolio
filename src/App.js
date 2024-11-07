import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Recipes from './pages/recipes';
import Recipe from './pages/recipe';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}
export default App;
