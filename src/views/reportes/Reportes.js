import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const Reportes = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Reportes</strong>
          </CCardHeader>
          <CCardBody>
            <p>Generación de reportes</p>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Reportes 