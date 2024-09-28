import axios from "axios";
import { useEffect, useState } from "react";
import { ApiKey, BaseUrl, ImageUrl } from "../../constants/constants";
import "./MainContent.css"; // Ensure your CSS file is properly set up
import YouTube from "react-youtube";

// Debounce function to limit the frequency of function calls
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

function MainContent() {
  const [movie, setMovie] = useState(null);
  const [urlId, setUrlId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Fetch trending movies
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BaseUrl}trending/all/day?api_key=${ApiKey}`)
      .then((response) => {
        if (response.data && response.data.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * response.data.results.length);
          setMovie(response.data.results[randomIndex]); 
        } else {
          throw new Error("No movies found in the API response");
        }
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Handle window resize for dynamic image URL
  const iUrl = movie
    ? windowWidth >= 650
      ? ImageUrl + movie.backdrop_path
      : ImageUrl + movie.poster_path
    : "fallback_image_url"; // Use your valid fallback image URL

  useEffect(() => {
    const handleWindowResize = debounce(() => setWindowWidth(window.innerWidth), 200);
    window.addEventListener("resize", handleWindowResize);
    
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`${BaseUrl}movie/${id}/videos?api_key=${ApiKey}&language=en-US`)
      .then((response) => {
        if (response.data.results.length > 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("No video available");
        }
      })
      .catch((error) => {
        console.error("Error fetching movie videos", error);
      });
  };

  if (loading) return <div className="loading">Loading...</div>; // You can style this with CSS
  if (error) return <div className="error">Error: {error}</div>; // Handle errors more gracefully

  return (
    <div
      className="main"
      style={{
        backgroundImage: movie && (movie.backdrop_path || movie.poster_path) 
          ? `url(${iUrl})` 
          : "none",
      }}
    >
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      <div className="content">
        <div className="head">
          <span>|</span>
          <h1 className="title">{movie ? movie.name || movie.title : "Title not available"}</h1>
        </div>
        <p className="description">{movie ? movie.overview : "No description available"}</p>
        <div className="buttons">
          {movie && <button onClick={() => handleMovie(movie.id)}>▶ PLAY</button>}
          <button>📝 ADD LIST</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
