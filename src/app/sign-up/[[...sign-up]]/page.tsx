import { SignUp } from '@clerk/nextjs'
import Link from 'next/link'
import "./signup.sass"

export default function Page(): React.ReactNode {
  return (
    <section className="sign-up-page">
      <div className="sign-up-container">
        <SignUp />
        <span className="redirect-link">
          Already have an account?
          <Link href="/sign-in">Click here to Sign In</Link>
        </span>
      </div>
    </section>
  )
}
