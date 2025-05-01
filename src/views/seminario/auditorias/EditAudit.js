import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
  CFormLabel,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const EditAudit = ({ audit, onBack, onUpdateAudit }) => {
  const [editedAudit, setEditedAudit] = useState({
    ...audit,
  })

  useEffect(() => {
    setEditedAudit({
      ...audit,
    })
  }, [audit])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedAudit((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdateAudit(editedAudit)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">Editar Auditoría</h5>
              <span className="text-medium-emphasis">{editedAudit.name}</span>
            </div>
            <CButton color="secondary" onClick={onBack}>
              <CIcon icon={cilArrowLeft} className="me-2" />
              Volver
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow className="mb-3">
                <CCol>
                  <CFormLabel>Nombre de la Auditoría</CFormLabel>
                  <CFormInput
                    type="text"
                    name="name"
                    value={editedAudit.name}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormLabel>Tipo de Auditoría</CFormLabel>
                  <CFormSelect
                    name="type"
                    value={editedAudit.type}
                    onChange={handleChange}
                    required
                  >
                    <option value="ISO27001">ISO 27001</option>
                    <option value="ISO9001">ISO 9001</option>
                    <option value="ISO14001">ISO 14001</option>
                    <option value="SOX">SOX</option>
                    <option value="PCI-DSS">PCI-DSS</option>
                    <option value="GDPR">GDPR</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormLabel>Estado</CFormLabel>
                  <CFormSelect
                    name="status"
                    value={editedAudit.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="En Progreso">En Progreso</option>
                    <option value="Completada">Completada</option>
                    <option value="Cancelada">Cancelada</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormLabel>Auditor</CFormLabel>
                  <CFormSelect
                    name="auditor"
                    value={editedAudit.auditor}
                    onChange={handleChange}
                    required
                  >
                    <option value="Juan Pérez">Juan Pérez</option>
                    <option value="María García">María García</option>
                    <option value="Carlos López">Carlos López</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormLabel>Fecha de Inicio</CFormLabel>
                  <CFormInput
                    type="date"
                    name="startDate"
                    value={editedAudit.startDate}
                    onChange={handleChange}
                    required
                  />
                </CCol>
                <CCol>
                  <CFormLabel>Fecha de Fin</CFormLabel>
                  <CFormInput
                    type="date"
                    name="endDate"
                    value={editedAudit.endDate}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol className="d-flex justify-content-end gap-2">
                  <CButton color="secondary" onClick={onBack}>
                    Cancelar
                  </CButton>
                  <CButton type="submit" color="primary">
                    Guardar Cambios
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default EditAudit 