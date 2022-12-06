import "./Videocard.css"
import { Link } from 'react-router-dom';
import { ImBin } from "react-icons/im";


export const Videocard = (props) => {
  const data = props.selectVideo(props.id)
  const thumbnail = props.videoThumbnail.split("hqdefault.jpg")[0] + "maxresdefault.jpg"
  return (
    <article  className="video">
      <Link to="/videoplay" state={{videoData: data}}
     className="videoplay">
      <div style={{overflow:"hidden"}}>
      <img className="thumbnail" src={thumbnail} alt="video-thumbnail"/>
      </div>
      <div  className="details">
        <div  className="video-name">
          <h4>{props.videoName}</h4>
        </div>
        <div  className="description">
          <p>{props.description}</p>
          </div>
        <div  className="author">
          <p>{props.userName}</p>
        </div>
      </div>
      </Link>
      <div  className="delete">
          <p onClick={() => props.deleteVideo(props.id)}><ImBin/>delete</p>
      </div>
    </article>
    
  )
}