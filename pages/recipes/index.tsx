import Head from "next/head";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

const RecipeContainer = (props: { data: { image: string; name: string; desc: string; id: string } }) => {
  return (
    <Link href={"/recipes/" + props.data.id}>
      <div className="recipeContainer">
        <img src={props.data.image} className="recipeContainerImage" alt="picture of food"/>
        <div className="p-2">
          <h1>{props.data.name}</h1>
          <p>{props.data.desc}</p>
        </div>
      </div>
    </Link>
  );
}


const Recipes = () => {
  const [data, setData] = useState([""])

  const getRecipes = () => {
    //TODO
    axios.get("/api/recipes/---placeholder---")
      .then((res) => {
        setData(res.data);
      })
  }

  useEffect(() => getRecipes(), [])


  return (
    <div className="recipesSite">
      <Head>
        <title>Recipes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      {
        // @ts-ignore
        data.map((recipe) => <RecipeContainer data={recipe}/>)
      }
    </div>

  )
}
export default Recipes;