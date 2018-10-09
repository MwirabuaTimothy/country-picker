import React from 'react'
import PropTypes from 'prop-types'

import CountryListItem from '../components/CountryListItem'

const CountryListPage = ({ countries, selectedCountry, selectCountry, searchFieldInput, changeSearchFieldInput }) => (
  <div>
    <div className='input-group'>
      <span className='input-group-btn'>
        <button className='btn btn-default' type='button'>{countries.length} Countries</button>
      </span>
      <input
        type='text'
        className='form-control'
        value={searchFieldInput}
        placeholder='Search...'
        onChange={e => changeSearchFieldInput(e.target.value)}
      />
    </div>
    { countries.length > 0
      ? <div className='list-group list-scrollable'>
        {countries.map(country => (
          <CountryListItem
            key={country.name}
            title={country.name}
            subTitle={country.region}
            active={selectedCountry === country.name}
            handleOnClick={() => selectCountry(country.name)}
          />
        )
        )}
      </div>
      : <div>No Countries match the search :(</div>
    }
  </div>
)

CountryListPage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired
  })).isRequired,
  selectedCountry: PropTypes.string.isRequired,
  selectCountry: PropTypes.func.isRequired,
  searchFieldInput: PropTypes.string.isRequired,
  changeSearchFieldInput: PropTypes.func.isRequired
}

export default CountryListPage
