import React from 'react'

// components / utils
import CountryCard from '../components/CountryCard'
import { countryPropType } from '../utils/customPropTypes'

const CountryDetailPage = ({ selectedCountry }) => (
  <CountryCard
    name={selectedCountry.name}
    region={selectedCountry.region}
    flag={selectedCountry.flag}
    languages={selectedCountry.languages}
    capital={selectedCountry.capital}
    currencies={selectedCountry.currencies}
    population={selectedCountry.population}
  />
)

CountryDetailPage.propTypes = {
  selectedCountry: countryPropType.isRequired
}

export default CountryDetailPage
