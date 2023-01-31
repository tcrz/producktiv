import "./Videocard.css";
import { Link } from "react-router-dom";
import { ImBin, ImUser } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { Modal } from "semantic-ui-react";

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
            {location.pathname === "/videos" && <p><ImUser/>&nbsp;{props.username}</p> }
          </div>
        </div>
      </Link>
      <div className="delete">
        <Modal
          size="tiny"
          actions={["No", {key: "yes", content: "Yes", negative: true, onClick:()=>props.deleteVideo(props.id)}]}
          trigger={ <p><ImBin />delete</p> }
          header="Delete Video"
          content="Are you sure you would like to delete this video?"
        />
       
      </div>
    </article>
  );
};
