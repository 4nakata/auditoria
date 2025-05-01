import React from 'react'
import PropTypes from 'prop-types'
import {
  CCol,
  CRow,
  CBadge,
  CProgress,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilTask,
  cilNotes,
} from '@coreui/icons'
import DetailViewLayout from '../../components/DetailViewLayout'

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

  const tabs = [
    { id: 1, label: 'Resumen', icon: cilNotes },
    { id: 2, label: 'Auditores', icon: cilUser },
    { id: 3, label: 'Tareas', icon: cilTask },
  ]

  return (
    <DetailViewLayout
      title={auditoria.nombre}
      status={{
        text: auditoria.estado,
        color: getEstadoColor(auditoria.estado),
      }}
      onBack={onBack}
      tabs={tabs}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 1 && (
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
      )}
      {activeTab === 2 && (
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
      )}
      {activeTab === 3 && (
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
      )}
    </DetailViewLayout>
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