import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CListGroup,
  CListGroupItem,
  CBadge,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const AuditorDetails = ({ auditor, onBack }) => {
  const getStatusBadge = (status) => {
    return <CBadge color={status === 'Activo' ? 'success' : 'danger'}>{status}</CBadge>
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{auditor.name}</h5>
              <span className="text-medium-emphasis">{auditor.email}</span>
            </div>
            <CButton color="secondary" onClick={onBack}>
              <CIcon icon={cilArrowLeft} className="me-2" />
              Volver
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={6}>
                <CListGroup>
                  <CListGroupItem className="d-flex justify-content-between align-items-center">
                    Estado
                    {getStatusBadge(auditor.status)}
                  </CListGroupItem>
                  <CListGroupItem>
                    <strong>Email:</strong> {auditor.email}
                  </CListGroupItem>
                </CListGroup>
              </CCol>
              <CCol md={6}>
                <CListGroup>
                  <CListGroupItem>
                    <strong>Tipos de Auditoría:</strong>
                    <div className="mt-2">
                      {auditor.auditorTypes.map((type, index) => (
                        <CBadge key={index} color="info" className="me-1">
                          {type}
                        </CBadge>
                      ))}
                    </div>
                  </CListGroupItem>
                </CListGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AuditorDetails 