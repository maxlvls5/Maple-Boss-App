function addGuide(guide) {
  return {
    type: "ADD_GUIDE",
    payload: guide,
  };
}

function fetchGuides(guides) {
  return {
    type: "FETCH_GUIDES",
    payload: guides,
  };
}

function updateGuide(guide) {
  return {
    type: "UPDATE_GUIDE",
    payload: guide,
  };
}

function fetchBosses(bosses) {
  return {
    type: "FETCH_BOSSES",
    payload: bosses,
  };
}

function loginUser(user) {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
}

export { addGuide, fetchGuides, fetchBosses, loginUser, updateGuide };

// actions are function we call to manipulate state
// payload is what is used to update state
// type is the command
