
import React from 'react'
 import './Home.css'
import Video from '../../components/Video/Video'
import videos from '../../data/Data'
import PlayButton from '../../components/PlayButton/PlayButton'
function Home() {
return(
    <div className="App" onClick={()=>console.log('App')}>
    <div>Videos</div>
    {videos.map((video) => (
      <Video
        key={video.id}
        title={video.title}
        views={video.views}
        time={video.time}
        channel={video.channel}
        verified={video.verified}
        id={video.id}
      >
        <PlayButton
          onPlay={() => console.log('Playing..',video.title)}
          onPause={() => console.log('Paused..',video.title)}
        >
          {video.title}
        </PlayButton>
      </Video>
    ))}

    <div style={{ clear: 'both' }}>
      {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

      {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
    </div>
  </div>
);
}

export default Home;