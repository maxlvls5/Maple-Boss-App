import React from "react";
import GuideCard from "./GuideCard";
import { connect } from "react-redux";

function UserPage(props) {
  console.log(props);
  return (
    <div className="glass">
      <h1 align="center">user's Page</h1>
      {props.guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    guides: state.guides.filter((guide) => state.user.id === guide.user_id),
  };
};

export default connect(mapStateToProps)(UserPage);
