/* eslint-disable @typescript-eslint/explicit-function-return-type */

'use client'

import { UserProfile } from '@clerk/nextjs'

const DotIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.02059 16.5818C9.02059 18.0278 7.83492 19.2 6.37232 19.2C4.90971 19.2 3.72404 18.0278 3.72404 16.5818M9.02059 16.5818C9.02059 15.1358 7.83492 13.9636 6.37232 13.9636C4.90971 13.9636 3.72404 15.1358 3.72404 16.5818M9.02059 16.5818H14.9792M3.72404 16.5818H2.3999V5.79999C2.3999 5.2477 2.84762 4.79999 3.3999 4.79999H14.9792V16.5818M20.9378 16.5818C20.9378 18.0278 19.7522 19.2 18.2896 19.2C16.827 19.2 15.6413 18.0278 15.6413 16.5818M20.9378 16.5818C20.9378 15.1358 19.7522 13.9636 18.2896 13.9636C16.827 13.9636 15.6413 15.1358 15.6413 16.5818M20.9378 16.5818H21.5999V11.3454L18.2896 8.07272H14.9792V16.5818M15.6413 16.5818H14.9792" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const OrdersPage = () => {
  return (
    <div>
      <h1>Orders History</h1>
      <p>Orders history will go here</p>
    </div>
  )
}

const UserProfilePage = () => (
  <section>
    <UserProfile path="/user-profile" routing="path">
      {/* You can pass the content as a component */}
      <UserProfile.Page label="Orders" labelIcon={<DotIcon />} url="orders-history">
        <OrdersPage />
      </UserProfile.Page>
      {/* You can also pass the content as direct children
            <UserProfile.Page label="Terms" labelIcon={<DotIcon />} url="terms">
            <div>
                <h1>Custom Terms Page</h1>
                <p>This is the content of the custom terms page.</p>
            </div>
            </UserProfile.Page> */}
    </UserProfile>
  </section>
)

export default UserProfilePage
