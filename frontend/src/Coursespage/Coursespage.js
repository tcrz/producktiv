import React, { useState, useEffect } from "react";
import "./Coursespage.css";
import { AppContext } from "../App/AppContext";
import { Videocard } from "../Videocard/Videocard";
import { Loader } from "../Loader/Loader";
import { CategoryOptions } from "./CategoryOptions";

import { SectionHeading } from "../SectionHeading/SectionHeading";

export const Coursespage = () => {
  const { resetUser } = React.useContext(AppContext);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  // console.log(selectedCategory)

  const getVideos = (resource) => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log("getting..");
    setError("");
    setIsLoading(true);
    fetch(
      `https://producktiv-backend.onrender.com/api/${resource}?${document.cookie}`,
      {
        credentials: "include",
        signal: signal,
      }
    )
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            resetUser();
          }
          throw Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("successful");
        setVideos(data.videos);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          console.log(error);
        } else {
          setIsLoading(false);
          setError(error);
          console.log(error);
        }
      });
    return controller;
  };

  const fetchCategoryVideos = (category) => {
    let resource = "";
    if (category === "All") {
      resource = "videos";
    } else {
      resource = `categories/${category}`;
    }
    const controller = getVideos(resource);
    return controller;
  };

  useEffect(() => {
    const controller = fetchCategoryVideos(selectedCategory);
    // console.log("in here")
    return () => controller.abort();
    // eslint-disable-next-line
  }, [selectedCategory]);

  const selectVideo = (id) => {
    const video = videos.filter((vid) => vid._id === id);
    return video[0];
  };

  return (
    <>
      <div className="all-courses">
        <SectionHeading title='Explore'/>
        <div className="categories">
          <CategoryOptions setSelectedCategory={setSelectedCategory} />
          {/* <div className="category-box"> */}
          {/* <select name="category-options" id="category">
            <option value="All categories">All categories</option>
            <option value="">Please choose a category</option>
            <option value="Art">
              <p>Art</p>
            </option>
            <option value="Business">Business</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Programming">Programming</option>
          </select> */}
        </div>
        {error && (
          <div className="notice-box error">
            <p>Sorry, an error occured while loading videos. Try again.</p>
          </div>
        )}
        {isLoading ? (
          <Loader loadingText={"Loading content..."} />
        ) : !error && videos.length === 0 ? (
          <div className="notice-box notice">
            <p>There are no videos in this category. Add one?</p>
          </div>
        ) : (
          !error && (
            <div className="videos-list">
              {videos.map((item, index) => {
                return (
                  <Videocard
                    selectVideo={selectVideo}
                    key={index}
                    id={item._id}
                    videoName={item.videoName}
                    embedVideo={item.embedVideo}
                    description={item.description}
                    videoThumbnail={item.videoThumbnail}
                    username={item.userName}
                  />
                );
              })}
            </div>
          )
        )}
      </div>
    </>
  );
};
