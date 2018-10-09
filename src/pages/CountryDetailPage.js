import React from 'react'

// components / utils
import CountryCard from '../components/CountryCard'
import { PropTypes } from 'prop-types'

const CountryDetailPage = ({ selectedCountry }) => (
  <CountryCard
    name={selectedCountry.name}
    region={selectedCountry.region}
    image={selectedCountry.image}
    languages={selectedCountry.languages}
    capital={selectedCountry.capital}
    currencies={selectedCountry.currencies}
    population={selectedCountry.population}
  />
)

const countryPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
})
CountryDetailPage.propTypes = {
  selectedCountry: countryPropType.isRequired
}

export default CountryDetailPage
