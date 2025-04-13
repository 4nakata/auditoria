import React from 'react'
import {
  CButton,
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
  CProgress,
} from '@coreui/react'

import { CIcon } from '@coreui/icons-react'
import { cilPenAlt, cilZoom } from '@coreui/icons'

const TasksList = () => {
  const tasks = [
    {
      id: 1,
      name: 'Revisión de la Política de Seguridad',
      status: 'Completado',
      progress: 100,
      progressComment: '✅ Política documentada y comunicada correctamente',
      clause: 'A.5.1',
      description:
        'Verificar que la política está alineada con los objetivos del negocio, aprobada por la dirección y disponible para todos los empleados.',
    },
    {
      id: 2,
      name: 'Validación del Inventario de Activos',
      status: 'Progreso',
      progress: 75,
      clause: 'A.8.1',
      description:
        'Confirmar que el inventario incluye todos los activos críticos con sus respectivos propietarios y procesos de actualización.',
    },
    {
      id: 3,
      name: 'Auditoría de Controles de Acceso Físico',
      status: 'Pendiente',
      progress: 0,
      clause: 'A.7.1',
      description:
        'Evaluar mecanismos de control de acceso (biométricos, tarjetas) en áreas sensibles como salas de servidores.',
    },
    {
      id: 4,
      name: 'Pruebas de Recuperación de Backups',
      status: 'Progreso',
      progress: 50,
      clause: 'A.8.13',
      description:
        'Validar que los backups pueden restaurarse exitosamente mediante pruebas documentadas.',
    },
    {
      id: 5,
      name: 'Entrevistas sobre Concienciación en Seguridad',
      status: 'Completado',
      progress: 100,
      progressComment: '🎯 100% del personal entrevistado conoce las políticas básicas',
      clause: 'A.7.2',
      description:
        'Evaluar mediante entrevistas el conocimiento de los empleados sobre phishing, contraseñas y reporte de incidentes.',
    },
    {
      id: 6,
      name: 'Análisis de Vulnerabilidades Técnicas',
      status: 'Pendiente',
      progress: 0,
      clause: 'A.8.8',
      description:
        'Ejecutar herramientas como Nessus para identificar vulnerabilidades en sistemas y redes.',
    },
    {
      id: 7,
      name: 'Revisión de Logs de Seguridad',
      status: 'Progreso',
      progress: 30,
      clause: 'A.8.15',
      description:
        'Auditar registros de eventos de seguridad (intentos de acceso, cambios críticos) con retención mínima de 6 meses.',
    },
    {
      id: 8,
      name: 'Validación del Plan de Continuidad',
      status: 'Pendiente',
      progress: 0,
      clause: 'A.8.30',
      description:
        'Verificar que el plan incluye roles, procedimientos y pruebas anuales para recuperación ante desastres.',
    },
    {
      id: 9,
      name: 'Cumplimiento de Protección de Datos',
      status: 'Completado',
      progress: 100,
      progressComment: '🌟 Cumple con GDPR y regulaciones locales (LGPD)',
      clause: 'A.5.34',
      description:
        'Revisar consentimientos, políticas de privacidad y procedimientos para solicitudes de borrado de datos.',
    },
    {
      id: 10,
      name: 'Elaboración del Informe de Auditoría',
      status: 'Pendiente',
      progress: 0,
      clause: 'N/A',
      description:
        'Documentar hallazgos, no conformidades y recomendaciones con prioridades de acción.',
    },
  ]

  return (
    <CRow>
      <h3 className="mb-4">Lista de Tareas</h3>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong className="me-2">Kxnx</strong>
            <br />
            <span className="text-medium-emphasis">Lider de auditoria</span>
          </CCardHeader>
          <CCardBody>
            <CTable hover className="text-center">
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tarea</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Porcentaje</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {tasks.map((task) => (
                  <CTableRow
                    key={task.id}
                    className={task.status === 'Bloqueado' ? 'table-grey' : ''}
                  >
                    <CTableHeaderCell scope="row">{task.id}</CTableHeaderCell>
                    <CTableDataCell>{task.name}</CTableDataCell>
                    <CTableDataCell>
                      <CProgress
                        value={task.progress}
                        height={30}
                        animated
                        variant={task.status !== 'Completado' ? 'striped' : ''}
                        color={task.status === 'Completado' ? 'success' : 'warning'}
                      />
                      {task.progress}%
                    </CTableDataCell>
                    <CTableDataCell>
                      {task.status !== 'Bloqueado' && (
                        <>
                          <CButton size="sm" className="me-2">
                            <CIcon icon={cilPenAlt} />
                          </CButton>
                          <CButton size="sm">
                            <CIcon icon={cilZoom} />
                          </CButton>
                        </>
                      )}
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

export default TasksList
