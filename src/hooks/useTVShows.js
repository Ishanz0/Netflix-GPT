import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTVShows } from "../utils/moviesSlice";

const useTVShows = () => {
  const dispatch = useDispatch();

  const getTVShows = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&page=1&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTVShows(json.results));
  };

  useEffect(() => {
    getTVShows();
  }, []);
};

export default useTVShows;
