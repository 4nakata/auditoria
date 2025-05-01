import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormInput,
  CFormTextarea,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const EditAudit = ({ audit, onBack, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    status: 'pending',
    description: '',
  })

  useEffect(() => {
    if (audit) {
      setFormData(audit)
    }
  }, [audit])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

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
              <strong>{audit ? 'Editar' : 'Nueva'} Auditoría</strong>
            </div>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    id="name"
                    name="name"
                    label="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormSelect
                    id="status"
                    name="status"
                    label="Estado"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                      { label: 'Pendiente', value: 'pending' },
                      { label: 'En Proceso', value: 'in_progress' },
                      { label: 'Completada', value: 'completed' },
                      { label: 'Cancelada', value: 'cancelled' },
                    ]}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormInput
                    type="date"
                    id="startDate"
                    name="startDate"
                    label="Fecha de Inicio"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="date"
                    id="endDate"
                    name="endDate"
                    label="Fecha de Fin"
                    value={formData.endDate}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol xs={12}>
                  <CFormTextarea
                    id="description"
                    name="description"
                    label="Descripción"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol xs={12} className="text-end">
                  <CButton color="secondary" className="me-2" onClick={onBack}>
                    Cancelar
                  </CButton>
                  <CButton color="primary" type="submit">
                    Guardar
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