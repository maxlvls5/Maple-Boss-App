function addGuide(guide) {
  return {
    type: "ADD_GUIDE",
    payload: { text: guide.text, id: guide.id },
  };
}

export { addGuide };

// actions are function we call to manipulate state
