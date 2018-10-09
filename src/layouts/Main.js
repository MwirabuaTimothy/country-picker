import React from 'react'

// components
import CountryListContainer from '../containers/CountryListContainer'
import CountryDetailContainer from '../containers/CountryDetailContainer'

const Main = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-xs-6'>
        <CountryListContainer />
      </div>
      <div className='col-xs-6'>
        <CountryDetailContainer />
      </div>
    </div>
  </div>
)

export default Main
