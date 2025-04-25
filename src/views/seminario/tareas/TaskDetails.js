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
  CProgress,
} from '@coreui/react'
import { CIcon } from '@coreui/icons-react'
import { cilArrowLeft } from '@coreui/icons'

const TaskDetails = ({ task, onBack }) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <CButton color="link" onClick={onBack} className="p-0 me-2">
                <CIcon icon={cilArrowLeft} />
              </CButton>
              <strong>Detalles de la Tarea</strong>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={6}>
                <CListGroup>
                  <CListGroupItem>
                    <strong>Nombre:</strong> {task.name}
                  </CListGroupItem>
                  <CListGroupItem>
                    <strong>Estado:</strong> {task.status}
                  </CListGroupItem>
                  <CListGroupItem>
                    <strong>Progreso:</strong>
                    <div className="mt-2">
                      <CProgress
                        value={task.progress}
                        height={30}
                        animated
                        variant={task.status !== 'Completado' ? 'striped' : ''}
                        color={task.status === 'Completado' ? 'success' : 'warning'}
                      />
                      {task.progress}%
                    </div>
                  </CListGroupItem>
                  <CListGroupItem>
                    <strong>Cláusula:</strong> {task.clause}
                  </CListGroupItem>
                </CListGroup>
              </CCol>
              <CCol xs={12} md={6}>
                <CListGroup>
                  <CListGroupItem>
                    <strong>Descripción:</strong>
                    <p className="mt-2">{task.description}</p>
                  </CListGroupItem>
                  {task.progressComment && (
                    <CListGroupItem>
                      <strong>Comentario de Progreso:</strong>
                      <p className="mt-2">{task.progressComment}</p>
                    </CListGroupItem>
                  )}
                </CListGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default TaskDetails 