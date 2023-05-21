import { useParams } from "react-router-dom";
import MovieDetail from "../components/movieDetail";
import { useEffect, useState } from "react";

const Details = () => {
  const {id}= useParams();
  // console.log(x)

   const [loading, setLoading] = useState(false);
  const [item, setItem] = useState();
   useEffect(() => {
     fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
       .then((response) => response.json())
       .then((json) => console.log(json.data.movie))
       .then((json) => setItem(json.data.movie));
     setLoading(true);
     console.log(item);
   }, []);
  return (
    <>
      {!loading ? (
        <h1>Loading...</h1>
      ) : (
        <MovieDetail
          title={item.title}
          // genres={item.genres}
          rating={item.rating}
          like={item.like_count}
          description={item.description_full}
        />
      )}
    </>
  );
}

export default Details