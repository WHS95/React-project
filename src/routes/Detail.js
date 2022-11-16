import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setloading] = useState(false);
  const getMovieDetailData = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setloading(false);
  };
  useEffect(() => {
    getMovieDetailData();
  }, []);
  console.log(id);
  console.log(movie);
  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default Detail;
