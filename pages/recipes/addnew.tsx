import Head from "next/head";
import {useState} from "react";
import {addDoc, collection, CollectionReference, getDocs} from "@firebase/firestore";
import {auth, db} from "../../config/firebase";
import {onAuthStateChanged} from "firebase/auth";

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
    }
    else {
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
      <div className="flex flex-col w-[50%] min-w-[300px]">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" required onChange={handleNameChange}
               className="bg-gray-200 rounded-2xl p-1"/>

        <label htmlFor="desc">Description:</label>
        <input type="text" name="desc" onChange={handleDescChange}
               className="bg-gray-200 rounded-2xl p-1"/>

        <label htmlFor="recipe">Recipe:</label>
        <input type="text" name="recipe" required onChange={handleRecipeChange}
               className="bg-gray-200 rounded-2xl p-1"/>

        <label htmlFor="image">Image link:</label>
        <input type="text" name="image" onChange={handleImageChance}
               className="bg-gray-200 rounded-2xl p-1"/>
        <div className="flex place-content-center">
          <input onClick={handleSubmit} type="submit" value="Create new recipe"
                 className="bg-green-400 m-5 w-40 h-12 rounded-full text-lg"/>
        </div>
      </div>
    </main>

  )
}
export default AddNew;