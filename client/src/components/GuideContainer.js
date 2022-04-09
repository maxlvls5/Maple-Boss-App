import React from "react";
import GuideCard from "./GuideCard";

function GuideContainer({ recipes }) {
  const recipeCards = recipes.map((r) => {
    return <RecipeCard r={r} key={r.id} fromRecipes={true} />;
  });

  return (
    <div>
      <h1 align="center">Recipes</h1>
      <div className="container">{recipeCards}</div>
    </div>
  );
}

export default GuideContainer;
