import './App.css';
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
    </div>
  );
}

export default App;