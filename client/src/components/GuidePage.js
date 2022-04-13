import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GuideForm from "./GuideForm";
import { connect } from "react-redux";

function GuidePage(props) {
  const [guide, setGuide] = useState({});
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    fetch("/guides/" + id)
      .then((r) => r.json())
      .then(setGuide);
  }, []);
  console.log(id);
  console.log(guide);

  return (
    <div>
      {props.user?.id !== guide.user_id ? (
        ""
      ) : editMode ? (
        <GuideForm
          currentGuide={guide}
          setCurrentGuide={setGuide}
          setEditMode={setEditMode}
        />
      ) : (
        <button onClick={handleEditClick}> Edit your guide! </button>
      )}
      <img
        src={guide.boss && guide.boss.image}
        alt={guide.boss && guide.boss.name}
      />
      <h1>{guide.title}</h1> :<h1>{guide.boss && guide.boss.name}</h1>
      <p>{guide.details}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(GuidePage);

// line 24 - checking user matches the user of created guide, then checks if the page is in "edit mode"
