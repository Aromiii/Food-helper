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
  const [imageLink, setImageLink] = useState("")
  const [ingredient, setIngredient] = useState("")
  const [step, setStep] = useState("")
  const [ingredients, setIngredients] = useState<string[]>([])
  const [steps, setSteps] = useState<string[]>([])
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
    if (name != "") {
      addDoc(colRef, {
        name: name,
        desc: desc,
        image: imageLink
      }).then(() => {
        console.log("200")
        location.replace("/recipes")
      }).catch((error) => {
        alert(error)
      })
    } else {
      alert("You need to fill the name field")
    }
  }

  const handleNameChange = (event: { target: HTMLInputElement }) => {
    setName(event.target.value)
  }
  const handleDescChange = (event: { target: HTMLInputElement }) => {
    setDesc(event.target.value)
  }
  const handleImageLinkChance = (event: { target: HTMLInputElement }) => {
    setImageLink(event.target.value)
  }
  const handleIngredientChance = (event: { target: HTMLInputElement }) => {
    setIngredient(event.target.value)
    console.log(ingredient)
  }
  const handleStepChance = (event: { target: HTMLInputElement }) => {
    setStep(event.target.value)
    console.log(step)
  }
  const handleNewIngredient = () => {
    console.log("Before: ", ingredients)
    setIngredients(kissa => kissa.concat(ingredient))
    console.log(ingredients)
  }
  const handleNewStep = () => {
    console.log("Before: ", steps)
    setSteps(kissa => kissa.concat(step))
    console.log(steps)
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

        <label htmlFor="image">Image link:</label>
        <input type="text" name="image" onChange={handleImageLinkChance}
               className="bg-gray-200 rounded-2xl p-1"/>

        <div className="w-[100%]">
          <label htmlFor="Ingredients">Ingredients:</label>
          <input className="bg-gray-200 p-1 rounded-full w-full "
                 type="text" onChange={handleIngredientChance}/>
          <button className="bg-green-400 rounded-full p-1 my-1 w-40" onClick={handleNewIngredient}>
            Add new Ingredient
          </button>
        </div>
        <div className="w-full">
          <label htmlFor="desc">Steps:</label>
          <input className="bg-gray-200 p-1 rounded-full w-full "
                 type="text" onChange={handleStepChance}/>
          <button className="bg-green-400 rounded-full p-1 my-1 w-40"
                  onClick={handleNewStep}>
            Add new step
          </button>
        </div>

        <div className="flex place-content-center">
          <input onClick={handleSubmit} type="submit" value="Create new recipe"
                 className="bg-green-400 m-5 w-40 h-12 rounded-full text-lg"/>
        </div>
      </div>
      ;
    </main>

  )
}
export default AddNew;