import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'
import "./signin.sass"

export default function Page(): React.ReactNode {
  return (
    <section className="sign-in-page">
      <div className="sign-in-container">
        <SignIn />
        <span className="redirect-link">
          Don&apos;t have an account?
          <Link href="/sign-up">Click here to Sign Up</Link>
        </span>
      </div>
      <div className="sign-in-image" />
    </section>
  )
}
