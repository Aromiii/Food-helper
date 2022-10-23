import Head from "next/head";
import {auth, signOutHandler} from "../../config/firebase";

const Profile = () => {


  return (
    <main className="flex place-items-center place-content-center h-[calc(100vh-4rem)]">
      <Head>
        <title>{auth.currentUser?.displayName}´s profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <button onClick={signOutHandler}
              className="text-3xl bg-red-700 p-3 rounded-3xl text-white border-4 border-black">Sign out
      </button>
    </main>

  )
}
export default Profile;