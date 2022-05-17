import React from "react";

function PopularCategory({ category, btnAction }) {
  const { image, imageAlt, title } = category;
  return (
    <div className="pop_cat" onClick={btnAction}>
      <img src={image} alt={imageAlt} />
      <span>{title}</span>
    </div>
  );
}

export default PopularCategory;
