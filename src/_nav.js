import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilList,
  cilHome,
  cilPeople,
  cilClipboard,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Gestión de Auditorías',
  },
  {
    component: CNavItem,
    name: 'Auditorías',
    to: '/auditorias',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Auditores',
    to: '/auditores',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tareas',
    to: '/tareas',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
]

export default _nav
