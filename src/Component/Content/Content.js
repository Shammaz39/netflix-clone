import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {ImageUrl,ApiKey,BaseUrl} from '../../constants/constants';
import YouTube from 'react-youtube';
import "./Content.css"
function Content(props) {

    const [movie, setMovie] = useState([]);
    const [urlId,setUrlId] = useState("");

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

    const handleMovie = (id) =>{
      
      console.log(id)
      axios.get(`${BaseUrl}movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then(response =>{
        if(response.data.results.length !== 0){
          setUrlId(response.data.results[0])
        }else{
          <p>Sorry No Content .....</p>
        }

      })
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
                        <img onClick={()=>{handleMovie(obj.id)}} src= {`${ImageUrl+obj.backdrop_path}`} alt="img" />
                    </div>
                )
            })
             
        }
        </div>

        { urlId && <YouTube videoId={urlId.key} opts={opts} />} 

        
    </div>

  )
}

export default Content