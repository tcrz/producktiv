import "./Videocard.css";
import { Link } from "react-router-dom";
import { ImBin, ImUser } from "react-icons/im";
import VideoDeletionModal from "./VideoDeletionModal";
import { useLocation } from "react-router-dom";

export const Videocard = (props) => {
  const data = props.selectVideo(props.id);
  const location = useLocation();
  const thumbnail =
    props.videoThumbnail.split("hqdefault.jpg")[0] + "maxresdefault.jpg";
  return (
    <article className="video">
      <Link to="/videoplay" state={{ videoData: data }} className="videoplay">
        <div style={{ overflow: "hidden" }}>
          <img className="thumbnail" src={thumbnail} alt="video-thumbnail" />
        </div>
        <div className="details">
          <div className="video-name">
            <h4>{props.videoName}</h4>
          </div>
          <div className="description">
            <p>{props.description}</p>
          </div>
          <div className="author">
            {location.pathname === "/videos" && <p><ImUser/>{props.username}</p> }
          </div>
        </div>
      </Link>
      <div className="delete">
        <VideoDeletionModal
          id={props.id}
          deleteVideo={props.deleteVideo}
          trigger={ <p><ImBin />delete</p> }
        />
       
      </div>
    </article>
  );
};
