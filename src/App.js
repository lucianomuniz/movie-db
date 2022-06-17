import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Movie from './SingleMovie';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies/:id' element={<Movie />} />
    </Routes>
  );
};

export default App;
