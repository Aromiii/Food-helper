import Head from "next/head";
import {useState} from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {auth, signInWithGoogle} from "../../config/firebase";

function AuthBox(props: { onChange: (event: any) => void, onChange1: (event: any) => void, onClick: () => Promise<void> }) {
  return <div className="place-items-center flex-col flex w-[300px] bg-gray-200 p-10 ">
    <button type="button" className="login-with-google-btn" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
    <div className="flex place-content-center flex-col">
      <h3 className="text-center mt-4 mb-2">Register</h3>
      <input className="bg-gray-300 p-1 m-1" onChange={props.onChange}/><br/>
      <input className="bg-gray-300 p-1 m-1" onChange={props.onChange1}/><br/>
      <button className="bg-blue-500 p-1 m-1" onClick={props.onClick}>Create user</button>
    </div>
  </div>;
}

const Auth= () => {

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser != null) {
      setUser(currentUser)
    }
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
      //TODO chance any to error type
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
      //TODO chance any to error type
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className="place-content-center flex place-items-center h-[calc(100vh-4rem)]">
      <Head>
        <title>Email and password </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <AuthBox onChange={(event) => {
        setRegisterEmail(event.target.value)
      }} onChange1={(event) => {
        setRegisterPassword(event.target.value)
      }} onClick={register}/>
    </div>

  )
}
export default Auth;

/*<div>
  <h3>Sign up</h3>
  <input className="bg-gray-400 p-1 m-1 rounded-2xl" onChange={(event) => {
    setLoginEmail(event.target.value)
  }}/>
  <input className="bg-gray-400 p-1 m-1 rounded-2xl" onChange={(event) => {
    setLoginPassword(event.target.value)
  }}/>
  <button className="bg-red-400 p-1 m-1 rounded-2xl" onClick={login}>Login</button>
</div>
<div>
  <h3>User signed in</h3>
  <h4>{auth.currentUser?.email}</h4>
  <button className="bg-green-400 p-1 m-1 rounded-2xl" onClick={logout}>Log out</button>
</div>*/