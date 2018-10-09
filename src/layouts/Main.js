import React from 'react'

// components
import CountryListContainer from '../containers/CountryListContainer'
import CountryDetailContainer from '../containers/CountryDetailContainer'

const Main = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-4'>
        <CountryListContainer />
      </div>
      <div className='col-8'>
        <CountryDetailContainer />
      </div>
    </div>
  </div>
)

export default Main
