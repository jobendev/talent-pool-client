import React from "react";
function HomepageBody(props) {
  return (
    <div className="content-container flex flex-row justify-evenly align-middle">
      <div className="content-card rounded-xl p-px flex flex-row shadow-md  mt-10 w-70">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <div className="h-80 w-80">
          <img src={props.image} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default HomepageBody;
