import React from "react";
import { connect } from "react-redux";
import GuideForm from "./GuideForm";
import GuideCard from "./GuideCard";

function GuideContainer(props) {
  const getBoss = (guide) =>
    props.bosses.find((boss) => boss.id === guide.boss_id);
  return (
    <div className="glass guide-container">
      <h1 align="center">Guides</h1>
      <div>
        {props.guides.map((guide) => (
          <GuideCard key={guide.id} guide={guide} boss={getBoss(guide)} />
        ))}
      </div>
      <GuideForm />
    </div>
  );
}

// grabbin state
const mapStateToProps = (state) => {
  return {
    user: state.user,
    guides: state.guides,
    bosses: state.bosses,
  };
};
export default connect(mapStateToProps)(GuideContainer);
// connecting redux state to component
