import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Movie from "./routes/movie";
import ErrorPage from "./routes/error";
import Details from "./routes/details";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
