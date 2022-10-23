import Head from "next/head";
import {useRouter} from "next/router";
import {auth, db, deleteDocument} from "../../../config/firebase";
import {getDoc, doc, DocumentReference} from "@firebase/firestore";
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";

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
  //TODO on refresh browser lost auth so its null
  const [image, setImage] = useState("Error")
  const [name, setName] = useState("Error")
  const [desc, setDesc] = useState("Error")
  const [recipe, setRecipe] = useState("Error")
  const router = useRouter()
  let docRef: DocumentReference

  //TODO migrate to getServerSideProps to make flash go away
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //Document reference to recipes that current user owns
      docRef = doc(db, 'users', user.uid, 'recipes', "" + router.query.recipeId)

      //Getting recipes from the database
      getDoc(docRef).then((doc) => {
        const data = doc.data()
        if (data != undefined) {
          setImage(data.image)
          setDesc(data.desc)
          setName(data.name)
          setRecipe(data.recipe)
        } else {
          console.error("Data was undefined")
        }
      }).catch((error) => {
        console.error(error)
        alert(error)
      })
    }
  })

  const handleDeleteDocument = () => {
    deleteDocument(docRef, "/recipes")
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
        onClick={handleDeleteDocument}>
        Remove recipe
      </button>
    </div>

  )
}

export default Recipe;