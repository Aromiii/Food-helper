import Head from "next/head";
import {getAuth, signOut} from "firebase/auth";
import {router} from "next/client";


const Profile = () => {

  const auth = getAuth();
  const signOutHandler = () => {
    signOut(auth).then(() => {
      router.replace("/")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <main className="flex place-items-center place-content-center h-[calc(100vh-4rem)]">
      <Head>
        <title>{auth.currentUser?.displayName}'s profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <button onClick={signOutHandler}
              className="text-3xl bg-red-700 p-3 rounded-3xl text-white border-4 border-black">Sign out
      </button>
    </main>

  )
}
export default Profile;