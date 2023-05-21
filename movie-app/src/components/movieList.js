import { Link } from 'react-router-dom';
import './movieList.css'

const MovieList = ({ id, img, title, genres, summary }) => {
  return (
    <li className="movieItem">
      <div >
        {console.log(id)}
        <img src={img} />
        <h2 className="movieTitle">
          <Link to={`detail/${id}`}>{title}</Link>
        </h2>
        <ul className="movieType">
          {genres.map((genres, index) => (
            <li key={index}>{genres}</li>
          ))}
        </ul>
        <p className="movieText">{summary}</p>
      </div>
    </li>
  );
};

export default MovieList;