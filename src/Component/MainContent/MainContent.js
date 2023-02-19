import axios from "axios"
import { useEffect, useState } from "react"
import { ApiKey, BaseUrl, ImageUrl} from "../../constants/constants"
import "./MainContent.css"

// import YouTube from "react-youtube"


function MainContent() {
  const [movie ,setMovie] = useState([])
  // const [urlId,setUrlId] = useState("");


  useEffect(() => {
    axios.get(`${BaseUrl}/trending/all/day?api_key=${ApiKey}`).then((response)=>{
      setMovie(response.data.results[0])
    })
  
  },[])

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const iUrl = windowWidth >= 650 ?  ImageUrl+movie.backdrop_path : ImageUrl+movie.poster_path;

  useEffect(() => {
      const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize', handleWindowResize);

      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };


  // const handleMovie = (id) =>{
      
  //   console.log(id)
  //   axios.get(`${BaseUrl}movie/${id}/videos?api_key=${ApiKey}&language=en-US`).then(response =>{
  //     if(response.data.results.length !== 0){
  //       setUrlId(response.data.results[0])
  //     }else{
  //       <p>Sorry No Content .....</p>
  //     }

  //   })
    
  // }


  return (
    <div className='main'
    style={{backgroundImage:`url(${movie ? iUrl : ""})` }}>
      <div className='content'>
        <div className="head">
          <span>|</span>
          <h1 className='title'> {movie ? movie.name||movie.title : ""}</h1>
        </div>
        
        <p className='description'>{movie ? movie.overview : ""}</p>

        <div className='buttons'>
          <button>▶ PLAY</button>
          {/* <button onClick={()=>{handleMovie(movie.id)}}>▶ PLAY</button> */}
          <button>📝 ADD LIST</button>
        </div>
      </div>

      {/* { urlId && <YouTube videoId={urlId.key} opts={opts} />}  */}
        
    </div>
  )
} 

export default MainContent