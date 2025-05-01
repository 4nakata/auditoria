import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
  CFormCheck,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const EditAuditor = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const location = useLocation()
  const auditorData = location.state?.auditor

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipo: 'Interno',
    estado: 'Activo',
    tiposAuditoria: {
      financiera: false,
      operacional: false,
      cumplimiento: false,
      sistemas: false,
    },
  })

  useEffect(() => {
    if (auditorData) {
      setFormData({
        nombre: auditorData.nombre,
        email: auditorData.email,
        tipo: auditorData.tipo,
        estado: auditorData.estado,
        tiposAuditoria: auditorData.tiposAuditoria,
      })
    }
  }, [auditorData])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        tiposAuditoria: {
          ...formData.tiposAuditoria,
          [name]: checked,
        },
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí normalmente enviarías los datos a la API
    console.log('Datos a guardar:', formData)
    navigate('/auditores')
  }

  const handleBack = () => {
    navigate('/auditores')
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-1">{id ? 'Editar Auditor' : 'Nuevo Auditor'}</h5>
              {id && <span className="text-medium-emphasis">{formData.nombre}</span>}
            </div>
            <CButton color="secondary" onClick={handleBack}>
              <CIcon icon={cilArrowLeft} className="me-2" />
              Volver
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleSubmit}>
              <CRow className="mb-3">
                <CCol>
                  <CFormInput
                    type="text"
                    name="nombre"
                    label="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
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
                <CCol>
                  <CFormSelect
                    name="tipo"
                    label="Tipo de Auditor"
                    value={formData.tipo}
                    onChange={handleChange}
                    options={[
                      { label: 'Interno', value: 'Interno' },
                      { label: 'Externo', value: 'Externo' },
                    ]}
                  />
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormSelect
                    name="estado"
                    label="Estado"
                    value={formData.estado}
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
                    <CFormCheck
                      type="checkbox"
                      name="financiera"
                      label="Financiera"
                      checked={formData.tiposAuditoria.financiera}
                      onChange={handleChange}
                    />
                    <CFormCheck
                      type="checkbox"
                      name="operacional"
                      label="Operacional"
                      checked={formData.tiposAuditoria.operacional}
                      onChange={handleChange}
                    />
                    <CFormCheck
                      type="checkbox"
                      name="cumplimiento"
                      label="Cumplimiento"
                      checked={formData.tiposAuditoria.cumplimiento}
                      onChange={handleChange}
                    />
                    <CFormCheck
                      type="checkbox"
                      name="sistemas"
                      label="Sistemas"
                      checked={formData.tiposAuditoria.sistemas}
                      onChange={handleChange}
                    />
                  </div>
                </CCol>
              </CRow>

              <CRow>
                <CCol className="d-flex justify-content-end gap-2">
                  <CButton color="secondary" onClick={handleBack}>
                    Cancelar
                  </CButton>
                  <CButton type="submit" color="primary">
                    {id ? 'Guardar Cambios' : 'Crear Auditor'}
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

export default EditAuditor 