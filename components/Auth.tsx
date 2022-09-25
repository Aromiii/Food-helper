import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error: any) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row flex-center flex place-content-center">
      <div className="col-6 form-widget">
        <h1 className="header AuthItem">Food-helper</h1>
        <p className="description AuthItem">
          Sign in via magic link with your email below
        </p>
        <div className="AuthItem">
          <input
            className="inputField bg-gray-300 rounded-2xl p-1.5"
            type="email"
            placeholder=" Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="AuthItem">
          <button
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            className="button block"
            disabled={loading}
          >
            <span>{loading ? 'Loading' : 'Send magic link'}</span>
          </button>
        </div>
      </div>
    </div>
  )
}