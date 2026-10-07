import { useState } from 'react'
import './signupform.css'

function SignupForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="signup-page">
      <section className="signup-card" aria-labelledby="signup-title">
        <div className="signup-mark" aria-hidden="true">
          S
        </div>
        <p className="signup-eyebrow">GET STARTED</p>
        <h1 id="signup-title">Create your account</h1>
        <p className="signup-intro">Join us today. It only takes a minute.</p>

        {submitted ? (
          <div className="signup-success" role="status">
            Your details passed validation. You can now connect this form to
            your signup service.
          </div>
        ) : (
          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="signup-name">Full name</label>
            <input
              autoComplete="name"
              id="signup-name"
              name="name"
              placeholder="Jane Smith"
              required
            />

            <label htmlFor="signup-email">Email address</label>
            <input
              autoComplete="email"
              id="signup-email"
              name="email"
              placeholder="jane@example.com"
              required
              type="email"
            />

            <label htmlFor="signup-password">Password</label>
            <input
              autoComplete="new-password"
              id="signup-password"
              minLength={8}
              name="password"
              placeholder="At least 8 characters"
              required
              type="password"
            />
            <p className="signup-hint">Use at least 8 characters.</p>

            <label className="signup-terms">
              <input name="terms" required type="checkbox" />
              <span>
                I agree to the <a href="#terms">Terms of Service</a> and{' '}
                <a href="#privacy">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit">Create account</button>
          </form>
        )}

        <p className="signup-footer">
          Already have an account? <a href="#login">Sign in</a>
        </p>
      </section>
    </main>
  )
}

export default SignupForm