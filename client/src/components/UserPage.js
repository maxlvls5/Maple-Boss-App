import React from "react";
import GuideCard from "./GuideCard";
import { connect } from "react-redux";

function UserPage(props) {
  const getBoss = (guide) =>
    props.bosses.find((boss) => boss.id === guide.boss_id);
  return (
    <div className="glass user-container">
      <h1 align="center">{props.user.username}'s Created Guides</h1>
      {props.guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} boss={getBoss(guide)} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    guides: state.guides.filter((guide) => state.user.id === guide.user_id),
    bosses: state.bosses,
  };
};

export default connect(mapStateToProps)(UserPage);
