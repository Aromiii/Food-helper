import Head from "next/head";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

const Recipe = () => {
  const router = useRouter()

  const [data, setData] = useState([""])

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
      <img src={data.image} className="object-cover h-56 w-screen"/>
      <div className="px-4 w-screen">
        <h1 className="my-1.5">
          {data.name}
        </h1>
        <p className="my-2">
          {data.desc}
        </p>
        <p className="my-4">
          {data.recipe}
        </p>
      </div>
    </div>

  )
}
export default Recipe;