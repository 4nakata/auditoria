import React from 'react'
import { CHeader, CContainer, CHeaderBrand, CHeaderToggler } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebarShow } from '../store/slices/uiSlice'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.ui.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch(setSidebarShow(!sidebarShow))}
        >
          <span className="navbar-toggler-icon"></span>
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          Auditoría
        </CHeaderBrand>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader 