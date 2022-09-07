import React from 'react';
import Link from 'next/link'

const RecipeContainer = (props: any) => {
  return (
    <Link href={"/recipes/" + props.id}>
      <div className="recipeContainer">
        <img src={props.image} className="recipeContainerImage" alt="picture of food"/>
        <div className="p-2">
          <h1>{props.name}</h1>
          <p>{props.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default RecipeContainer;

