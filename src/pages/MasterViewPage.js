import React from 'react'
import PropTypes from 'prop-types'

import ListViewItem from '../components/ListViewItem'

const CountryMasterPage = ({ countries, selectedCountry, selectCountry, setActiveCountryListItem }) => (
  <div>
    <div className='list-group list-scrollable'>
      {countries.map(country => (
        <ListViewItem
          key={country.name}
          title={country.name}
          subTitle={country.region}
          active={selectedCountry === country.name}
          handleOnClick={() => {
            selectCountry(country.name)
            setActiveCountryListItem(country.name)
          }}
        />
      )
      )}
    </div>
  </div>
)

CountryMasterPage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCountry: PropTypes.string.isRequired,
  selectCountry: PropTypes.func.isRequired,
  setActiveCountryListItem: PropTypes.func.isRequired
}

export default CountryMasterPage
