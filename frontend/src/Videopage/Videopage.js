import { NavLink } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Videopage.css";
import { ImEye, ImArrowLeft2 } from "react-icons/im";
import { FiThumbsUp } from "react-icons/fi";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Videopage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);
  let location = useLocation();
  const { videoData } = location.state;
  const { stats } = videoData;
  // console.log(videoData);
  return (
    <>
      {isLoading ? (
        <Loader loadingText={"Loading video..."} />
      ) : (
        <>
          <NavLink to="/videos" className="back-to-courses">
            <ImArrowLeft2 style={{ height: ".8em" }} />Back to courses
          </NavLink>
          <div className="all-courses video-display">
            <SectionHeading title={videoData.videoName} />
            <div className="video-player">
              <iframe
                src={videoData.embedVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
              ></iframe>
            </div>
            <div className="video-details">
              <div className="video-stats">
                <p>
                  <ImEye /> {stats.viewCount} views
                </p>
                <p>
                  <FiThumbsUp /> {stats.likeCount} likes
                </p>
              </div>
              <div className="description">
                <h1>Description</h1>
                <p>{videoData.description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
