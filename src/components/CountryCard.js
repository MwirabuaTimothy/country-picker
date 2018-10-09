import React from 'react'
import PropTypes from 'prop-types'

class CountryCard extends React.Component {
  render () {
    const { name, region } = this.props
    return (
      <div className='thumbnail row card-background'>
        <h2 className='text-center'>{name}</h2>
        <div className='caption'>
          <p className='text-center'>
            Region: {region}
          </p>
        </div>
      </div>
    )
  }
}

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired
}

export default CountryCard
