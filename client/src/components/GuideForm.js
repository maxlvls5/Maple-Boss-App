import React, { useState } from "react";
import { connect } from "react-redux";
import { addGuide } from "../redux/actions";

function NewGuideForm(props) {
  console.log(props.bosses);
  const [guideDetails, setGuideDetails] = useState("");
  const [bossId, setBossId] = useState(0);
  const handleBossChange = (event) => {
    setBossId(event.target.value);
  };
  const handleGuideChange = (event) => {
    setGuideDetails(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const toSubmit = {
      details: guideDetails,
      reward: "HIGH VALUE ITEMS",
      boss_id: parseInt(bossId),
      user_id: props.user.id,
    };

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
    addGuide: (guide) => dispatch(addGuide(guide)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGuideForm);

// dispatch action are called to manipulate state as opposed to getting state
