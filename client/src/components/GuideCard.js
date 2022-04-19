import React from "react";
import { Link } from "react-router-dom";
import guideIMG from "../guideIMG.gif";

function GuideCard({ guide }) {
  console.log(guide);
  return (
    <div className="glass2">
      <img className="newguideimg" src={guideIMG} alt="guide img" />
      <div className="container">
        <Link to={`/guides/${guide.id}`} className="card">
          <h4>{guide.title}</h4>
        </Link>
      </div>
    </div>
  );
}

export default GuideCard;
