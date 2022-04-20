import React, { useState } from "react";
import { connect } from "react-redux";
import { addGuide, updateGuide } from "../redux/actions";
import { Button, Dropdown } from "semantic-ui-react";

function NewGuideForm(props) {
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

  const handleBossChange = (event, data) => {
    setBossId(data.value);
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

  // semantic dropdown area
  const bossOptions = props.bosses.map((boss) => ({
    key: boss.id,
    value: boss.id,
    text: boss.name,
    image: {
      avatar: true,
      src: boss.image,
    },
  }));

  // [
  //   {
  //     key: 1,
  //     text: "Hard Darknell",
  //     value: 1,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1650406856/mini_darknell_vsihax.png",
  //     },
  //   },
  //   {
  //     key: 2,
  //     text: "Hard Lucid",
  //     value: 2,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1649807317/lucidATTK_npkn6r.gif",
  //     },
  //   },
  //   {
  //     key: 3,
  //     text: "Black Mage",
  //     value: 3,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1650396243/blackmageGIF_oaod65.gif",
  //     },
  //   },
  //   {
  //     key: 4,
  //     text: "Verus Hilla",
  //     value: 4,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1649807533/vhilla_kcrszq.gif",
  //     },
  //   },
  //   {
  //     key: 5,
  //     text: "Chaos Gloom",
  //     value: 5,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1649807673/gloom_bvpdbo.png",
  //     },
  //   },
  //   {
  //     key: 6,
  //     text: "Hard Damien",
  //     value: 6,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1650394975/damiengif_wzo7pe.gif",
  //     },
  //   },
  //   {
  //     key: 7,
  //     text: "Hard Lotus",
  //     value: 7,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1650395407/lotus_ezcgzh.png",
  //     },
  //   },
  //   {
  //     key: 8,
  //     text: "Hard Seren",
  //     value: 8,
  //     image: {
  //       avatar: true,
  //       src: "https://res.cloudinary.com/dtglqdhwm/image/upload/v1650396243/serenGIF_vbdqhs.gif",
  //     },
  //   },
  // ];
  // //

  return (
    <div className="guide-form-container">
      <h2>Make A New Guide:</h2>
      <form className="guide-form" onSubmit={handleOnSubmit}>
        <Dropdown
          inline
          options={bossOptions}
          value={bossId}
          placeholder={"Select Boss"}
          onChange={handleBossChange}
        />

        <input
          placeholder="Guide Title"
          className="guide-form-standard"
          type="text"
          onChange={handleTitleChange}
          value={guideTitle}
        />

        <textarea
          className="guide-form-details"
          placeholder="Guide Content..."
          value={guideDetails}
          onChange={handleGuideChange}
        ></textarea>
        <Button color="olive" className="submit-button" type="submit">
          Submit!
        </Button>
        {/* <input className="submit-button" type="submit" /> */}
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
// semantics properties are different ex. OnChange takes event and data for function properties
