import Head from "next/head";
import {useState} from "react";
import {router} from "next/client";

const AddNew = () => {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [recipe, setRecipe] = useState("")
  const [imageLink, setImageLink] = useState("")

  const handleSubmit = (event: any) => {
    //TODO Database logic to record recipe

    router.replace("/recipes")
  }

  const handleNameChange = (event: any) => {
    setName(event.target.value)
  }
  const handleDescChange = (event: any) => {
    setDesc(event.target.value)
  }
  const handleRecipeChange = (event: any) => {
    setRecipe(event.target.value)
  }
  const handleImageChance = (event: any) => {
    setImageLink(event.target.value)
  }

  return (
    <div className="flex place-items-center flex-col m-5">
      <Head>
        <title>Add new recipe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <h1>
        Add new recipe
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-[50%]">
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
          <button className="bg-green-400 m-5 w-40 h-12 rounded-full text-lg">Create new recipe</button>
        </div>
      </form>
    </div>

  )
}
export default AddNew;