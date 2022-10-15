import Head from "next/head";
import {useRouter} from "next/router";
import {db} from "../../../config/firebase";
import {getDoc, doc, deleteDoc} from "@firebase/firestore";
import {useEffect, useState} from "react";


const RecipeSiteBody = (props: { data: { image: string; name: string; recipe: string; desc: string } }) => {
  return <>
    <img src={props.data.image}
         className="object-cover h-56 w-screen"
         alt="Picture that user provided"/>
    <div className="px-4 w-screen">
      <h1 className="my-1.5">
        {props.data.name}
      </h1>
      <p className="my-2">
        {props.data.desc}
      </p>
      <p className="my-4">
        {props.data.recipe}
      </p>
    </div>
  </>;
}

const Recipe = () => {
  const [data, setData] = useState({image: "", name: "Error", recipe: "", desc: ""})
  const router = useRouter()

  const docRef = doc(db, "recipes", router.query.recipeId)

  //TODO migrate to getServerSideProps to make flash go away
  useEffect(() => {
    getDoc(docRef).then((doc) => {
      console.log(doc.data(), doc.id)
      setData(doc.data())
    })
  }, [])

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
      <RecipeSiteBody data={data}/>
      <button
        className="bg-red-700 text-white border-black border-2 p-2 rounded-full m-3"
        onClick={handleRemove}>
        Remove {data.name}
      </button>
    </div>

  )
}

export default Recipe;