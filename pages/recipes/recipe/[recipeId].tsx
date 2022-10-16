import Head from "next/head";
import {useRouter} from "next/router";
import {db} from "../../../config/firebase";
import {getDoc, doc, deleteDoc, DocumentData} from "@firebase/firestore";
import {useEffect, useState} from "react";

const RecipeSiteBody = (props: {image: string, name: string, desc: string, recipe: string}) => {
  return <>
    <img src={props.image}
         className="object-cover h-56 w-screen"
         alt="Picture that user provided"/>
    <div className="px-4 w-screen">
      <h1 className="my-1.5">
        {props.name}
      </h1>
      <p className="my-2">
        {props.desc}
      </p>
      <p className="my-4">
        {props.recipe}
      </p>
    </div>
  </>;
}

const Recipe = () => {
  const [image, setImage] = useState("Error")
  const [name, setName] = useState("Error")
  const [desc, setDesc] = useState("Error")
  const [recipe, setRecipe] = useState("Error")

  const router = useRouter()

  const docRef = doc(db, "recipes", "" + router.query.recipeId)

  //TODO migrate to getServerSideProps to make flash go away

  useEffect(() => {
    getDoc(docRef).then((doc) => {
      const data = doc.data()
      if (data != undefined) {
        setImage(data.image)
        setDesc(data.desc)
        setName(data.name)
        setRecipe(data.recipe)
      }
    }).catch((error) => {
      alert(error)
    })
  })

  const handleRemove = () => {
    deleteDoc(docRef)
      .then(() => {
        location.replace("/recipes")
      }).catch((error) => {
        console.log(error)
    })
  }

  return (
    <div>
      <Head>
        <title>Recipe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <RecipeSiteBody image={image} recipe={recipe} desc={desc} name={name}/>
      <button
        className="bg-red-700 text-white border-black border-2 p-2 rounded-full m-3"
        onClick={handleRemove}>
        Remove recipe
      </button>
    </div>

  )
}

export default Recipe;