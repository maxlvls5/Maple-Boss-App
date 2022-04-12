import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GuidePage(props) {
  const [guide, setGuide] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/guides/" + id)
      .then((r) => r.json())
      .then(setGuide);
  }, []);
  console.log(id);
  console.log(guide);

  return (
    <div>
      <img
        src={guide.boss && guide.boss.image}
        alt={guide.boss && guide.boss.name}
      />
      <h1>{guide.title}</h1>
      <h1>{guide.boss && guide.boss.name}</h1>
      <p>{guide.details}</p>
    </div>
  );
}

export default GuidePage;
// {id: 1, details: '850 Arcaness Force/Power (ARC) is needed to deal n…d out. The battle has a time limit of 30 minutes.', boss_id: 1, user_id: 1, title: 'Hard Darknell'}
