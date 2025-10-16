/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */

'use client'

import { useUser } from "@clerk/clerk-react"
import CartInfo from "@/shared/components/cart-info"
import React, { useState } from "react"
import { CountrySelect, StateSelect, CitySelect, PhonecodeSelect } from "react-country-state-city"
import "react-country-state-city/dist/react-country-state-city.css"
import "../cart/cart.sass"
import "./address.sass"
import { type Country, type State, type City } from "react-country-state-city/dist/esm/types"

const countryIndia: Country = {
  id: 101,
  name: "India",
  iso3: "IND",
  iso2: "IN",
  numeric_code: "356",
  phone_code: "91",
  capital: "New Delhi",
  currency: "INR",
  currency_name: "Indian rupee",
  currency_symbol: "₹",
  tld: ".in",
  native: "भारत",
  region: "Asia",
  subregion: "Southern Asia",
  latitude: "20.00000000",
  longitude: "77.00000000",
  emoji: "🇮🇳",
  emojiU: "U+1F1EE U+1F1F3",
  hasStates: true
}

export default function AddressPage(): React.ReactElement {
  const { user } = useUser()
  const [country, setCountry] = useState<((string | number | readonly string[]) & Country) | undefined>(countryIndia as string & Country)
  const [currentState, setCurrentState] = useState<State | undefined>(undefined)
  const [, setCurrentCity] = useState<City | undefined>(undefined)

  const addressDataHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      "firstName": { value: string }
      "lastName": { value: string }
      "email": { value: string }
      "city": { value: string }
      "state": { value: string }
      "country": { value: string }
      "phonecode": { value: string }
    }

    const formFieldData = {
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      city: target.city.value,
      state: target.state.value,
      countryName: country?.name != null ? country.name : target.country.value,
      phonecode: target.phonecode.value,
      village: (e.currentTarget.elements.namedItem("village") as HTMLInputElement).value,
      landmark: (e.currentTarget.elements.namedItem("landmark") as HTMLInputElement).value,
      pincode: (e.currentTarget.elements.namedItem("pincode") as HTMLInputElement).value,
      phone: (e.currentTarget.elements.namedItem("phone") as HTMLInputElement).value
    }

    console.log(formFieldData)
  }

  return (
    <section>
      <h2 className="cart-page-title">Add Delivery Address</h2>
      <div className="cart-page-outer">
        <div className="cart-page-set">
          <form className="cart-page-products address-form" onSubmit={addressDataHandler}>
            <div className="form-group">
              <label htmlFor="firstName">
                First Name
                <sup>*</sup>
              </label>
              <input defaultValue={((user?.firstName) != null) ? user.firstName : ''} type="text" id="firstName" name="firstName" className="sn-input" placeholder="Enter your first name" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">
                Last Name
                <sup>*</sup>
              </label>
              <input defaultValue={((user?.lastName) != null) ? user.lastName : ''} type="text" id="lastName" name="lastName" className="sn-input" placeholder="Enter your last name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email
                <sup>*</sup>
              </label>
              <input defaultValue={((user?.emailAddresses[0]?.emailAddress) != null) ? user.emailAddresses[0]?.emailAddress : ''} type="email" id="email" name="email" className="sn-input" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="country">
                Country
                <sup>*</sup>
              </label>
              <CountrySelect
                id="country"
                containerClassName="country-select-outer"
                inputClassName="sn-input country-select"
                onChange={(_country) => { setCountry(_country as string & Country) }}
                placeHolder="Select Country"
                defaultValue={country}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">
                State
                <sup>*</sup>
              </label>
              <StateSelect
                id="state"
                countryid={country?.id != null ? country.id : 101}
                containerClassName="country-select-outer"
                onChange={(_state) => {
                  if (typeof _state === "object" && _state !== null && "id" in _state) {
                    setCurrentState(_state)
                  }
                }}
                placeHolder="Select State"
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">
                City
                <sup>*</sup>
              </label>
              <CitySelect
                id="city"
                containerClassName="country-select-outer"
                countryid={country?.id != null ? country.id : 101}
                stateid={currentState?.id != null ? currentState.id : 101}
                onChange={(_city) => {
                  if (typeof _city === "object" && _city !== null && "id" in _city) {
                    setCurrentCity(_city)
                  }
                }}
                placeHolder="Select City"
              />
            </div>
            <div className="form-group">
              <label htmlFor="village">
                Village/Street
                <sup>*</sup>
              </label>
              <input type="text" id="village" name="village" className="sn-input" placeholder="Enter your village/street" required />
            </div>
            <div className="form-group">
              <label htmlFor="landmark">
                Nearby Landmark
                <sup>*</sup>
              </label>
              <input type="text" id="landmark" name="landmark" className="sn-input" placeholder="Enter a nearby landmark" required />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">
                Pincode
                <sup>*</sup>
              </label>
              <input type="text" id="pincode" name="pincode" className="sn-input" placeholder="Enter your pincode" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
                <sup>*</sup>
              </label>
              <div className="phone-input-outer">
                <PhonecodeSelect
                  id="phonecode"
                  containerClassName="country-select-outer phone-code-outer"
                  inputClassName="phone-code-select country-select"
                  defaultValue={country?.phone_code as string & Country}
                  readOnly
                />
                <input type="tel" autoComplete="tel" id="phone" name="phone" className="sn-input phone-input" placeholder="Enter your phone number" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-arrow-long align-center btn-submit">Add Address</button>
          </form>
        </div>
        <div className="cart-product-order">
          <CartInfo />
        </div>
      </div>
    </section>
  )
}
