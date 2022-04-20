import React from "react";
import { Link } from "react-router-dom";

function GuideCard({ guide, boss }) {
  return (
    <div className="glass2 guide-card">
      <img className="newguideimg" src={boss?.image} alt={boss?.name} />

      <Link to={`/guides/${guide?.id}`} className="card">
        <h4>{guide?.title}</h4>
      </Link>
    </div>
  );
}

export default GuideCard;
