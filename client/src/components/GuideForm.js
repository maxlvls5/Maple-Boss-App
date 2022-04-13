import React, { useState } from "react";
import { connect } from "react-redux";
import { addGuide, updateGuide } from "../redux/actions";

function NewGuideForm(props) {
  console.log(props);
  const editForm = !!props.currentGuide;
  const currentGuide = editForm
    ? { ...props.currentGuide }
    : { title: "", details: "", boss_id: 0 };
  const [guideTitle, setGuideTitle] = useState(currentGuide.title);
  const [guideDetails, setGuideDetails] = useState(currentGuide.details);
  const [bossId, setBossId] = useState(currentGuide.boss_id);

  const handleTitleChange = (event) => {
    setGuideTitle(event.target.value);
  };

  const handleBossChange = (event) => {
    setBossId(event.target.value);
  };
  const handleGuideChange = (event) => {
    setGuideDetails(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const toSubmit = {
      title: guideTitle,
      details: guideDetails,
      boss_id: parseInt(bossId),
      user_id: props.user.id,
    };
    if (editForm) {
      fetch("/guides/" + currentGuide.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toSubmit),
      })
        .then((r) => r.json())
        .then((guide) => {
          props.setCurrentGuide(guide);
          props.updateGuide(guide);
          props.setEditMode(false);
        });
      return;
    }

    fetch("/guides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSubmit),
    })
      .then((r) => r.json())
      .then((guide) => {
        props.addGuide(guide);
        setBossId(0);
        setGuideTitle("");
        setGuideDetails("");
      });
  };

  return (
    <div>
      <h2>New Guide Form:</h2>
      <form onSubmit={handleOnSubmit}>
        <select value={bossId} onChange={handleBossChange}>
          <option key={0} value={0}>
            select a boss
          </option>
          {props.bosses.map((boss) => (
            <option key={boss.id} value={boss.id}>
              {boss.name}
            </option>
          ))}
        </select>
        <input type="text" onChange={handleTitleChange} value={guideTitle} />

        <textarea
          placeholder="Guide Content..."
          value={guideDetails}
          onChange={handleGuideChange}
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bosses: state.bosses,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateGuide: (guide) => dispatch(updateGuide(guide)),
    addGuide: (guide) => dispatch(addGuide(guide)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGuideForm);

// dispatch action are called to manipulate state as opposed to getting state
