import { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie } from "./api";
import { FaSun, FaMoon } from 'react-icons/fa';
import LandingPage from './LandingPage'; // Import the LandingPage component

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(true); // State to track if on landing page

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div
          className={`flex flex-col mb-4 p-4 rounded shadow-md ${
            isDarkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'
          }`}
          key={i}
        >
          <img
            className='w-full h-48 object-cover rounded-t-md'
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className='px-4 py-2'>
            <h2 className='text-lg font-bold'>{movie.title}</h2>
            <p className='text-gray-600'>{movie.release_date}</p>
            <p className='text-gray-600'>Rating: {movie.vote_average}</p>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    search(e.target.value);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleEnter = () => {
    setIsLandingPage(false); // Navigate to the main app
  };

  if (isLandingPage) {
    return <LandingPage onEnter={handleEnter} />;
  }

  return (
    <div className={`App h-full ${isDarkTheme ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <header className="App-header py-4 flex flex-col items-center">
        <h1 className={`text-3xl font-bold text-center ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          Nacchan Movie
        </h1>
        <div className="flex items-center w-full max-w-lg mt-4">
          <input
            type="search"
            placeholder='Cari film lu bree...'
            className={`flex-grow px-4 py-2 text-lg rounded-l-md border-t border-l border-b ${
              isDarkTheme ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-black border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={searchQuery}
            onChange={handleSearch}
          />
          <button
            onClick={toggleTheme}
            className={`h-full p-2 rounded-r-md border-t border-r border-b ${
              isDarkTheme ? 'bg-gray-700 text-yellow-400 border-gray-700' : 'bg-gray-200 text-gray-800 border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
          </button>
        </div>
      </header>
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <PopularMovieList />
        </div>
      </div>
      <footer className='text-center mt-4'>
        <p className="text-gray-600">&copy; {new Date().getFullYear()} Nacchan Movie Copyright |   
        <a className='text-blue-500 underline' href='https://www.instagram.com/aditya.prastyaa/'>
            aditya.prastyaa  
        </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
