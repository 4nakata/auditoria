import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CFormCheck,
  CAlert,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const AddAuditor = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'Activo',
    auditorTypes: [],
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      const newTypes = checked
        ? [...formData.auditorTypes, value]
        : formData.auditorTypes.filter((type) => type !== value)
      setFormData({ ...formData, auditorTypes: newTypes })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      setError('Por favor complete todos los campos requeridos')
      return
    }
    onSave(formData)
  }

  const auditorTypeOptions = [
    'Interna',
    'Externa',
    'Sistema de Gestión',
    'Proceso',
    'Producto',
    'Seguridad',
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <CButton color="link" onClick={onCancel} className="p-0 me-2">
                <CIcon icon={cilArrowLeft} />
              </CButton>
              <strong>Agregar Nuevo Auditor</strong>
            </div>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              {error && <CAlert color="danger">{error}</CAlert>}
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    name="name"
                    label="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </CCol>
                <CCol md={6}>
                  <CFormInput
                    type="email"
                    name="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormSelect
                    name="status"
                    label="Estado"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                      { label: 'Activo', value: 'Activo' },
                      { label: 'Inactivo', value: 'Inactivo' },
                    ]}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol>
                  <label className="form-label">Tipos de Auditoría</label>
                  <div className="d-flex flex-wrap gap-3">
                    {auditorTypeOptions.map((type) => (
                      <CFormCheck
                        key={type}
                        type="checkbox"
                        id={type}
                        label={type}
                        value={type}
                        checked={formData.auditorTypes.includes(type)}
                        onChange={handleChange}
                      />
                    ))}
                  </div>
                </CCol>
              </CRow>
              <CRow>
                <CCol className="d-flex justify-content-end gap-2">
                  <CButton color="secondary" onClick={onCancel}>
                    Cancelar
                  </CButton>
                  <CButton color="primary" type="submit">
                    Agregar Auditor
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

export default AddAuditor 