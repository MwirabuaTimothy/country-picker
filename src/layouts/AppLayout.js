import React from 'react'

// components
import MasterViewContainer from '../containers/MasterViewContainer'
// import DetailViewContainer from '../containers/DetailViewContainer'

const AppLayout = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-xs-6'>
        <MasterViewContainer />
      </div>
      <div className='col-xs-6'>
        {/* <DetailViewContainer /> */}
      </div>
    </div>
  </div>
)

export default AppLayout
