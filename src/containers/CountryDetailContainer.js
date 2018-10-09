import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// components / utils
import CountryDetailPage from '../pages/CountryDetailPage'

class CountryDetailContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className='card'>
        {
          !this.props.selectedCountry
            ? <div>Select a country to get more information!</div>
            : <CountryDetailPage selectedCountry={this.props.selectedCountry} />
        }
      </div>
    )
  }
}
const countryPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
})

CountryDetailContainer.propTypes = {
  selectedCountry: PropTypes.oneOfType([
    countryPropType,
    PropTypes.object
  ]).isRequired
}

const mapStateToProps = state => ({
  selectedCountry: state.countriesReducer.countriesDetails[state.countriesReducer.selectedCountry]
})

export default connect(mapStateToProps, null)(CountryDetailContainer)
