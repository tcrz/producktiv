import React, { useState } from "react";
import "./CategoryOptions.css"
// import { useMediaQuery } from "react-responsive";
import {
  ImStatsDots,
  ImPencil2,
  ImEmbed2,
  ImAccessibility,
} from "react-icons/im";

export const CategoryOptions = ({ setSelectedCategory }) => {
  const options = [
    { name: "All", icon: "" },
    { name: "Programming", icon: <ImEmbed2/> },
    { name: "Art", icon: <ImPencil2/>},
    { name: "Business", icon: <ImStatsDots/>},
    { name: "Lifestyle", icon: <ImAccessibility/>}
  ];
  const [categories] = useState(options);

  return (
    <>
      {categories.map((category, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                id={category.name}
                name="course-choice"
                defaultChecked={category.name === "All"}
              />
              <label
                htmlFor={category.name}
                className="selected"
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.icon} {category.name === "All" ? "All categories" : category.name}
              </label>
            </div>
          );
      })}
    </>
  );
};
