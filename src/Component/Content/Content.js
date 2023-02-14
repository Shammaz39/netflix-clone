import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {ImageUrl} from '../../constants/constants';
import "./Content.css"
function Content(props) {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      axios.get(props.url).then((response)=>{
        setMovie(response.data.results)
      })
    

    },[props.url])
    
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
                        <img src= {`${ImageUrl+obj.backdrop_path}`} alt="img" />
                    </div>
                )
            })
             
        }
        </div>



        
    </div>

  )
}

export default Content