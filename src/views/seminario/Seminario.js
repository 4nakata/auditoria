import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CWidgetStatsF } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilTask, cilCheckCircle, cilClock, cilWarning } from '@coreui/icons'

const Seminario = () => {
  const stats = {
    total: 15,
    completadas: 8,
    enProceso: 4,
    pendientes: 3,
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
            icon={<CIcon icon={cilCheckCircle} height={24} />}
            title="Completadas"
            value={stats.completadas}
            color="success"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilClock} height={24} />}
            title="En Proceso"
            value={stats.enProceso}
            color="warning"
          />
        </CCol>
        <CCol sm={6} lg={3}>
          <CWidgetStatsF
            className="mb-3"
            icon={<CIcon icon={cilWarning} height={24} />}
            title="Pendientes"
            value={stats.pendientes}
            color="danger"
          />
        </CCol>
      </CRow>

      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Seminario</strong>
            </CCardHeader>
            <CCardBody>
              <p>Contenido del seminario</p>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Seminario 