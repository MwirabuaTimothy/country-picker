import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// components / actions
import MasterViewPage from '../pages/MasterViewPage'
import * as actions from '../actions'

const MasterViewContainer = ({ countries, selectedCountry, actions }) => (
  <div>
    { countries.length > 0
      ? <MasterViewPage
        countries={countries}
        selectedCountry={selectedCountry}
        selectCountry={actions.selectCountry}
        setActiveCountryListItem={actions.setActiveCountryListItem}
      />
      : <div>Loading Countries...</div>
    }
  </div>
)

MasterViewContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCountry: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  // only use reducers and the data you need per container
  countries: state.countriesReducer.countries,
  selectedCountry: state.countriesReducer.selectedCountry
})

const mapDispatchToProps = dispatch => ({
  // pass down actions as functions. child components should not do redux
  actions: bindActionCreators(Object.assign({}, actions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(MasterViewContainer)
