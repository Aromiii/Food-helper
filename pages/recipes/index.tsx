import Head from "next/head";
import React, {useState} from "react";
import {collection, DocumentData} from "@firebase/firestore";
import {db, auth, getDocuments} from '../../config/firebase'
import {onAuthStateChanged} from "firebase/auth";
import CreateNewRecipeText from "../../components/recipes/createNewRecipeText";
import RecipeContainer from "../../components/recipes/RecipeContainer";

const Recipes = () => {
  //TODO migrate to getServerSideProps to make flash go away
  const [recipes, setRecipes] = useState<DocumentData[]>([])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //Collection reference to recipes that current user owns
      const colRef = collection(db, 'users', user.uid, 'recipes')

      //Getting recipes from the database
      getDocuments(colRef, setRecipes);
    }
  })

  return (
    <main className="grid grid-cols-recipe3 justify-center place-content-start
        bg-gradient-to-bl from-blue-800 to-green-400 h-[100%] min-h-[calc(100vh-4rem)]">
      <Head>
        <title>Recipes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      {recipes.length == 0 ? (
        <CreateNewRecipeText/>
      ) : (
        <div>
          {
            recipes.map((recipe: DocumentData) => <RecipeContainer data={recipe} key={recipe.id}/>)
          }
        </div>
      )}
    </main>
  )
}
export default Recipes;