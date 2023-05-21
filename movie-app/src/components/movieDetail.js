const MovieDetail = ({ title, genres, rating, runtime, like, description }) => {
  return (
    <>
      <h1>{title}</h1>
      {/* <ul className="movieType">
        {genres.map((genres, index) => (
          <li key={index}>{genres}</li>
        ))}
      </ul> */}
      {rating ? <span>rating : {rating}</span> : ""}
      {runtime ? <span>runtime : {runtime}</span> : ""}
      {like ? <span>like ;: {like}</span> : ""}
      {description ? <p>{description}</p> : ""}
    </>
  );
};

export default MovieDetail;