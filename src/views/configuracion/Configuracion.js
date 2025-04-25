import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const Configuracion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Configuración</strong>
          </CCardHeader>
          <CCardBody>
            <p>Configuración del sistema</p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Configuracion 