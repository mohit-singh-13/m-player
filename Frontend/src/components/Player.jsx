import React from 'react'

export const Player = ({song, toggle}) => {
  return (
    <div className='player'>
      <button className='btn btn-warning' onClick={() =>{
        toggle(false, null);
      }}>Back to Songs</button>
      <br /><br />
      <p>
        <img src={song?.artworkUrl100} alt="" />
        <br />
        {song?.trackName} {song?.artistName}
      </p>
      <audio controls>
          <source src={song?.previewUrl} type='audio/mp4'/>
      </audio>
    </div>
  )
}