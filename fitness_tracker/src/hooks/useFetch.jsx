import { useEffect, useState } from "react";

const API_KEY = import.meta.VITE_GIPHY_API;

const useFetch = () => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async ({ keyword }) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword
          .split(" ")
          .join("")}&limit=1`
      );
      const { data } = await response.json();
      setGifUrl(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      setGifUrl(
        "https://giphy.com/gifs/fitness-exercise-gym-3o7qE4gcYTW1zZPkre"
      );
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
