import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CBadge,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilPlus, cilPenAlt, cilZoom } from '@coreui/icons'
import AuditorDetails from './AuditorDetails'
import EditAuditor from './EditAuditor'

const Auditores = () => {
  const [selectedAuditor, setSelectedAuditor] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [auditors, setAuditors] = useState([
    {
      id: 1,
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      auditorTypes: ['ISO27001', 'SOX'],
      status: 'Activo',
    },
    {
      id: 2,
      name: 'María García',
      email: 'maria.garcia@example.com',
      auditorTypes: ['ISO27001'],
      status: 'Activo',
    },
  ])

  const handleViewAuditor = (auditor) => {
    setSelectedAuditor(auditor)
    setIsEditing(false)
  }

  const handleEditAuditor = (auditor) => {
    setSelectedAuditor(auditor)
    setIsEditing(true)
  }

  const handleBack = () => {
    setSelectedAuditor(null)
    setIsEditing(false)
  }

  const handleUpdateAuditor = (updatedAuditor) => {
    setAuditors(auditors.map((auditor) => (auditor.id === updatedAuditor.id ? updatedAuditor : auditor)))
    handleBack()
  }

  const getStatusBadge = (status) => {
    return <CBadge color={status === 'Activo' ? 'success' : 'danger'}>{status}</CBadge>
  }

  if (isEditing) {
    return <EditAuditor auditor={selectedAuditor} onBack={handleBack} onUpdateAuditor={handleUpdateAuditor} />
  }

  if (selectedAuditor) {
    return <AuditorDetails auditor={selectedAuditor} onBack={handleBack} />
  }

  return (
    <CRow>
      <h3 className="mb-4">Auditores</h3>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <strong className="me-2">Lista de Auditores</strong>
            </div>
            <CButton color="primary">
              <CIcon icon={cilPlus} className="me-2" />
              Nuevo Auditor
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tipos de Auditoría</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {auditors.map((auditor) => (
                  <CTableRow key={auditor.id}>
                    <CTableHeaderCell scope="row">{auditor.id}</CTableHeaderCell>
                    <CTableDataCell>{auditor.name}</CTableDataCell>
                    <CTableDataCell>{auditor.email}</CTableDataCell>
                    <CTableDataCell>
                      {auditor.auditorTypes.map((type) => (
                        <CBadge key={type} color="info" className="me-1">
                          {type}
                        </CBadge>
                      ))}
                    </CTableDataCell>
                    <CTableDataCell>{getStatusBadge(auditor.status)}</CTableDataCell>
                    <CTableDataCell>
                      <CButton size="sm" className="me-2" onClick={() => handleEditAuditor(auditor)}>
                        <CIcon icon={cilPenAlt} />
                      </CButton>
                      <CButton size="sm" onClick={() => handleViewAuditor(auditor)}>
                        <CIcon icon={cilZoom} />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Auditores 