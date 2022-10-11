import Head from "next/head";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import {collection, getDocs} from "@firebase/firestore";
import {db} from '../../config/firebase'
import {any} from "prop-types";

const RecipeContainer = (props: { data: { image: string; name: string; desc: string; id: string } }) => {

  return (
      <Link href={"/recipes/" + props.data.id}>
        <li className="recipeContainer">
          <img src={props.data.image} className="recipeContainerImage"/>
          <div className="p-2">
            <h1>{props.data.name}</h1>
            <p>{props.data.desc}</p>
          </div>
        </li>
      </Link>
  );
}


const Recipes = () => {
  const [recipes, setRecipes] = useState([])

  // Collection refs
  const colRef = collection(db, 'recipes')

// Get collection data
  useEffect(() => {
    getDocs(colRef)
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            setRecipes(recipes => [...recipes, {...doc.data(), id: doc.id}])
          })
        }).catch(error => {
      console.log(error.message)
    })
  }, [])


  return (
      <main className="grid grid-cols-recipe3 justify-center place-content-start
        bg-gradient-to-bl from-blue-800 to-green-400 h-[100%] min-h-[calc(100vh-4rem)]">
        <Head>
          <title>Recipes</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        {
          // @ts-ignore
          recipes.map((recipe) => <RecipeContainer data={recipe} key={recipe.id}/>)
        }
      </main>

  )
}
export default Recipes;