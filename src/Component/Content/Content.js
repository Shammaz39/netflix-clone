import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {ImageUrl,ApiKey,BaseUrl} from '../../constants/constants';
import YouTube from 'react-youtube';
import "./Content.css"
function Content(props) {

    const [movie, setMovie] = useState([]);
    const [urlId,setUrlId] = useState("");
    const [videoLoading, setVideoLoading] = useState(false);

    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovie(response.data.results)
      })
    

    },[props.url])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const handleMovie = (obj) =>{
      setVideoLoading(true);
      const mediaType = obj.media_type || (obj.name ? 'tv' : 'movie');
      
      axios.get(`${BaseUrl}${mediaType}/${obj.id}/videos?api_key=${ApiKey}&language=en-US`).then(response =>{
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }else{
          setUrlId(null);
          console.log("Sorry No Content .....");
          alert("No trailer found for this title.");
        }
      }).catch(error => {
        console.error(`Error fetching video for ${mediaType}`, error);
        alert("Sorry, could not fetch the trailer from TMDB.");
      }).finally(() => {
        setVideoLoading(false);
      });
    }
    
    
  return (

    <div className='xyz-content'>
        <div className='content-title'>
            <h1 className='bar'>|</h1>
            <h1 className='head'>{props.title}</h1>
        </div>

        
        <div className='movie-tile'>
        {
            movie.map((obj)=>{
                return(
                    <div className='photo'>
                        <img onClick={()=>{handleMovie(obj)}} src= {`${ImageUrl+obj.backdrop_path}`} alt="img" />
                    </div>
                )
            })
             
        }
        </div>

        {videoLoading && <h3 style={{color: 'white', textAlign: 'center', marginTop: '20px'}}>Loading Trailer...</h3>}
        {urlId && !videoLoading && (
          <div className="video-overlay" onClick={() => setUrlId("")}>
            <div className="video-container" onClick={(e) => e.stopPropagation()}>
              <div className="video-header">
                <button className="yt-close-btn" onClick={() => setUrlId("")}>✖ Close</button>
                <a 
                  href={`https://www.youtube.com/watch?v=${urlId.key}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="yt-open-btn"
                >
                  <span className="yt-icon">▶</span> Open in YouTube App
                </a>
              </div>
              <YouTube videoId={urlId.key} opts={{...opts, width: '100%', height: '450'}} className="yt-player" />
            </div>
          </div>
        )}

        
    </div>

  )
}

export default Content