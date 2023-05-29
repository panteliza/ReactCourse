import './Video.css';

function Video({title,id,channel="elu",views,time,verified}) {
   
  
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="easycode" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;