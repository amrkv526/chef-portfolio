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
import Blog from './pages/blog.js';
import BlogArticleCard from './components/articleCard.js';
import Shop from './pages/shop.js';
import Events from './pages/events.js';

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
      <Route path="/blog" element={<Blog />} />
      <Route path="/article" element={<BlogArticleCard />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/events" element={<Events />} />
    </Routes>
    <Footer />
  </Router>
  );
}
export default App;
