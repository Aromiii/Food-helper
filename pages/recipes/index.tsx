import Head from "next/head";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";
import { collection, getDocs } from "@firebase/firestore";
import { db } from '../../config/firebase'
import {any} from "prop-types";

const RecipeContainer = (props: { data: { image: string; name: string; desc: string; id: string } }) => {

  return (
    <Link href={"/recipes/" + props.data.id}>
      <div className="recipeContainer">
        <img src={props.data.image} className="recipeContainerImage"/>
        <div className="p-2">
          <h1>{props.data.name}</h1>
          <p>{props.data.desc}</p>
        </div>
      </div>
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
          setRecipes(recipes => [...recipes, { ...doc.data(), id: doc.id }])
        })
      }).catch(error => {
      console.log(error.message)
    })
  }, [])


  return (
    <div className="recipesSite">
      <Head>
        <title>Recipes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      {
        // @ts-ignore
        recipes.map((recipe) => <RecipeContainer data={recipe} key={recipe.id}/>)
      }
    </div>

  )
}
export default Recipes;