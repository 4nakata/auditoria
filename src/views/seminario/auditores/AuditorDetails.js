import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CBadge,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const AuditorDetails = ({ auditor, onBack }) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <CButton color="link" onClick={onBack} className="p-0 me-2">
                <CIcon icon={cilArrowLeft} />
              </CButton>
              <strong>Detalles del Auditor</strong>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={6}>
                <CListGroup>
                  <CListGroupItem>
                    <strong>Nombre:</strong> {auditor.name}
                  </CListGroupItem>
                  <CListGroupItem>
                    <strong>Email:</strong> {auditor.email}
                  </CListGroupItem>
                  <CListGroupItem>
                    <strong>Estado:</strong>{' '}
                    <CBadge color={auditor.status === 'Activo' ? 'success' : 'danger'}>
                      {auditor.status}
                    </CBadge>
                  </CListGroupItem>
                </CListGroup>
              </CCol>
              <CCol xs={12} md={6}>
                <CListGroup>
                  <CListGroupItem>
                    <strong>Tipos de Auditoría:</strong>
                    <div className="mt-2">
                      {auditor.auditorTypes.map((type) => (
                        <CBadge key={type} color="info" className="me-1">
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