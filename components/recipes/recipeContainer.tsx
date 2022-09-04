import React from 'react';
import Link from 'next/link'

const RecipeContainer = (props: any) => {
  return (
    <Link href={"/recipes/" + props.id}>
      <div className="recipeContainer">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
      </div>
    </Link>
  );
}

export default RecipeContainer;

