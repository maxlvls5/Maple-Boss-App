import React, { useState } from "react";
import { connect } from "react-redux";
import { addGuide } from "../redux/actions";

function NewGuideForm(props) {
  const [guideData, setGuideData] = useState({ guide: "" });
  const handleOnChange = (event) => {
    setGuideData({ guide: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch("/guides", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(guideData),
    })
      .then((r) => r.json())
      .then((guide) => {
        props.addGuide(guide);
        setGuideData({ guide: "" });
      });
  };

  return (
    <div>
      <h2>New Guide Form:</h2>
      <form onSubmit={handleOnSubmit}>
        <textarea
          placeholder="Guide Content..."
          value={guideData.guide}
          onChange={handleOnChange}
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addGuide: (guide) => dispatch(addGuide(guide)),
  };
};

export default connect(null, mapDispatchToProps)(NewGuideForm);

// dispatch action are called to manipulate state as opposed to getting state
