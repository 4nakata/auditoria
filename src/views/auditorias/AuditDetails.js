import React from 'react'
import PropTypes from 'prop-types'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CBadge,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CProgress,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilArrowLeft,
  cilUser,
  cilTask,
  cilCalendar,
  cilChart,
  cilNotes,
} from '@coreui/icons'

const AuditDetails = ({ auditoria, onBack }) => {
  const [activeTab, setActiveTab] = React.useState(1)

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

  const calcularProgreso = () => {
    if (!auditoria.tareas || auditoria.tareas.length === 0) return 0
    const total = auditoria.tareas.length
    const completadas = auditoria.tareas.filter(t => t.estado.toLowerCase() === 'completada').length
    return Math.round((completadas / total) * 100)
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
            <h5 className="mb-0">{auditoria.nombre}</h5>
          </div>
          <CBadge color={getEstadoColor(auditoria.estado)}>{auditoria.estado}</CBadge>
        </div>
      </CCardHeader>
      <CCardBody>
        <CNav variant="tabs" role="tablist">
          <CNavItem>
            <CNavLink
              active={activeTab === 1}
              onClick={() => setActiveTab(1)}
            >
              <CIcon icon={cilNotes} className="me-2" />
              Resumen
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === 2}
              onClick={() => setActiveTab(2)}
            >
              <CIcon icon={cilUser} className="me-2" />
              Auditores
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
              active={activeTab === 3}
              onClick={() => setActiveTab(3)}
            >
              <CIcon icon={cilTask} className="me-2" />
              Tareas
            </CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent className="mt-4">
          <CTabPane role="tabpanel" visible={activeTab === 1}>
            <CRow>
              <CCol md={6}>
                <h6>Información General</h6>
                <CListGroup flush>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Tipo:</strong>
                      <span>{auditoria.tipo}</span>
                    </div>
                  </CListGroupItem>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Fecha Inicio:</strong>
                      <span>{auditoria.fechaInicio}</span>
                    </div>
                  </CListGroupItem>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Fecha Fin:</strong>
                      <span>{auditoria.fechaFin}</span>
                    </div>
                  </CListGroupItem>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Progreso Total:</strong>
                      <div className="w-50">
                        <CProgress value={calcularProgreso()} className="mb-1">
                          {calcularProgreso()}%
                        </CProgress>
                      </div>
                    </div>
                  </CListGroupItem>
                </CListGroup>
              </CCol>
              <CCol md={6}>
                <h6>Estadísticas</h6>
                <CListGroup flush>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Total Auditores:</strong>
                      <CBadge color="primary">{auditoria.auditores?.length || 0}</CBadge>
                    </div>
                  </CListGroupItem>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Total Tareas:</strong>
                      <CBadge color="info">{auditoria.tareas?.length || 0}</CBadge>
                    </div>
                  </CListGroupItem>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Tareas Completadas:</strong>
                      <CBadge color="success">
                        {auditoria.tareas?.filter(t => t.estado.toLowerCase() === 'completada').length || 0}
                      </CBadge>
                    </div>
                  </CListGroupItem>
                  <CListGroupItem>
                    <div className="d-flex justify-content-between">
                      <strong>Tareas Pendientes:</strong>
                      <CBadge color="warning">
                        {auditoria.tareas?.filter(t => t.estado.toLowerCase() !== 'completada').length || 0}
                      </CBadge>
                    </div>
                  </CListGroupItem>
                </CListGroup>
              </CCol>
            </CRow>
          </CTabPane>
          <CTabPane role="tabpanel" visible={activeTab === 2}>
            <CListGroup>
              {auditoria.auditores?.map((auditor) => (
                <CListGroupItem key={auditor.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">{auditor.nombre}</h6>
                    <small className="text-medium-emphasis">{auditor.rol}</small>
                  </div>
                  <CBadge color="primary">{auditor.rol}</CBadge>
                </CListGroupItem>
              ))}
            </CListGroup>
          </CTabPane>
          <CTabPane role="tabpanel" visible={activeTab === 3}>
            <CListGroup>
              {auditoria.tareas?.map((tarea) => (
                <CListGroupItem key={tarea.id} className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-0">{tarea.titulo}</h6>
                    <CProgress value={tarea.progreso} className="mt-2" style={{ width: '200px' }}>
                      {tarea.progreso}%
                    </CProgress>
                  </div>
                  <CBadge color={getEstadoColor(tarea.estado)}>{tarea.estado}</CBadge>
                </CListGroupItem>
              ))}
            </CListGroup>
          </CTabPane>
        </CTabContent>
      </CCardBody>
    </CCard>
  )
}

AuditDetails.propTypes = {
  auditoria: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string,
    tipo: PropTypes.string,
    estado: PropTypes.string,
    fechaInicio: PropTypes.string,
    fechaFin: PropTypes.string,
    auditores: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        nombre: PropTypes.string,
        rol: PropTypes.string,
      })
    ),
    tareas: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        titulo: PropTypes.string,
        estado: PropTypes.string,
        progreso: PropTypes.number,
      })
    ),
  }).isRequired,
  onBack: PropTypes.func.isRequired,
}

export default AuditDetails 