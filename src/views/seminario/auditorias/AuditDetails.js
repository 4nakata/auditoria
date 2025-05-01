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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const AuditDetails = ({ audit, onBack }) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <CButton 
                color="link" 
                className="p-0 me-3"
                onClick={onBack}
              >
                <CIcon icon={cilArrowLeft} size="lg" />
              </CButton>
              <strong>Detalles de la Auditoría</strong>
            </div>
          </CCardHeader>
          <CCardBody>
            <CListGroup>
              <CListGroupItem>
                <strong>Nombre:</strong> {audit?.name}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Fecha de Inicio:</strong> {audit?.startDate}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Fecha de Fin:</strong> {audit?.endDate}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Estado:</strong> {audit?.status}
              </CListGroupItem>
              <CListGroupItem>
                <strong>Descripción:</strong> {audit?.description}
              </CListGroupItem>
            </CListGroup>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AuditDetails 