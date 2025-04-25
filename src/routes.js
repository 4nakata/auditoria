import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Toasts
import { Toaster } from 'react-hot-toast'

// Custom Components
import AppLayout from './layout/AppLayout'
import Loader from './components/Loader'

// Pages
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Auditorias = React.lazy(() => import('./views/auditorias/Auditorias'))
const Auditores = React.lazy(() => import('./views/auditores/Auditores'))
const Tasks = React.lazy(() => import('./views/seminario/tareas/Tasks'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auditorias" element={<Auditorias />} />
          <Route path="/auditores" element={<Auditores />} />
          <Route path="/tareas" element={<Tasks />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
