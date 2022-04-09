import React from "react";
import { Link } from "react-router-dom";

function GuideCard({ r, fromRecipes }) {
  return (
    <Link to={fromRecipes ? `${r.id}` : `/recipes/${r.id}`} className="card">
      <h4>{r.name}</h4>
      <img src={r.image_url} alt={r.name} />
      <h6>Time: {formatTime(r.time_to_complete)}</h6>
    </Link>
  );
}

export default GuideCard;
