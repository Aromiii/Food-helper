import Head from "next/head";
import {getAuth, signOut} from "firebase/auth";
import {router} from "next/client";


const ShoppingList = () => {

  const auth = getAuth();
  const signOutHandler = () => {
    signOut(auth).then(() => {
      router.push("/")
    }).catch((error) => {
      console.log(error)
    });
  }
  return (
    <div className="flex place-items-center place-content-center h-[calc(100vh-4rem)]">
      <Head>
        <title>Shopping list</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <button onClick={signOutHandler}
              className="text-3xl bg-red-700 p-3 rounded-3xl text-white border-4 border-black">Sign out
      </button>
    </div>

  )
}
export default ShoppingList;