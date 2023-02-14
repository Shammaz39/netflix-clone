import axios from "axios"
import { useEffect, useState } from "react"
import { ApiKey, BaseUrl, ImageUrl} from "../../constants/constants"
import "./MainContent.css"


function MainContent() {
  const [movie ,setMovie] = useState([])


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
          <button>📝 ADD LIST</button>
        </div>
      </div>
        
    </div>
  )
} 

export default MainContent