import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://auditoflows.com" target="_blank" rel="noopener noreferrer">
          Auditoflows
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
