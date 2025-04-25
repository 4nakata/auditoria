import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
  CBadge,
  CForm,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CWidgetStatsF,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilTrash, cilPlus, cilArrowLeft, cilPeople, cilList, cilChartLine, cilTask, cilSpeedometer, cilCalendar, cilZoom } from '@coreui/icons'
import AuditDetails from './AuditDetails'

const Auditorias = () => {
  const [view, setView] = useState('list') // 'list' or 'edit' or 'detail'
  const [selectedAuditoria, setSelectedAuditoria] = useState(null)
  const [activeTab, setActiveTab] = useState(1)
  
  const [auditorias, setAuditorias] = useState([
    {
      id: 1,
      nombre: 'Auditoría Financiera 2024',
      tipo: 'Financiera',
      estado: 'En Proceso',
      fechaInicio: '2024-01-01',
      fechaFin: '2024-12-31',
      auditores: [
        { id: 1, nombre: 'Juan Pérez', rol: 'Líder' },
        { id: 2, nombre: 'María García', rol: 'Auditor' },
      ],
      tareas: [
        { id: 1, titulo: 'Revisión de Estados Financieros', estado: 'Completada', progreso: 100 },
        { id: 2, titulo: 'Análisis de Riesgos', estado: 'En Proceso', progreso: 60 },
      ],
    },
    {
      id: 2,
      nombre: 'Auditoría Operacional Q1',
      tipo: 'Operacional',
      estado: 'Planificada',
      fechaInicio: '2024-04-01',
      fechaFin: '2024-06-30',
      auditores: [
        { id: 3, nombre: 'Carlos López', rol: 'Líder' },
      ],
      tareas: [
        { id: 3, titulo: 'Evaluación de Procesos', estado: 'Pendiente', progreso: 0 },
      ],
    },
    {
      id: 3,
      nombre: 'Auditoría de Sistemas TI',
      tipo: 'Sistemas',
      estado: 'Completada',
      fechaInicio: '2024-02-01',
      fechaFin: '2024-03-15',
      auditores: [
        { id: 4, nombre: 'Ana Martínez', rol: 'Líder' },
        { id: 5, nombre: 'Pedro Sánchez', rol: 'Auditor' },
        { id: 6, nombre: 'Laura Torres', rol: 'Auditor' },
      ],
      tareas: [
        { id: 4, titulo: 'Evaluación de Seguridad', estado: 'Completada', progreso: 100 },
        { id: 5, titulo: 'Revisión de Infraestructura', estado: 'Completada', progreso: 100 },
      ],
    },
    {
      id: 4,
      nombre: 'Auditoría de Cumplimiento Legal',
      tipo: 'Cumplimiento',
      estado: 'En Proceso',
      fechaInicio: '2024-03-01',
      fechaFin: '2024-05-30',
      auditores: [
        { id: 7, nombre: 'Roberto Gómez', rol: 'Líder' },
        { id: 8, nombre: 'Carmen Ruiz', rol: 'Auditor' },
      ],
      tareas: [
        { id: 6, titulo: 'Revisión de Normativas', estado: 'En Proceso', progreso: 75 },
        { id: 7, titulo: 'Verificación de Documentación', estado: 'En Proceso', progreso: 40 },
      ],
    },
    {
      id: 5,
      nombre: 'Auditoría Financiera Q2',
      tipo: 'Financiera',
      estado: 'Planificada',
      fechaInicio: '2024-07-01',
      fechaFin: '2024-09-30',
      auditores: [
        { id: 9, nombre: 'Diego Herrera', rol: 'Líder' },
      ],
      tareas: [
        { id: 8, titulo: 'Planificación de Alcance', estado: 'Pendiente', progreso: 0 },
      ],
    },
  ])

  const [formData, setFormData] = useState({
    nombre: '',
    tipo: 'Financiera',
    estado: 'Planificada',
    fechaInicio: '',
    fechaFin: '',
    auditores: [],
    tareas: [],
  })

  const handleDelete = (id) => {
    setAuditorias(auditorias.filter((auditoria) => auditoria.id !== id))
  }

  const handleEdit = (auditoria) => {
    setSelectedAuditoria(auditoria)
    setFormData({
      nombre: auditoria.nombre,
      tipo: auditoria.tipo,
      estado: auditoria.estado,
      fechaInicio: auditoria.fechaInicio,
      fechaFin: auditoria.fechaFin,
      auditores: [...auditoria.auditores],
      tareas: [...auditoria.tareas],
    })
    setView('edit')
  }

  const handleView = (auditoria) => {
    setSelectedAuditoria(auditoria)
    setView('detail')
  }

  const handleAdd = () => {
    setSelectedAuditoria(null)
    setFormData({
      nombre: '',
      tipo: 'Financiera',
      estado: 'Planificada',
      fechaInicio: '',
      fechaFin: '',
      auditores: [],
      tareas: [],
    })
    setView('edit')
  }

  const handleBack = () => {
    setView('list')
    setSelectedAuditoria(null)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedAuditoria) {
      // Editar auditoría existente
      setAuditorias(
        auditorias.map((auditoria) =>
          auditoria.id === selectedAuditoria.id ? { ...auditoria, ...formData } : auditoria,
        ),
      )
    } else {
      // Agregar nueva auditoría
      const newAuditoria = {
        ...formData,
        id: Math.max(...auditorias.map((a) => a.id)) + 1,
      }
      setAuditorias([...auditorias, newAuditoria])
    }
    setView('list')
  }

  const handleDeleteAuditor = (auditorId) => {
    setFormData({
      ...formData,
      auditores: formData.auditores.filter((auditor) => auditor.id !== auditorId),
    })
  }

  const handleDeleteTarea = (tareaId) => {
    setFormData({
      ...formData,
      tareas: formData.tareas.filter((tarea) => tarea.id !== tareaId),
    })
  }

  const getEstadoColor = (estado) => {
    switch (estado.toLowerCase()) {
      case 'completada':
        return 'success'
      case 'en proceso':
        return 'primary'
      case 'planificada':
        return 'info'
      case 'pendiente':
        return 'warning'
      default:
        return 'secondary'
    }
  }

  const getStats = () => {
    const total = auditorias.length
    const completadas = auditorias.filter(a => a.estado.toLowerCase() === 'completada').length
    const enProceso = auditorias.filter(a => a.estado.toLowerCase() === 'en proceso').length
    const planificadas = auditorias.filter(a => a.estado.toLowerCase() === 'planificada').length

    return { total, completadas, enProceso, planificadas }
  }

  const stats = getStats()

  if (view === 'detail' && selectedAuditoria) {
    return <AuditDetails auditoria={selectedAuditoria} onBack={handleBack} />
  }

  if (view === 'edit') {
    return (
      <CCard className="mb-4">
        <CCardHeader>
          <CButton color="link" className="text-decoration-none" onClick={handleBack}>
            <CIcon icon={cilArrowLeft} className="me-2" />
            Volver
          </CButton>
          <h5 className="mb-0">{selectedAuditoria ? 'Editar Auditoría' : 'Nueva Auditoría'}</h5>
        </CCardHeader>
        <CCardBody>
          <CForm onSubmit={handleSubmit}>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  label="Nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={3}>
                <CFormSelect
                  label="Tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                >
                  <option value="Financiera">Financiera</option>
                  <option value="Operacional">Operacional</option>
                  <option value="Sistemas">Sistemas</option>
                  <option value="Cumplimiento">Cumplimiento</option>
                </CFormSelect>
              </CCol>
              <CCol md={3}>
                <CFormSelect
                  label="Estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                >
                  <option value="Planificada">Planificada</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Completada">Completada</option>
                </CFormSelect>
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CCol md={6}>
                <CFormInput
                  type="date"
                  label="Fecha de Inicio"
                  name="fechaInicio"
                  value={formData.fechaInicio}
                  onChange={handleChange}
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="date"
                  label="Fecha de Fin"
                  name="fechaFin"
                  value={formData.fechaFin}
                  onChange={handleChange}
                  required
                />
              </CCol>
            </CRow>
            <div className="d-flex justify-content-end gap-2">
              <CButton color="secondary" onClick={handleBack}>
                Cancelar
              </CButton>
              <CButton color="primary" type="submit">
                {selectedAuditoria ? 'Guardar Cambios' : 'Crear Auditoría'}
              </CButton>
            </div>
          </CForm>
        </CCardBody>
      </CCard>
    )
  }

  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilSpeedometer} height={24} />}
            title="Total Auditorías"
            value={stats.total}
            color="primary"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilTask} height={24} />}
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
            icon={<CIcon icon={cilCalendar} height={24} />}
            title="Planificadas"
            value={stats.planificadas}
            color="info"
          />
        </CCol>
      </CRow>

      <CCard className="mb-4">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Auditorías</h5>
          <CButton color="primary" onClick={handleAdd}>
            <CIcon icon={cilPlus} className="me-2" />
            Nueva Auditoría
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
                <CTableHeaderCell>Tipo</CTableHeaderCell>
                <CTableHeaderCell>Estado</CTableHeaderCell>
                <CTableHeaderCell>Fecha Inicio</CTableHeaderCell>
                <CTableHeaderCell>Fecha Fin</CTableHeaderCell>
                <CTableHeaderCell>Auditores</CTableHeaderCell>
                <CTableHeaderCell>Acciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {auditorias.map((auditoria) => (
                <CTableRow key={auditoria.id}>
                  <CTableDataCell>{auditoria.nombre}</CTableDataCell>
                  <CTableDataCell>{auditoria.tipo}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={getEstadoColor(auditoria.estado)}>
                      {auditoria.estado}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>{auditoria.fechaInicio}</CTableDataCell>
                  <CTableDataCell>{auditoria.fechaFin}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="dark">{auditoria.auditores.length}</CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-2">
                      <CButton
                        color="primary"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(auditoria)}
                      >
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton
                        color="info"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(auditoria)}
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

export default Auditorias 