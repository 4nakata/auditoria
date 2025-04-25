import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  CNavItem,
  CNavLink,
  CNavTitle
} from '@coreui/react'

const AppSidebarNav = ({ items }) => {
  const navLink = (name, icon, to) => {
    return (
      <CNavItem>
        <CNavLink to={to} component={NavLink}>
          {icon}
          {name}
        </CNavLink>
      </CNavItem>
    )
  }

  const navTitle = (name) => {
    return <CNavTitle>{name}</CNavTitle>
  }

  return (
    <>
      {items.map((item, index) => {
        const Component = item.component === 'CNavTitle' ? CNavTitle : CNavItem
        return (
          <React.Fragment key={index}>
            {item.title ? (
              <CNavTitle>{item.name}</CNavTitle>
            ) : (
              <CNavItem>
                <CNavLink to={item.to} component={NavLink}>
                  {item.icon}
                  {item.name}
                </CNavLink>
              </CNavItem>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}

export default AppSidebarNav 