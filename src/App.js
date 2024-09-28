import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import MovieItem from './Components/MovieItem/MovieItem';
import Swiper from './Components/Swiper';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MovieItem />
      <Footer />
    </div>
  );
}

export default App;