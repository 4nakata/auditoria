import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setSidebarShow } from '../store/slices/uiSlice'
import { CSidebar, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.ui.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={false}
      visible={sidebarShow}
      className="border-end"
    >
      <CSidebarNav>
        <AppSidebarNav items={navigation} />
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(setSidebarShow(!sidebarShow))}
      />
    </CSidebar>
  )
}

export default AppSidebar
