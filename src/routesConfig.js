import React from 'react'
import { lazy } from 'react'

// Pages
const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))
const Auditores = lazy(() => import('./views/auditores/Auditores'))
const Tasks = lazy(() => import('./views/seminario/tareas/Tasks'))
const Configuracion = lazy(() => import('./views/configuracion/Configuracion'))

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
    path: '/configuracion',
    name: 'Configuración',
    element: Configuracion,
    exact: true,
  },
]

export default routes 