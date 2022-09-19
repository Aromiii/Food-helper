import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

const RecipeSiteBody = (props: { data: { image: string; name: string; recipe: string; desc: string } }) => {
  return <>
    <img src={props.data.image} className="object-cover h-56 w-screen" alt="Picture that user provided"/>
    <div className="px-4 w-screen">
      <h1 className="my-1.5">
        {props.data.name}
      </h1>
      <p className="my-2">
        {props.data.desc}
      </p>
      <p className="my-4">
        {props.data.recipe}
      </p>
    </div>
  </>;
}

const Recipe = () => {
  const router = useRouter()

  const [data, setData] = useState({"image": "", "name": "Error Data could not be retrieved", "recipe": "", "desc": ""})

  const getRecipe = () => {
    //TODO
    axios.get("/api/recipes/---placeholder---/recipe/" + router.query.recipeId)
      .then((res) => {
        setData(res.data);
      })
  }

  useEffect(() => getRecipe(), [])

  return (
    <div>
      <Head>
        <title>Recipe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <RecipeSiteBody data={data}/>
    </div>

  )
}

export default Recipe;