import {
  Routes,
  Route,
} from 'react-router-dom';
import Catagories from './routes/Categories';
import Books from './routes/books';
import './App.css';
import Navbar from './routes/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Catagories" element={<Catagories />} />

      </Routes>

    </div>
  );
}
export default App;
