import {DocumentData} from "@firebase/firestore";
import Link from "next/link";
import React from "react";

const RecipeContainer = (props: { data: DocumentData }) => {
  return (
    <Link href={"/recipes/recipe/" + props.data.id}>
      <div className="bg-gray-500 m-2 rounded-2xl h-96 object-cover overflow-hidden">
        <img src={props.data.image} className="rounded-2xl max-h-[60%] w-screen object-cover"/>
        <div className="p-2">
          <h1>{props.data.name}</h1>
          <p>{props.data.desc}</p>
        </div>
      </div>
    </Link>
  );
}
export default RecipeContainer;