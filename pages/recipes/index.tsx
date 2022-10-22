import Head from "next/head";
import React, {useState} from "react";
import Link from "next/link";
import {collection, DocumentData, getDocs} from "@firebase/firestore";
import {db, auth} from '../../config/firebase'
import {onAuthStateChanged} from "firebase/auth";

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

const Recipes = () => {
  //TODO migrate to getServerSideProps to make flash go away
  const [recipes, setRecipes] = useState<DocumentData[]>([])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //Collection reference to recipes that current user owns
      const colRef = collection(db, 'users', user.uid, 'recipes')

      //Getting recipes from the database
      getDocs(colRef)
        .then((snapshot) => {
          setRecipes([])
          snapshot.docs.forEach((doc) => {
            setRecipes(recipes => [...recipes, {...doc.data(), id: doc.id}])
          })
        }).catch(error => {
        console.log(error.message)
      })
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
        <div className="h-[calc(100vh-4rem)] place-content-center place-items-center flex">
          <Link href="/recipes/addnew">
            <h1 className="text-center">
              Create your first recipe by clicking here
            </h1>
          </Link>
        </div>
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