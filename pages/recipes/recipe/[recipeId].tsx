import Head from "next/head";
import {useRouter} from "next/router";
import {auth, db, deleteDocument} from "../../../config/firebase";
import {getDoc, doc, DocumentReference} from "@firebase/firestore";
import {useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import RecipeSiteBody from "../../../components/recipes/recipeSiteBody";


const Recipe = () => {
  //TODO on refresh browser lost auth so its null
  const [image, setImage] = useState("Error")
  const [name, setName] = useState("Error")
  const [desc, setDesc] = useState("Error")
  const [recipe, setRecipe] = useState("Error")
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
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
          setIngredients(data.ingredients)
          setSteps(data.steps)
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
      <RecipeSiteBody src={image} name={name}
                      desc={desc} recipe={recipe}
                      ingredients={ingredients}
                      steps={steps}
                      onClick={handleDeleteDocument}/>
    </div>

  )
}

export default Recipe;