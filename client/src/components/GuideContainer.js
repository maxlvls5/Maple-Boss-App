import React from "react";
import { connect } from "react-redux";
import GuideForm from "./GuideForm";
import GuideCard from "./GuideCard";

function GuideContainer(props) {
  return (
    <div>
      <h1 align="center">guides</h1>
      <GuideForm />
      {/* <div className="container">{recipeCards}</div> */}
    </div>
  );
}

// grabbin state
const mapStateToProps = (state) => {
  return {
    guides: state.guides,
  };
};
export default connect(mapStateToProps)(GuideContainer);
// connecting redux state to component
