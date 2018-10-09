import React from 'react'
import LoadImage from './LoadImage'
import { countryPropType } from '../utils/customPropTypes'

class CountryCard extends React.Component {
  render () {
    const { name, region, flag, languages, capital, currencies, population } = this.props
    return (
      <div className='thumbnail row card-background'>
        <h2 className='text-center'>{name}</h2>
        <LoadImage flag={flag} />
        <div className='caption'>
          <p className='text-center'>
            Region: {region} -- Population: {population} -- Capital: {capital}
          </p>
          <hr />
          <div className='col-xs-6'>
            <p className='text-center'>Languages</p>
            {languages.map(language => (
              <div key={language.name}>
                {language.name}
              </div>
            ))}
          </div>
          <div className='col-xs-6 left-border'>
            <p className='text-center'>Currencies</p>
            {currencies.map((currency, i) => (
              <div key={currency.name}>
                code: {currency.code} <br />
                name: {currency.name} <br />
                symbol: {currency.symbol}
                {i !== currencies.length - 1 && <hr />}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

CountryCard.propType = countryPropType

export default CountryCard
