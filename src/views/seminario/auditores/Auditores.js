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
  CWidgetStatsF,
  CListGroup,
  CListGroupItem,
  CProgress,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPencil, cilPlus, cilArrowLeft, cilUser, cilTask, cilChartLine, cilSpeedometer, cilZoom } from '@coreui/icons'
import EditAuditor from './EditAuditor'

const AuditorDetails = ({ auditor, onBack }) => {
  const getEstadoColor = (estado) => {
    return estado === 'Activo' ? 'success' : 'warning'
  }

  return (
    <CCard className="mb-4">
      <CCardHeader>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <CButton color="link" className="text-decoration-none p-0 me-3" onClick={onBack}>
              <CIcon icon={cilArrowLeft} className="me-2" />
              Volver
            </CButton>
            <h5 className="mb-0">{auditor.nombre}</h5>
          </div>
          <CBadge color={getEstadoColor(auditor.estado)}>{auditor.estado}</CBadge>
        </div>
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol md={6}>
            <h6>Información Personal</h6>
            <CListGroup flush>
              <CListGroupItem>
                <div className="d-flex justify-content-between">
                  <strong>Email:</strong>
                  <span>{auditor.email}</span>
                </div>
              </CListGroupItem>
              <CListGroupItem>
                <div className="d-flex justify-content-between">
                  <strong>Estado:</strong>
                  <CBadge color={getEstadoColor(auditor.estado)}>{auditor.estado}</CBadge>
                </div>
              </CListGroupItem>
            </CListGroup>
          </CCol>
          <CCol md={6}>
            <h6>Estadísticas</h6>
            <CListGroup flush>
              <CListGroupItem>
                <div className="d-flex justify-content-between">
                  <strong>Tareas Asignadas:</strong>
                  <CBadge color="primary">{auditor.tareasAsignadas}</CBadge>
                </div>
              </CListGroupItem>
              <CListGroupItem>
                <div className="d-flex justify-content-between">
                  <strong>Auditorías Completadas:</strong>
                  <CBadge color="success">{auditor.auditoriasCompletadas}</CBadge>
                </div>
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>

        <CRow className="mt-4">
          <CCol>
            <h6>Tipos de Auditoría</h6>
            <div className="d-flex flex-wrap gap-2">
              {auditor.tiposAuditoria.map((tipo, index) => (
                <CBadge key={index} color="info">
                  {tipo}
                </CBadge>
              ))}
            </div>
          </CCol>
        </CRow>

        <CRow className="mt-4">
          <CCol>
            <h6>Rendimiento</h6>
            <CListGroup flush>
              <CListGroupItem>
                <div className="d-flex justify-content-between align-items-center">
                  <strong>Eficiencia:</strong>
                  <CProgress
                    value={(auditor.auditoriasCompletadas / (auditor.auditoriasCompletadas + auditor.tareasAsignadas)) * 100}
                    className="w-50"
                  >
                    {Math.round((auditor.auditoriasCompletadas / (auditor.auditoriasCompletadas + auditor.tareasAsignadas)) * 100)}%
                  </CProgress>
                </div>
              </CListGroupItem>
            </CListGroup>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

const Auditores = () => {
  const [view, setView] = useState('list') // 'list' or 'edit' or 'detail'
  const [selectedAuditor, setSelectedAuditor] = useState(null)
  
  const [auditores, setAuditores] = useState([
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan.perez@example.com',
      estado: 'Activo',
      tiposAuditoria: ['Financiera', 'Operacional'],
      tareasAsignadas: 5,
      auditoriasCompletadas: 12,
    },
    {
      id: 2,
      nombre: 'María García',
      email: 'maria.garcia@example.com',
      estado: 'Activo',
      tiposAuditoria: ['Sistemas', 'Cumplimiento'],
      tareasAsignadas: 3,
      auditoriasCompletadas: 8,
    },
    {
      id: 3,
      nombre: 'Carlos López',
      email: 'carlos.lopez@example.com',
      estado: 'Inactivo',
      tiposAuditoria: ['Financiera'],
      tareasAsignadas: 0,
      auditoriasCompletadas: 15,
    },
    {
      id: 4,
      nombre: 'Ana Martínez',
      email: 'ana.martinez@example.com',
      estado: 'Activo',
      tiposAuditoria: ['Operacional', 'Sistemas'],
      tareasAsignadas: 4,
      auditoriasCompletadas: 10,
    },
    {
      id: 5,
      nombre: 'Pedro Sánchez',
      email: 'pedro.sanchez@example.com',
      estado: 'Activo',
      tiposAuditoria: ['Cumplimiento', 'Financiera'],
      tareasAsignadas: 2,
      auditoriasCompletadas: 7,
    },
  ])

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    estado: 'Activo',
    tiposAuditoria: [],
  })

  const handleEdit = (auditor) => {
    setSelectedAuditor(auditor)
    setFormData({
      nombre: auditor.nombre,
      email: auditor.email,
      estado: auditor.estado,
      tiposAuditoria: [...auditor.tiposAuditoria],
    })
    setView('edit')
  }

  const handleAdd = () => {
    setSelectedAuditor(null)
    setFormData({
      nombre: '',
      email: '',
      estado: 'Activo',
      tiposAuditoria: [],
    })
    setView('edit')
  }

  const handleBack = () => {
    setView('list')
    setSelectedAuditor(null)
  }

  const handleView = (auditor) => {
    setSelectedAuditor(auditor)
    setView('detail')
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      const tiposAuditoria = [...formData.tiposAuditoria]
      if (checked) {
        tiposAuditoria.push(value)
      } else {
        const index = tiposAuditoria.indexOf(value)
        if (index > -1) {
          tiposAuditoria.splice(index, 1)
        }
      }
      setFormData({
        ...formData,
        tiposAuditoria,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedAuditor) {
      setAuditores(
        auditores.map((auditor) =>
          auditor.id === selectedAuditor.id ? { ...auditor, ...formData } : auditor,
        ),
      )
    } else {
      const newAuditor = {
        ...formData,
        id: Math.max(...auditores.map((a) => a.id)) + 1,
        tareasAsignadas: 0,
        auditoriasCompletadas: 0,
      }
      setAuditores([...auditores, newAuditor])
    }
    setView('list')
  }

  const getStats = () => {
    const total = auditores.length
    const activos = auditores.filter(a => a.estado === 'Activo').length
    const inactivos = auditores.filter(a => a.estado === 'Inactivo').length
    const tareasPendientes = auditores.reduce((sum, a) => sum + a.tareasAsignadas, 0)

    return { total, activos, inactivos, tareasPendientes }
  }

  const stats = getStats()

  if (view === 'detail' && selectedAuditor) {
    return <AuditorDetails auditor={selectedAuditor} onBack={handleBack} />
  }

  if (view === 'edit') {
    return <EditAuditor auditor={selectedAuditor} formData={formData} onChange={handleChange} onSubmit={handleSubmit} onBack={handleBack} />
  }

  return (
    <>
      <CRow>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilUser} height={24} />}
            title="Total Auditores"
            value={stats.total}
            color="primary"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilTask} height={24} />}
            title="Activos"
            value={stats.activos}
            color="success"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilChartLine} height={24} />}
            title="Inactivos"
            value={stats.inactivos}
            color="warning"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilSpeedometer} height={24} />}
            title="Tareas Pendientes"
            value={stats.tareasPendientes}
            color="info"
          />
        </CCol>
      </CRow>

      <CCard className="mb-4">
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Auditores</h5>
          <CButton color="primary" onClick={handleAdd}>
            <CIcon icon={cilPlus} className="me-2" />
            Nuevo Auditor
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CTable hover responsive>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Nombre</CTableHeaderCell>
                <CTableHeaderCell>Email</CTableHeaderCell>
                <CTableHeaderCell>Estado</CTableHeaderCell>
                <CTableHeaderCell>Tipos de Auditoría</CTableHeaderCell>
                <CTableHeaderCell>Tareas Asignadas</CTableHeaderCell>
                <CTableHeaderCell>Auditorías Completadas</CTableHeaderCell>
                <CTableHeaderCell>Acciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {auditores.map((auditor) => (
                <CTableRow key={auditor.id}>
                  <CTableDataCell>{auditor.nombre}</CTableDataCell>
                  <CTableDataCell>{auditor.email}</CTableDataCell>
                  <CTableDataCell>
                    <CBadge color={auditor.estado === 'Activo' ? 'success' : 'warning'}>
                      {auditor.estado}
                    </CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    {auditor.tiposAuditoria.map((tipo, index) => (
                      <CBadge key={index} color="info" className="me-1">
                        {tipo}
                      </CBadge>
                    ))}
                  </CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="primary">{auditor.tareasAsignadas}</CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CBadge color="success">{auditor.auditoriasCompletadas}</CBadge>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="d-flex gap-2">
                      <CButton
                        color="primary"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(auditor)}
                      >
                        <CIcon icon={cilPencil} />
                      </CButton>
                      <CButton
                        color="info"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleView(auditor)}
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

export default Auditores 