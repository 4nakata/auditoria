import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormInput,
  CFormTextarea,
  CFormSelect,
  CButton,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const AddTask = ({ onBack, onAddTask }) => {
  const [task, setTask] = useState({
    name: '',
    clause: '',
    description: '',
    status: 'Pendiente',
    progress: 0,
    progressComment: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTask(task)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Agregar Nueva Tarea</h4>
            <CButton color="secondary" onClick={onBack}>
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
                    name="name"
                    label="Nombre de la Tarea"
                    value={task.name}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormInput
                    type="text"
                    name="clause"
                    label="Cláusula"
                    value={task.clause}
                    onChange={handleChange}
                    required
                  />
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormTextarea
                    name="description"
                    label="Descripción"
                    value={task.description}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormSelect
                    name="status"
                    label="Estado"
                    value={task.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="Pendiente">Pendiente</option>
                    <option value="Progreso">En Progreso</option>
                    <option value="Completado">Completado</option>
                    <option value="Bloqueado">Bloqueado</option>
                  </CFormSelect>
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CInputGroup>
                    <CFormInput
                      type="number"
                      name="progress"
                      label="Progreso (%)"
                      value={task.progress}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      required
                    />
                    <CInputGroupText>%</CInputGroupText>
                  </CInputGroup>
                </CCol>
              </CRow>

              <CRow className="mb-3">
                <CCol>
                  <CFormTextarea
                    name="progressComment"
                    label="Comentarios de Progreso"
                    value={task.progressComment}
                    onChange={handleChange}
                    rows={2}
                  />
                </CCol>
              </CRow>

              <CRow>
                <CCol className="d-flex justify-content-end">
                  <CButton type="submit" color="primary">
                    Guardar Tarea
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

export default AddTask 