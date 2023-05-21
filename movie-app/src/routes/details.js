import { useParams } from "react-router-dom";
import MovieDetail from "../components/movieDetail";
import { useEffect, useState } from "react";

const Details = () => {
  const {id}= useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState('');

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(true)
    setItem(json.data.movie)
  }
   useEffect(() => {
     getMovie()
   }, []);
  console.log(item)
  return (
    <>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          title={item.title}
          genres={item.genres}
          rating={item.rating}
          like={item.like_count}
          description={item.description_full}
        />
      )}
    </>
  );
}

export default Details