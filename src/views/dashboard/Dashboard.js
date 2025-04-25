import React from 'react'
import { 
  CCard, 
  CCardBody, 
  CCardHeader, 
  CCol, 
  CRow,
  CWidgetStatsF,
  CButton,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { 
  cilChartLine, 
  cilTask, 
  cilSpeedometer, 
  cilCalendar,
  cilClipboard,
  cilPeople,
  cilList,
} from '@coreui/icons'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  // Datos de ejemplo - En una implementación real, estos vendrían de una API o Redux
  const stats = {
    totalAuditorias: 15,
    auditoriasEnProceso: 5,
    tareasCompletadas: 45,
    totalTareas: 60,
    proximasAuditorias: 3,
    totalAuditores: 12,
  }

  const handleNavigate = (path) => {
    navigate(path)
  }

  return (
    <>
      <CRow className="mb-4">
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilChartLine} height={24} />}
            title="Auditorías Totales"
            value={stats.totalAuditorias}
            color="primary"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilSpeedometer} height={24} />}
            title="En Proceso"
            value={stats.auditoriasEnProceso}
            color="warning"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilTask} height={24} />}
            title="Tareas Completadas"
            value={`${stats.tareasCompletadas}/${stats.totalTareas}`}
            color="success"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilCalendar} height={24} />}
            title="Próximas 30 días"
            value={stats.proximasAuditorias}
            color="info"
          />
        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Accesos Rápidos</strong>
            </CCardHeader>
            <CCardBody>
              <CRow className="g-3">
                <CCol sm={6} lg={3}>
                  <CCard className="h-100">
                    <CCardBody className="d-flex flex-column">
                      <div className="text-center mb-3">
                        <CIcon icon={cilClipboard} height={48} className="text-primary" />
                      </div>
                      <h4 className="text-center mb-3">Auditorías</h4>
                      <p className="text-medium-emphasis text-center flex-grow-1">
                        Gestiona las auditorías, asigna auditores y supervisa el progreso.
                      </p>
                      <CButton color="primary" onClick={() => handleNavigate('/auditorias')}>
                        Ver Auditorías
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol sm={6} lg={3}>
                  <CCard className="h-100">
                    <CCardBody className="d-flex flex-column">
                      <div className="text-center mb-3">
                        <CIcon icon={cilPeople} height={48} className="text-success" />
                      </div>
                      <h4 className="text-center mb-3">Auditores</h4>
                      <p className="text-medium-emphasis text-center flex-grow-1">
                        Administra el equipo de auditores y sus asignaciones.
                      </p>
                      <CButton color="success" onClick={() => handleNavigate('/auditores')}>
                        Ver Auditores
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol sm={6} lg={3}>
                  <CCard className="h-100">
                    <CCardBody className="d-flex flex-column">
                      <div className="text-center mb-3">
                        <CIcon icon={cilList} height={48} className="text-warning" />
                      </div>
                      <h4 className="text-center mb-3">Tareas</h4>
                      <p className="text-medium-emphasis text-center flex-grow-1">
                        Revisa y actualiza las tareas de las auditorías en curso.
                      </p>
                      <CButton color="warning" onClick={() => handleNavigate('/tareas')}>
                        Ver Tareas
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>

                <CCol sm={6} lg={3}>
                  <CCard className="h-100">
                    <CCardBody className="d-flex flex-column">
                      <div className="text-center mb-3">
                        <CIcon icon={cilTask} height={48} className="text-info" />
                      </div>
                      <h4 className="text-center mb-3">Nueva Auditoría</h4>
                      <p className="text-medium-emphasis text-center flex-grow-1">
                        Crea una nueva auditoría y configura sus parámetros iniciales.
                      </p>
                      <CButton color="info" onClick={() => handleNavigate('/auditorias/new')}>
                        Crear Auditoría
                      </CButton>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
