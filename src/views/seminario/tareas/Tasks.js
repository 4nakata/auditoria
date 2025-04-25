import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CProgress,
  CBadge,
  CWidgetStatsF,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilPenAlt, cilZoom, cilPlus, cilPencil, cilTrash, cilUser, cilTask, cilChartLine, cilSpeedometer } from '@coreui/icons'
import TaskDetails from './TaskDetails'
import EditTask from './EditTask'
import AddTask from './AddTask'

const Tasks = () => {
  const [selectedTask, setSelectedTask] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [isAdding, setIsAdding] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Revisión de la Política de Seguridad',
      status: 'Completado',
      progress: 100,
      progressComment: '✅ Política documentada y comunicada correctamente',
      clause: 'A.5.1',
      description:
        'Verificar que la política está alineada con los objetivos del negocio, aprobada por la dirección y disponible para todos los empleados.',
    },
    {
      id: 2,
      name: 'Validación del Inventario de Activos',
      status: 'Progreso',
      progress: 75,
      clause: 'A.8.1',
      description:
        'Confirmar que el inventario incluye todos los activos críticos con sus respectivos propietarios y procesos de actualización.',
    },
    {
      id: 3,
      name: 'Auditoría de Controles de Acceso Físico',
      status: 'Pendiente',
      progress: 0,
      clause: 'A.7.1',
      description:
        'Evaluar mecanismos de control de acceso (biométricos, tarjetas) en áreas sensibles como salas de servidores.',
    },
    {
      id: 4,
      name: 'Pruebas de Recuperación de Backups',
      status: 'Progreso',
      progress: 50,
      clause: 'A.8.13',
      description:
        'Validar que los backups pueden restaurarse exitosamente mediante pruebas documentadas.',
    },
    {
      id: 5,
      name: 'Entrevistas sobre Concienciación en Seguridad',
      status: 'Completado',
      progress: 100,
      progressComment: '🎯 100% del personal entrevistado conoce las políticas básicas',
      clause: 'A.7.2',
      description:
        'Evaluar mediante entrevistas el conocimiento de los empleados sobre phishing, contraseñas y reporte de incidentes.',
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completado':
        return 'success'
      case 'Progreso':
        return 'warning'
      case 'Pendiente':
        return 'danger'
      default:
        return 'secondary'
    }
  }

  const handleViewTask = (task) => {
    setSelectedTask(task)
    setIsEditing(false)
    setIsAdding(false)
  }

  const handleEditTask = (task) => {
    setSelectedTask(task)
    setIsEditing(true)
    setIsAdding(false)
  }

  const handleAddTask = () => {
    setSelectedTask(null)
    setIsEditing(false)
    setIsAdding(true)
  }

  const handleBack = () => {
    setSelectedTask(null)
    setIsEditing(false)
    setIsAdding(false)
  }

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
    handleBack()
  }

  const handleAddNewTask = (newTask) => {
    const taskWithId = { ...newTask, id: tasks.length + 1 }
    setTasks([...tasks, taskWithId])
    handleBack()
  }

  const getStats = () => {
    const total = tasks.length
    const completadas = tasks.filter(t => t.status === 'Completado').length
    const enProceso = tasks.filter(t => t.status === 'Progreso').length
    const pendientes = tasks.filter(t => t.status === 'Pendiente').length
    const promedioProgreso = Math.round(tasks.reduce((sum, t) => sum + t.progress, 0) / total)

    return { total, completadas, enProceso, pendientes, promedioProgreso }
  }

  const stats = getStats()

  if (isEditing) {
    return <EditTask task={selectedTask} onBack={handleBack} onUpdateTask={handleUpdateTask} />
  }

  if (isAdding) {
    return <AddTask onBack={handleBack} onAddTask={handleAddNewTask} />
  }

  if (selectedTask) {
    return <TaskDetails task={selectedTask} onBack={handleBack} />
  }

  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilTask} height={24} />}
            title="Total Tareas"
            value={stats.total}
            color="primary"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilUser} height={24} />}
            title="Completadas"
            value={stats.completadas}
            color="success"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilChartLine} height={24} />}
            title="En Proceso"
            value={stats.enProceso}
            color="warning"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilSpeedometer} height={24} />}
            title="Pendientes"
            value={stats.pendientes}
            color="info"
          />
        </CCol>
      </CRow>

      <CCard className="mb-4">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Tareas</h5>
          <CButton color="primary" onClick={handleAddTask}>
            <CIcon icon={cilPlus} className="me-2" />
            Nueva Tarea
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Título</CTableHeaderCell>
                <CTableHeaderCell>Estado</CTableHeaderCell>
                <CTableHeaderCell>Progreso</CTableHeaderCell>
                <CTableHeaderCell>Acciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {tasks.map((task) => (
                <CTableRow key={task.id}>
                  <CTableDataCell>{task.name}</CTableDataCell>
                  <CTableDataCell>{task.status}</CTableDataCell>
                  <CTableDataCell>
                    <CProgress
                      value={task.progress}
                      height={30}
                      animated
                      variant={task.status !== 'Completado' ? 'striped' : ''}
                      color={task.status === 'Completado' ? 'success' : 'warning'}
                    >
                      {task.progress}%
                    </CProgress>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-2">
                      <CButton
                        color="primary"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditTask(task)}
                      >
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton
                        color="info"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewTask(task)}
                      >
                        <CIcon icon={cilZoom} />
                      </CButton>
                    </div>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Tasks 