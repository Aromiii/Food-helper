import Head from "next/head";
import {useEffect, useState} from "react";
import axios from "axios";
import RecipeContainer from "../../components/recipes/recipeContainer";

const Recipes = () => {
    const [data, setData] = useState([""])

    const getRecipes = () => {
        axios.get("/api/recipes/---placeholder---")
            .then((res) => {
                setData(res.data);
            })
    }

    useEffect(() => getRecipes(), [])


    return (
        <div>
            <Head>
                <title>Recipes</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <h1>
                recipes
            </h1>
            {
                data.map((recipe) => <RecipeContainer id={recipe.id} name={recipe.name} desc={recipe.desc} key={recipe.id} />)
            }
        </div>

    )
}
export default Recipes;