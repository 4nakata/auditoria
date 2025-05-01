import React from 'react'
import { lazy } from 'react'

// Pages
const Dashboard = lazy(() => import('./views/seminario/dashboard/Dashboard'))
const Auditores = lazy(() => import('./views/seminario/auditores/Auditores'))
const Tasks = lazy(() => import('./views/seminario/tareas/Tasks'))
const Auditorias = lazy(() => import('./views/seminario/auditorias/Auditorias'))

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: Dashboard,
    exact: true,
  },
  {
    path: '/auditores',
    name: 'Auditores',
    element: Auditores,
    exact: true,
  },
  {
    path: '/tareas',
    name: 'Tareas',
    element: Tasks,
    exact: true,
  },
  {
    path: '/auditorias',
    name: 'Auditorías',
    element: Auditorias,
    exact: true,
  },
]

export default routes 