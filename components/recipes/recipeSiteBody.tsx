import {DocumentData} from "@firebase/firestore";
import RecipeContainer from "./RecipeContainer";
import React from "react";

const RecipeSiteBody = (props: { src: string, name: string,
  desc: string, ingredients: string[], steps: string[], onClick: () => void }) => {
  return <>
    <img src={props.src}
         className="object-cover h-56 w-screen"
         alt="Picture that user provided"/>
    <div className="px-4 w-screen">
      <h1 className="my-1.5">
        {props.name}
      </h1>
      <p className="my-2">
        {props.desc}
      </p>
      <div className="m-2">
        <ul>
          {
            props.ingredients.map((ingredient: string) => <li className="list-disc">{ingredient}</li>)
          }
        </ul>
        <ol>
          {
            props.steps.map((step: string) => <li className="list-decimal m">{step}</li>)
          }
        </ol>
      </div>
    </div>
    <button
      className="bg-red-700 text-white border-black border-2 p-2 rounded-full m-3"
      onClick={props.onClick}>
      Remove recipe
    </button>
  </>;
}
export default RecipeSiteBody