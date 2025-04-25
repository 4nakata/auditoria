import React from 'react'
import { CSpinner } from '@coreui/react'

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <CSpinner color="primary" />
    </div>
  )
}

export default Loader 