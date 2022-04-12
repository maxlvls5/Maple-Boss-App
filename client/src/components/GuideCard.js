import React from "react";
import { Link } from "react-router-dom";

function GuideCard({ guide }) {
  console.log(guide);
  return (
    <div>
      <Link to={`/guides/${guide.id}`} className="card">
        <h4>{guide.title}</h4>
      </Link>
    </div>
  );
}

export default GuideCard;
