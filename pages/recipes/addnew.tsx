import Head from "next/head";
import {useState} from "react";
import {addDoc, collection, CollectionReference} from "@firebase/firestore";
import {auth, db} from "../../config/firebase";
import {onAuthStateChanged} from "firebase/auth";
import NewRecipeForm from "../../components/recipes/NewRecipeForm";

const AddNew = () => {
  //TODO on refresh browser lost auth so its null
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [recipe, setRecipe] = useState("")
  const [imageLink, setImageLink] = useState("")
  let colRef: CollectionReference

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //Collection reference to recipes that current user owns
      colRef = collection(db, 'users', user.uid, 'recipes')

    } else {
      console.log("Sign in required for adding new recipe")
    }
  })


  const handleSubmit = () => {
    if (name != "" || recipe != "") {
      addDoc(colRef, {
        name: name,
        desc: desc,
        recipe: recipe,
        image: imageLink
      }).then(() => {
        console.log("200")
        location.replace("/recipes")
      }).catch((error) => {
        alert(error)
      })
    } else {
      alert("You need to fill Name and Recipe fields")
    }
  }

  const handleNameChange = (event: { target: HTMLInputElement }) => {
    setName(event.target.value)
  }
  const handleDescChange = (event: { target: HTMLInputElement }) => {
    setDesc(event.target.value)
  }
  const handleRecipeChange = (event: { target: HTMLInputElement }) => {
    setRecipe(event.target.value)
  }
  const handleImageChance = (event: { target: HTMLInputElement }) => {
    setImageLink(event.target.value)
  }

  return (
    <main className="flex place-items-center flex-col m-5">
      <Head>
        <title>Add new recipe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <h1>
        Add new recipe
      </h1>
      <NewRecipeForm onChange={handleNameChange} onChange1={handleDescChange}
                      onChange2={handleRecipeChange} onChange3={handleImageChance}
                      onClick={handleSubmit}/>
    </main>

  )
}
export default AddNew;