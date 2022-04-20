import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GuideForm from "./GuideForm";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteGuide } from "../redux/actions";
import { Button, Icon } from "semantic-ui-react";

function GuidePage(props) {
  const [guide, setGuide] = useState({});
  const [editMode, setEditMode] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleDeleteClick = () => {
    let confirmDelete = window.confirm(
      "ARE YOU SURE ABOUT DELETING THIS GUIDE?"
    );
    if (!confirmDelete) return;
    fetch("/guides/" + id, { method: "DELETE" })
      .then((r) => r.json())
      .then((guideId) => {
        props.deleteGuide(guideId);
        navigate("/guides");
      });
  };

  useEffect(() => {
    fetch("/guides/" + id)
      .then((r) => r.json())
      .then(setGuide);
  }, []);
  console.log(id);
  console.log(guide);

  return (
    <div className="glass guide-page-container">
      <img
        className="glass2"
        src={guide.boss && guide.boss.image}
        alt={guide.boss && guide.boss.name}
      />
      <div>
        {props.user?.id !== guide.user_id ? (
          ""
        ) : (
          <Button color="red" onClick={handleDeleteClick} animated>
            <Button.Content visible>DELETE THIS GUIDE!</Button.Content>
            <Button.Content hidden>
              <Icon name="trash alternate" />
            </Button.Content>
          </Button>
          // <button onClick={handleDeleteClick}> DELETE THIS GUIDE! </button>
        )}
        {props.user?.id !== guide.user_id ? (
          ""
        ) : editMode ? (
          <GuideForm
            currentGuide={guide}
            setCurrentGuide={setGuide}
            setEditMode={setEditMode}
          />
        ) : (
          <Button color="teal" onClick={handleEditClick} animated>
            <Button.Content visible>Edit your guide!</Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
          // <button onClick={handleEditClick}> Edit your guide! </button>
        )}
      </div>
      <h1 className="guide-title">{guide.title}</h1>
      <h1>{guide.boss && guide.boss.name} -</h1>
      <h4>💠 Level:{guide.boss?.level}</h4>
      <h4>❤️ Total HP:{guide.boss?.hp}</h4>
      <h5>⚔️ Boss Drops: {guide.boss?.drop}</h5>
      <p>Guide -{guide.details}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteGuide: (guideId) => dispatch(deleteGuide(guideId)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuidePage);

// line 24 - checking user matches the user of created guide, then checks if the page is in "edit mode"
