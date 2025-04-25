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
  CFormTextarea,
  CAlert,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const EditTask = ({ task, onBack, onUpdateTask }) => {
  const [formData, setFormData] = useState({
    name: task.name,
    status: task.status,
    progress: task.progress,
    progressComment: task.progressComment || '',
    clause: task.clause,
    description: task.description,
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleProgressChange = (value) => {
    setFormData({ ...formData, progress: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.description) {
      setError('Por favor complete todos los campos requeridos')
      return
    }
    onUpdateTask({ ...task, ...formData })
  }

  const getTrackStyle = () => {
    return {
      backgroundColor: formData.progress === 100 ? '#198754' : formData.progress > 0 ? '#ffc107' : '#6c757d',
      height: 10,
    }
  }

  const getHandleStyle = () => {
    return {
      backgroundColor: formData.progress === 100 ? '#198754' : formData.progress > 0 ? '#ffc107' : '#6c757d',
      borderColor: formData.progress === 100 ? '#198754' : formData.progress > 0 ? '#ffc107' : '#6c757d',
      height: 20,
      width: 20,
      marginTop: -5,
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <CButton color="link" onClick={onBack} className="p-0 me-2">
                <CIcon icon={cilArrowLeft} />
              </CButton>
              <strong>Editar Tarea</strong>
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
                  <CFormSelect
                    name="status"
                    label="Estado"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                      { label: 'Pendiente', value: 'Pendiente' },
                      { label: 'Progreso', value: 'Progreso' },
                      { label: 'Completado', value: 'Completado' },
                    ]}
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol md={6}>
                  <CFormInput
                    type="text"
                    name="clause"
                    label="Cláusula"
                    value={formData.clause}
                    onChange={handleChange}
                  />
                </CCol>
                <CCol md={6}>
                  <label className="form-label">Progreso</label>
                  <div className="mt-2">
                    <Slider
                      min={0}
                      max={100}
                      step={1}
                      value={formData.progress}
                      onChange={handleProgressChange}
                      trackStyle={getTrackStyle()}
                      handleStyle={getHandleStyle()}
                      railStyle={{ height: 10 }}
                    />
                    <div className="text-center mt-2">{formData.progress}%</div>
                  </div>
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol>
                  <CFormTextarea
                    name="description"
                    label="Descripción"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CCol>
                  <CFormTextarea
                    name="progressComment"
                    label="Comentario de Progreso"
                    value={formData.progressComment}
                    onChange={handleChange}
                    rows={2}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CCol className="d-flex justify-content-end gap-2">
                  <CButton color="secondary" onClick={onBack}>
                    Cancelar
                  </CButton>
                  <CButton color="primary" type="submit">
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

export default EditTask 