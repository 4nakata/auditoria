import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; {new Date().getFullYear()} Auditoría.</span>
      </div>
    </CFooter>
  )
}

export default AppFooter 