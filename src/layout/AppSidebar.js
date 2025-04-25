import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebarShow } from '../store/slices/uiSlice'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { AppSidebarNav } from '../components/AppSidebarNav'
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const visible = useSelector((state) => state.ui.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={false}
      visible={visible}
      onVisibleChange={(visible) => dispatch(setSidebarShow(visible))}
      className="border-end"
    >
      <CSidebarBrand className="d-none d-md-flex py-3">
        <h4 className="mb-0">Auditoría</h4>
      </CSidebarBrand>
      <CSidebarNav>
        <AppSidebarNav items={navigation} />
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(setSidebarShow(!visible))}
      />
    </CSidebar>
  )
}

export default AppSidebar 