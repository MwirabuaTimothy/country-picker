import React from 'react'
import { connect } from 'react-redux'

// components / utils
import CountryDetailPage from '../pages/CountryDetailPage'
import { countryPropType } from '../utils/customPropTypes'

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

CountryDetailContainer.propTypes = {
  selectedCountry: countryPropType.isRequired
}

const mapStateToProps = state => ({
  selectedCountry: state.countriesReducer.countriesDetails[state.countriesReducer.selectedCountry]
})

export default connect(mapStateToProps, null)(CountryDetailContainer)
