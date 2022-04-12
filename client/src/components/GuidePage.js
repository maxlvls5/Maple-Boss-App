import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function GuidePage(props) {
  const [guide, setGuide] = useState({});
  const guideId = useParams().id;
  useEffect(() => {
    fetch("/guides/" + guideId)
      .then((r) => r.json())
      .then(setGuide);
  }, []);
  console.log(props.guides);

  return <div>{props.guides}</div>;
}

export default GuidePage;
