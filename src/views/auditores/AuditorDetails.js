import React from 'react'
import PropTypes from 'prop-types'
import {
  CCol,
  CRow,
  CBadge,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import DetailViewLayout from '../../components/DetailViewLayout'

const AuditorDetails = ({ auditor, onBack }) => {
  const getStatusBadge = (status) => {
    return status === 'Activo' ? 'success' : 'danger'
  }

  return (
    <DetailViewLayout
      title={auditor.name}
      subtitle={auditor.email}
      status={{
        text: auditor.status,
        color: getStatusBadge(auditor.status),
      }}
      onBack={onBack}
    >
      <CRow>
        <CCol md={6}>
          <CListGroup>
            <CListGroupItem className="d-flex justify-content-between align-items-center">
              Estado
              <CBadge color={getStatusBadge(auditor.status)}>{auditor.status}</CBadge>
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
    </DetailViewLayout>
  )
}

AuditorDetails.propTypes = {
  auditor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    auditorTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  onBack: PropTypes.func.isRequired,
}

export default AuditorDetails 