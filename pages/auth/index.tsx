import { useState, useEffect } from 'react'
import { supabase } from '../../utils/supabaseClient'
import Auth from '../../components/Auth'
import Account from '../../components/Account'

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [session, setSession] = useState(null)

  useEffect(() => {
    let mounted = true

    async function getInitialSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      // only update the React state if the component is still mounted
      if (mounted) {
        if (session) {
          // @ts-ignore
          setSession(session)
        }

        setIsLoading(false)
      }
    }

    getInitialSession()

    // @ts-ignore
    const { subscription } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        // @ts-ignore
        setSession(session)
      }
    )

    return () => {
      mounted = false

      subscription?.unsubscribe()
    }
  }, [])

  // @ts-ignore
  return (
    <div className="w-screen h-[calc(100vh-4rem)] place-content-center flex">
      {!session ? (
        <Auth />
      ) : (// @ts-ignore
        <Account key={session.user.id} session={session} />
      )}
    </div>
  )
}

export default AuthPage;