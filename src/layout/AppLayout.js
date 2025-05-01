import React from 'react'
import { Outlet } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'
import AppFooter from '../components/AppFooter'

const AppLayout = () => {
  return (
    <div className="app-container">
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <CContainer lg className="h-auto">
            <Outlet />
          </CContainer>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default AppLayout 