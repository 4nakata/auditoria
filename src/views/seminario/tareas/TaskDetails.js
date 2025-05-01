import React from 'react'
import {
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CProgress,
} from '@coreui/react'
import DetailViewLayout from '../../../components/DetailViewLayout'

const TaskDetails = ({ task, onBack }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completado':
        return 'success'
      case 'Progreso':
        return 'warning'
      case 'Pendiente':
        return 'danger'
      default:
        return 'secondary'
    }
  }

  return (
    <DetailViewLayout
      title={task.name}
      status={{
        text: task.status,
        color: getStatusColor(task.status),
      }}
      onBack={onBack}
    >
      <CRow>
        <CCol xs={12} md={6}>
          <CListGroup>
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
    </DetailViewLayout>
  )
}

export default TaskDetails 