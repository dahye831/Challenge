import { useEffect, useState } from "react";
import MovieList from "../components/movieList";

const Movie = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year "
    )
      .then((response) => response.json())
      .then((json) => setData(json.data.movies));
    setLoading(true);
    console.log(data)
  }, []);

  return (
    <>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="movieList__title">Famous Movie</h1>
          <div className="movieList__wrap">
            <ul className="movieList">
                {data.map((item) => (
                  <MovieList key={item.id} id={item.id}  img={item.medium_cover_image} title={item.title} genres={item.genres} summary={item.summary}/>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Movie;
