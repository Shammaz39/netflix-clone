import React from 'react'
import "./MainContent.css"

function MainContent() {
  return (
    <div className='main'>
      <div className='content'>

        <h1 className='title'>Stranger Things</h1>
        <p className='description'>To access your Netflix settings on the web, just head to Netflix.com and sign in to your account. Then, click the arrow next to your profile at the top and select Account. Et voilà, let the customization begin!</p>

        <div className='buttons'>
          <button>▶ PLAY</button>
          <button>📝 ADD LIST</button>
        </div>
      </div>
        
    </div>
  )
} 

export default MainContent