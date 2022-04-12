import React from "react";
import { connect } from "react-redux";
import GuideForm from "./GuideForm";
import GuideCard from "./GuideCard";

function GuideContainer(props) {
  console.log(props.guides);
  return (
    <div>
      <h1>Bosses</h1>
      <h1 align="center">guides</h1>
      {props.guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
      <GuideForm props={props} />
    </div>
  );
}

// grabbin state
const mapStateToProps = (state) => {
  return {
    user: state.user,
    guides: state.guides,
  };
};
export default connect(mapStateToProps)(GuideContainer);
// connecting redux state to component
