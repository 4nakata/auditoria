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
import AuditDetails from './AuditDetails'
import EditAudit from './EditAudit'

const Auditorias = () => {
  const [selectedAudit, setSelectedAudit] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [audits, setAudits] = useState([
    {
      id: 1,
      name: 'Auditoría ISO 27001 2024',
      type: 'ISO27001',
      status: 'En Progreso',
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      auditor: 'Juan Pérez',
      progress: 45,
    },
    {
      id: 2,
      name: 'Auditoría SOX Q1 2024',
      type: 'SOX',
      status: 'Pendiente',
      startDate: '2024-04-01',
      endDate: '2024-04-30',
      auditor: 'María García',
      progress: 0,
    },
  ])

  const handleViewAudit = (audit) => {
    setSelectedAudit(audit)
    setIsEditing(false)
  }

  const handleEditAudit = (audit) => {
    setSelectedAudit(audit)
    setIsEditing(true)
  }

  const handleBack = () => {
    setSelectedAudit(null)
    setIsEditing(false)
  }

  const handleUpdateAudit = (updatedAudit) => {
    setAudits(audits.map((audit) => (audit.id === updatedAudit.id ? updatedAudit : audit)))
    handleBack()
  }

  const getStatusBadge = (status) => {
    const statusColors = {
      'Pendiente': 'warning',
      'En Progreso': 'info',
      'Completada': 'success',
      'Cancelada': 'danger',
    }
    return <CBadge color={statusColors[status]}>{status}</CBadge>
  }

  if (isEditing) {
    return <EditAudit audit={selectedAudit} onBack={handleBack} onUpdateAudit={handleUpdateAudit} />
  }

  if (selectedAudit) {
    return <AuditDetails audit={selectedAudit} onBack={handleBack} />
  }

  return (
    <CRow>
      <h3 className="mb-4">Auditorías</h3>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <strong className="me-2">Lista de Auditorías</strong>
            </div>
            <CButton color="primary">
              <CIcon icon={cilPlus} className="me-2" />
              Nueva Auditoría
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CTable hover>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Nombre</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tipo</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Estado</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Auditor</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Progreso</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {audits.map((audit) => (
                  <CTableRow key={audit.id}>
                    <CTableHeaderCell scope="row">{audit.id}</CTableHeaderCell>
                    <CTableDataCell>{audit.name}</CTableDataCell>
                    <CTableDataCell>{audit.type}</CTableDataCell>
                    <CTableDataCell>{getStatusBadge(audit.status)}</CTableDataCell>
                    <CTableDataCell>{audit.auditor}</CTableDataCell>
                    <CTableDataCell>{audit.progress}%</CTableDataCell>
                    <CTableDataCell>
                      <CButton size="sm" className="me-2" onClick={() => handleEditAudit(audit)}>
                        <CIcon icon={cilPenAlt} />
                      </CButton>
                      <CButton size="sm" onClick={() => handleViewAudit(audit)}>
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

export default Auditorias 