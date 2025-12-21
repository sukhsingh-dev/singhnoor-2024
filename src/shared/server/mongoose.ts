/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/promise-function-async  */
// eslint-disable-next-line import/no-extraneous-dependencies
import mongoose from "mongoose"

// eslint-disable-next-line import/prefer-default-export
export function mongooseConnect() {

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise()
  }
  const uri: string = process.env.MONGODB_URI ?? ''
  return mongoose.connect(uri)

}
